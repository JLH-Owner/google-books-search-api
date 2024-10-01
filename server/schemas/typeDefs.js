const typeDefs = `#graphql
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID
        authors: [String]!
        description: String
        title: String
        image: Float
        link: String
    }
        
    type Auth {
        token: ID!
        user: [User]!
    }
        
    type Query {
        users: [User]!
        user(username: String!): User
        # Because we have the context functionality in place to check a JWT and decode its data,
        me: User
    }
        
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth        
        saveBook(userId: ID!, bookId: ID!): User
        removeUser: User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;

    