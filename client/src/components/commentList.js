import React from 'react';
import { useQuery, gql } from '@apollo/client';
// import { QUERY_COMMENTS } from '../utils/queries';

const QUERY_COMMENTS = gql`
query queryComment{
  queryComment {
    _id
  commentText
  }
}
`;
function CommentList() { 
  const { data, loading, error } = useQuery(QUERY_COMMENTS);

  if (loading) return "loading"
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>Comments pls</h1>
      <ul>
        {data.queryComment.map((bruh) => (
          <li key={bruh.id}>{bruh.commentText}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList

