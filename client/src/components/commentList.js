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

// import axios from "axios";
// const CommentList = ({ comments = [] }) => {
//   const { loading, data, error } = useQuery(QUERY_COMMENTS);

//   return axios({
//     // url: endpoint,
//     method: "POST",
//     data: {
//       query: QUERY_COMMENTS
//     }
//   }).then(response => response.data.data);

//   if (loading) return "loading"
//   if (error) return <pre>{error.message}</pre>

  // return(
  //   <div>
  //     <h2>
  //       This comment ooo ahah
  //     </h2>
  //     <div></div>
  //   </div>
  // );

  
  // const commentData = data?.queryComments || {};
  // console.log(comments);
  // if (!comments.length) {
  //   return <h3>No Comments Yet</h3>;
  // }
  // return (
  //   <>
  //     <h3 className="p-5 display-inline-block" >
  //       Comments
  //     </h3>
  //     <div className="flex-row my-4">
  //       {comments &&
  //         comments.map((comment) => (
  //           <div key={comment._id} className="col-12 mb-3 pb-3">
  //             <div className="p-3 bg-dark text-light">
  //               <h5 className="card-header"> 
  //                 An anonymous user commented{' '}
  //               </h5>
  //               <p className="card-body">{comment.commentText}</p>
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   </>
  // );









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

