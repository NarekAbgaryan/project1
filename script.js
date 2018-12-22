
var side = 20
var socket = io()
var m = 20
var n = 20
var weather = "Garun";
var Cikuyomi = false

function setup() {
    createCanvas(30 * side, 30 * side);
    background('#acacac');
}
socket.on("weather", function (data) {
    weather = data
})



function drawMatrix(matrix) {
    background('#acacac');
    console.log(weather);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1 && weather != "Dzmer") {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1 && weather == "Dzmer") {
                fill("lime");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            rect(x * side, y * side, side, side)



        }
    }
   

}

socket.on("matrix", drawMatrix)