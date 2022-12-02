import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition = "rnbqkbnr/pppppppp/R7/8/8/8/1PPPPPPP/1NBQKBNR w KQkq - 0 1";


const Puzzle = () => {
    return (
        <div>
            <h1>The Rook:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p> The Rook can move in a straight line as long as there's nothing in front of it.</p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
