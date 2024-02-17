import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      text
      rating
      createdAt
      repository {
        id
        name
      }
      user {
        id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(user: $input) {
      id
      username
      createdAt
      reviewCount
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
          }
        }
      }
    }
  }  
`

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id)
  } 
`



