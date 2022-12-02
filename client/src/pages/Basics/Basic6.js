import React from "react";
import Chessboard from "../../components/Chessboard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/commentBox.jsx';
const samplePosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPKPPP/RNBQ1BNR w KQkq - 0 1";


const Puzzle = () => {
    return (
        <div>
            <h1>The King:</h1>
            <Row>
                <Col xs={1} />
                <Col xs={4}><Chessboard samplePosition = {samplePosition} /></Col>
                <Col xs={1} />
                <Col xs={5}>
                    <p> Like The Pawn, The King can only move 1 space at a time but can move and attack in any direction. When the king is killed the game is over and the player with a King still standing wins </p>
                </Col>
                <Col xs={1} />
            </Row>
            <Comment />
        </div>
    );
};

export default Puzzle;
