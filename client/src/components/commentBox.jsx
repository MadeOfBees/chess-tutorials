// import React, { useState, useRef } from "react";
// // import { ADD_COMMENT } from "../utils/mutations"
// import cn from "classnames";
// import "../commentStyles.css";

// const START_HEIGHT = 40

// const Comments = ({ bruh }) => {

//     const [isExpanded, setIsExpanded] = useState(false);
//     const [commentValue, setCommentValue] = useState("");

//     const outerHeight = useRef(START_HEIGHT);
//     const textRef = useRef(null);
//     const containerRef = useRef(null);


//     //expands when refrencing the comments to display the whole box/form
//     const onExpand = () => {
//         if (!isExpanded) {
//             outerHeight.current = containerRef.current.scrollHeight;
//             setIsExpanded(true);
//         };
//     };
//     //will change comment value depending on the amount of comments
//     const onChange = (e) => {
//         setCommentValue(e.target.value);
//     }

//     //sets comment value to zero when the box is closed
//     const onClose = () => {
//         setCommentValue("");
//         setIsExpanded(false);
//     }




//     //stops from automatically clearing the data
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         // try {
//         //     const { data } = await addComment({
//         //       variables: { bruh, commentValue },
//         //     });
      
//         //     setCommentValue('');
//         //   } catch (err) {
//         //     console.error(err);
//         //   }
//         // };

//     }


//     //return the forma data and look by...
//     return (
//         <form
//             onSubmit={onSubmit}
//             ref={containerRef}
//             className={cn("comment-box", {
//                 expanded: isExpanded,
//                 collapsed: !isExpanded,
//                 modified: commentValue.length > 0
//             })}
//             style={{ minHeight: isExpanded ? outerHeight : START_HEIGHT }}
//         >
//             <div className="commentHeader">
//                 <div className="commentUser">
//                     <img src="avatar/path" alt="User avatar" />
//                 </div>
//             </div>


//             <label htmlFor="comment">Add your comment/tip/frustration Here</label>


//             <textarea
//                 ref={textRef}
//                 onClick={onExpand}
//                 onFocus={onExpand}
//                 onChange={onChange}
//                 className="comment-field"
//                 placeholder="Add a comment here"
//                 value={commentValue}
//                 name="comment"
//                 id="comment"
//             />

//             <div className="responseButtons">
//                 <button type="button" className="nevermindButton" onClick={onClose}>Cancel</button>
//                 <button type="submit" disabled={commentValue.length < 1}>Comment</button>

//             </div>

//         </form>);

// };

// // export const Comments = "Comment"
// export default Comments
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../utils/mutations';

const CommentForm = () => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { commentText }
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>Frustrated? Comment Below...</h4>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;