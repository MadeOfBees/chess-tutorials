import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Chess = () => {
    const {name} = useParams();
    const [image, setImage] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
        if(name.toLowerCase() == "king") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/7/7e/Chess_piece_-_White_king.jpg")
            setText("The king is the most important piece in the game of chess. It may move to any adjoining square; it may also perform a move known as castling. If a player's king is threatened with capture, it is said to be in check, and the player must remove the threat of capture on the next move. If this cannot be done, the king is said to be in checkmate, resulting in a loss for that player. A player cannot make any move that places their own king in check. Despite this, the king can become a strong offensive piece in the endgame or, rarely, the middlegame.The white king starts the game on e1; the black king starts on e8. Unlike the other pieces, only one king per player can be on the board at any time, and the kings are never removed from the board during the game.The king's predecessor is the piece of the same name in shatranj. Like the modern king, it is the most important piece in the game and can move to any neighboring square. However, in shatranj, baring the king is a win unless the opponent can do the same immediately afterward; stalemating the king is a win; and castling does not exist")
        } else if (name.toLowerCase() == "queen") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_piece_-_White_queen.jpg")
            setText("The queen is the most powerful piece in the game of chess. It can move any number of squares vertically, horizontally or diagonally, combining the powers of the rook and bishop. Each player starts the game with one queen, placed in the middle of the first rank next to the king. Because the queen is the strongest piece, a pawn is promoted to a queen in the vast majority of cases. The white queen starts on d1, while the black queen starts on d8. With the chessboard oriented correctly, the white queen starts on a white square and the black queen starts on a black square. The queen captures by moving to the square on which an enemy piece stands.")
        } else if (name.toLowerCase() == "rook") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/f/fe/Chess_piece_-_White_rook.JPG")
            setText("The rook is a piece in the game of chess. It may move any number of squares horizontally or vertically without jumping, and it may capture an enemy piece on its path; additionally, it may participate in castling. Each player starts the game with two rooks, one in each corner on their own side of the board. The white rooks start on squares a1 and h1, while the black rooks start on a8 and h8. The rook cannot jump over pieces. The rook may capture an enemy piece by moving to the square on which the enemy piece stands, removing it from play. ")
        } else if (name.toLowerCase() == "bishop") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/1/1d/Chess_piece_-_White_bishop.JPG")
            setText("A bishop is a piece in the board game of chess. Each player starts the game with two bishops. At the start of a game, one bishop is placed in between the knight and the queen. This piece is the queen's bishop. The other bishop is placed between the knight and the king. This piece is the king's bishop. The bishops are also referred to as the light-square bishop and dark-square bishop, depending on the square color it starts on. In chess notation, the starting squares are c1 and f1 for White's bishops, and c8 and f8 for Black's bishops. In the centre of an empty board, a bishop can move to 13 squares. A bishop can never leave the color of square that it starts on.")
        } else if (name.toLowerCase() == "knight") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/3/31/Chess_piece_-_White_knight.JPG")
            setText("The knight is a piece in the game of chess, represented by a horse's head and neck. It moves two squares vertically and one square horizontally, or two squares horizontally and one square vertically, jumping over other pieces. Each player starts the game with two knights on the b- and g-files, each located between a rook and a bishop.[1] When moving, the knight can jump over pieces to reach its destination.")
        } else if (name.toLowerCase() == "pawn") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/e/ed/Chess_piece_-_White_pawn.JPG")
            setText("The pawn is the most numerous and weakest piece in the game of chess. It may move one vacant square directly forward, it may move two vacant squares directly forward on its first move, and it may capture one square diagonally forward. Each player begins a game with eight pawns, one on each square of their second rank. The white pawns start on a2 through h2; the black pawns start on a7 through h7. Each player begins the game with eight pawns placed along their second rank. The first time a pawn moves, it has the additional option of vertically advancing two squares, provided that both squares are vacant. Unlike other pieces, the pawn can only move forwards.  A pawn captures by moving diagonally forward one square to the left or right")
        } 
    }, [name])
    
  return (
    <div className="chess-wrapper h-100 position-relative">
        <div className="image-wrapper h-100">
            <img className="img-fluid w-100 h-100" src={image} alt="chess image" />
        </div>
        <div className="chess-text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Chess