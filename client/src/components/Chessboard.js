import React from 'react';
import Chessdiagram from 'react-chessdiagram';

const lightSquareColor = '#a8edbd';
const darkSquareColor = '#5d4d6b';
const flip = false;
const squareSize = 40;

function onMovePiece(piece, fromSquare, toSquare) {
    let message = 'You moved ' + piece + fromSquare + ' to ' + toSquare + ' !';
    console.log(message);
}
function Chessboard(currentPosition) {
    // DEMO, PLEASE DELETE LATER
    const samplePositionChangeToCurrentPosition =  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    // DEMO, PLEASE DELETE LATER
    return (
        <div>
            <Chessdiagram flip={flip} fen={samplePositionChangeToCurrentPosition} squareSize={squareSize}
                lightSquareColor={lightSquareColor} darkSquareColor={darkSquareColor} onMovePiece={onMovePiece} />,
        </div>
    );
}

export default Chessboard;
