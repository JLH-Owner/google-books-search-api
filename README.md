# Google Books Search Engine API

## Summary
A search engine designed to allow a user to search for books to read and save them for later purchase. The application was initially built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It was refactored to be a GraphQL API built with Apollo Server.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [Credits](#credits)
- [Images](#images)
- [LINKS](#links)


## Description
### GIVEN a book search engine

* WHEN I load the search engine

    - THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

* WHEN I click on the Search for Books menu option
    
    - THEN I am presented with an input field to search for books and a submit button
* WHEN I am not logged in and enter a search term in the input field and click the submit button
    
    - THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
* WHEN I click on the Login/Signup menu option
    
    - THEN a modal appears on the screen with a toggle between the option to log in or sign up
* WHEN the toggle is set to Signup
    
    - THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
* WHEN the toggle is set to Login
    
    - THEN I am presented with two inputs for an email address and a password and login button
* WHEN I enter a valid email address and create a password and click on the signup button
    
    - THEN my user account is created and I am logged in to the site
* WHEN I enter my account’s email address and password and click on the login button
    
    - THEN I the modal closes and I am logged in to the site
* WHEN I am logged in to the site
    
    - THEN the menu options change to Search for Books, an option to see my saved books, and Logout
* WHEN I am logged in and enter a search term in the input field and click the submit button
    
    - THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
* WHEN I click on the Save button on a book
    
    - THEN that book’s information is saved to my account
* WHEN I click on the option to see my saved books
    
    - THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
* WHEN I click on the Remove button on a book
    
    - THEN that book is deleted from my saved books list
* WHEN I click on the Logout button
    
    - THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Installation 
Execute npm install to install all necessary packages and dependencies.

## Usage
Deploy site using [Link](#links) below. Signup, Search for books, save the books you would like, then view saved books. If needed, you have the option to delete the book from your saved list.

## Author
### Stacy Herbert

## Credits
The initial code was given by the instructor as a RESTful API application using the Vite + React technologies. 

## Images
<img src="assets\images\signup.png">
<img src="assets\images\signup-added-user-mongodb.png">
<img src="assets\images\login.png">
<img src="assets\images\apollo-server.png">
<img src="assets\images\search-results.png">
<img src="assets\images\save-book.png">

## LINKS
### GitHub Repository: 

https://github.com/JLH-Owner/google-books-search-api

### Live Deploy on Render:

https://google-books-search-api.onrender.com