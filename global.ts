const all_squares = allSquares();
let board = emptyBoard();
let board_color = emptyBoard();
let connected_set = noSquaresYet();
let connected_adjacent_set = noSquaresYet();
let legal_set = noSquaresYet();
let thetan_path_set = noSquaresYet();
let thetan_one_step_legal_set = noSquaresYet();
let thetan_two_step_legal_set = noSquaresYet();
let knight_set = noSquaresYet();
let player_set : Set<Square>[] = [noSquaresYet(),noSquaresYet()];
let source_square : Square = "0,0";
let target_square : Square = "0,0";
let square_last_clicked_on : Square = "0,0";
let dest_square : Square = "0,0";
let this_piece_code : number = 0;
let random_move_mode : boolean = false;
let piece_is_selected : boolean = false;
let destination_mode : boolean = false;

