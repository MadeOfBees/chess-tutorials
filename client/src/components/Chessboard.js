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
    const pos = currentPosition.samplePosition;
    return (
        <div>
            <Chessdiagram flip={flip} fen={pos} squareSize={squareSize}
                lightSquareColor={lightSquareColor} darkSquareColor={darkSquareColor} onMovePiece={onMovePiece} />
        </div>
    );
}

export default Chessboard;
