
import React, { useState, useRef } from "react";
import cn from "classnames";
import "../commentStyles.css";

const START_HEIGHT = 40

const commentBox = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const outerHeight = useRef(START_HEIGHT); 
    const textRef = useRef(null);
    const containerRef = useRef(null);


    //expands when refrencing the comments to display the whole box/form
    const onExpand = () => {
        if(!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    }
    //will change comment value depending on the amount of comments
    const onChange = (e) =>{
        setCommentValue(e.target.value);
    }
    //sets comment value to zero when the box is closed
    const onClose = () => {
        setCommentValue("");
        setIsExpanded(false);
    }
    //stops from automatically clearing the data
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('sending form data somewhere I guess')
    }
    //add a form to the return
    return (<form
    onSubmit={onSubmit}
    ref={containerRef}
    className={cn("comment-box", {
        expanded: isExpanded,
        collapsed: !isExpanded,
        modified: commentValue.length > 0
    })}
    style={{minHeight: isExpanded ? outerHeight: START_HEIGHT}}
    >
        <div className="commentHeader">
            <div className="commentUser">
                <img src="avatar/path" alt="User avatar"/>
            </div>
        </div>
    <label htmlFor="comment">Add your comment/tip/frustration Here</label>
    <textarea 
    ref={textRef}
    onClick={onExpand}
    
    
    
    />

    </form>);

};

export default commentBox;