
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

    const onExpand = () => {
        if(!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    }

    const onChange = (e) =>{
        setCommentValue(e.target.value);
    }

    
    
    return ();

};

export default commentBox;