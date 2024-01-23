import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../board';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const options = [location.row + 1, location.row + 2];
        const blackOptions = [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)];
        if (this.player === Player.WHITE) {
            let blackLocation = board.findPiece(Player.BLACK);
            if (Square.at(location.row + 1, location.col) ) {
                return [];
            }
            if (location.row >= 2 && location.row < 7) {
                return [Square.at(location.row + 1, location.col)];
            } else if (location.row === 1) {
                return [Square.at(options[0], location.col), Square.at(options[1], location.col)];
            }
        } else {
            if (location.row < 6 && location.row > 0) {
                return [Square.at(location.row - 1, location.col)];
                
            } else if (location.row === 6) {
                return [blackOptions[0], blackOptions[1]];
            }
        }
    }

 }


            