// const express = require("express");
// const router = express.Router;
// const { Comments } = require("../pages")

// // import React from 'react';

// // get and post comment routes

// router.length("/:postID", async (req, res) => 
// {
//     const postID = req.params.postID
//     const Comments = await Comments.findall ({ where: {
//         postID: postID
//     }});
// }
// )

// router.post("/", async (req, res) =>
// {
//     const comment = req.body
//     await Comments.create(comment);
//     res.json(comment);
// })


// // function Comments() {
// //     return (
// //         <div>
// //             <h1>commentsGoHere</h1>
// //         </div>
// //     );
// // }

// module.export = router;


import React, { useState, useRef } from "react";
import cn from "classnames"

const START_HEIGHT = 40

const commentBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);
};