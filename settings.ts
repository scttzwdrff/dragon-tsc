let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
const global_rows : number = 8;
const global_cols : number = 8;
const pixel_height : number = Math.floor(canvas.height/global_rows);
const pixel_width : number  = Math.floor(canvas.width/global_cols);
let font_description = "60px Noto Sans Light";
const valid_pieces = new Set(["empty","body","head","armor","tunnel",
    "pawn","knight","thetan","king","queen","bishop","castle"]);
const dragon_pieces = new Set(["body","head","armor","tunnel"]);
const invulnerable_pieces = new Set(["head"]);
const density = 0.5;
const rounds = 10;
const glyph_row_shift = 46;
const glyph_col_shift = 5;
let color : string[] = ["#AA0000","#003300"];
let current_player  = 0;
const delay = 10;
