import { gql } from "@apollo/client";

//get user
export const GET_ME = gql`
    query me {
        me {
        _id
        username
        email
        bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;