import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query getComments($commentID: ID!) {
    comments($commentID: ID!) {
      _id
      commentText
      createdAt
    }
  }
`;