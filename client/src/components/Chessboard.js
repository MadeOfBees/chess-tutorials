import React from 'react';
import Chessdiagram from 'react-chessdiagram';


const lightSquareColor = '#FFFFFF';
const darkSquareColor = '#999999';
const flip = false;
const squareSize = 40;

function onMovePiece(piece, fromSquare, toSquare) {
    let message = 'You moved ' + piece + fromSquare + ' to ' + toSquare + ' !';
    console.log(message);
}

function Chessboard(currentPosition) {
    // DEMO, PLEASE DELETE LATER
    const samplePosition =  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    // DEMO, PLEASE DELETE LATER
    return (
        <div>
            <Chessdiagram flip={flip} fen={samplePosition} squareSize={squareSize}
                lightSquareColor={lightSquareColor} darkSquareColor={darkSquareColor} onMovePiece={onMovePiece} />
        </div>
    );
}

export default Chessboard;
