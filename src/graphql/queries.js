import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          name
          fullName
          description
          stargazersCount
          ownerName
          ownerAvatarUrl
          forksCount
          reviewCount
          ratingAverage
          language
          url
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

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      name
      fullName
      description
      stargazersCount
      ownerName
      ownerAvatarUrl
      forksCount
      reviewCount
      ratingAverage
      language
      url
    }
  }
`;
