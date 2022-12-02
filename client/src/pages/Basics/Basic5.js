import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition =  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1";


const Puzzle = () => {
    return (
        <div>
            <h1>The Pawn:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p>The Pawn can only move forward, and can only capture diagonally. On The Pawn's first turn, it can move two spaces but on subsiquent turns can only move one at a time. If you get the pawn to the end of the board it can become any piece you want it to become.</p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
