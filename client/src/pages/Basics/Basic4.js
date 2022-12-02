import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition = "rnbqkbnr/pppppppp/8/8/5B2/3P4/PPP1PPPP/RN1QKBNR w KQkq - 0 1";


const Puzzle = () => {
    return (
        <div>
            <h1>The Bishop:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p> The Bishop can move in a straight line as long as there's nothing in front of it. </p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
