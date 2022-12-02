import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition = "rnbqkbnr/pppppppp/8/8/7/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";


const Puzzle = () => {
    return (
        <div>
            <h1>Basic Board Setup:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p> This is how a chessboard is set up </p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
