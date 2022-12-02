import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition = "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 0 1";

const Puzzle = () => {
    return (
        <div>
            <h1>The Knight:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p> The Knight moves in an L shape and can jump over other pieces. </p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
