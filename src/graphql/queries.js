import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          name
          fullName
          description
          stargazersCount
          ownerName
          ownerAvatarUrl
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

// other queries...
export const GET_ME = gql`
  query {
    me {
      id
      username
    }
}
`;
