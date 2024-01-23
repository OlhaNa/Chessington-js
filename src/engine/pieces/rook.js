import Piece from './piece';
import Board from '../board';
import Square from '../square';
import Player from '../player';



export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
    
        // Check all squares in the rook's row
        for (let i = 0; i < 8; i++) {
            if (i !== location.col) {
                moves.push(Square.at(location.row, i));
            }
        }
    
        // Check all squares in the rook's column
        for (let i = 0; i < 8; i++) {
            if (i !== location.row) {
                moves.push(Square.at(i, location.col));
            }
        }
    
        return moves;
    }
}


