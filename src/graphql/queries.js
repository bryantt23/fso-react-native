import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) { 
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
      reviews {
        edges {
          node {
          createdAt
          rating
          text
          id
          repositoryId
            repository {
            id
            fullName
            url
          }
        }
      }
    }
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
      reviews {
        edges {
          node {
          id
          text
          rating
          createdAt
            user {
            id
            username
          }
        }
      }
    }
  }
}
`;
