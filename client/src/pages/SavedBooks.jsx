import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
//import { useEffect } from 'react';
import Auth from '../utils/auth';

const SavedBooks = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId }, 
      });
      if (data) {
        console.log('Book deleted successfully');
        setDeleteSuccess(true);
      }
      
    } catch (err) {
      console.error('Error deleting book:', err);
      alert('Failed to delete the book. Please try again.')
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  
  const userData = data?.me;

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container fluid>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container fluid>
        <h2 className='pt-5'>
          {userData && userData.savedBooks.length > 0
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData && userData.savedBooks.map((book) => (
            <Col md="4" key={book.bookId}>
                <Card border='dark'>
                  {book.image && <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors.join(",")}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                    {deleteSuccess && <div className="alert alert-success">Book deleted successfully!</div>} 
                  </Card.Body>
                </Card>
              </Col>
          ))}          
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
