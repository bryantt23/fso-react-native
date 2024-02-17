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
    query Me($first: Int, $after: String) {
  me {
    id
    username
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          repository {
            id
            fullName
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
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
