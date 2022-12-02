import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
query queryComment{
  queryComment {
    _id
  commentText
  }
}
`;
