var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

var Grass = require ("./Grass")
var Gazan = require ("./Gazan")
var Xotaker = require ("./Xotaker")
var Mard = require ("./Mard")
var Mardaker = require ("./Mardaker")


/*
var matrix = [ 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,5,4,2,0,1,1,0,0],
    [0,0,1,0,0,0,2,0,0,0,0,0,0,2,2,0,1,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,2,2,0,1,0,0,0],
    [0,0,0,1,0,2,2,0,0,0,0,0,0,2,0,1,1,0,0,0,0,0,1,0,2,2,0,0,0,0,0,0,2,0,1,1,0,0,0],
    [0,0,0,0,1,2,0,0,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,1,2,0,0,0,0,4,0,0,0,3,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,3,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,3,0,0,0],
    [1,0,3,0,0,0,0,0,0,0,4,5,0,0,0,0,0,0,0,5,4,0,3,0,0,0,0,0,5,0,0,0,0,0,0,0,2,2,2],
    [1,0,0,3,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0],
    [1,0,1,0,0,0,0,1,1,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,1,1,0,0,0,1],
    [0,0,1,0,0,0,1,1,0,0,0,0,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,1,0,1,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0],
    [0,0,0,0,1,0,0,0,0,0,2,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
    [0,0,0,1,1,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,2,2,1,0,0,0,0,0,0,1,0,0,1]
]
*/

var side = 35
var matrix = [];
matrix = fillMatrix(30, 30)
function fillMatrix(n, m) {
    var matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([])
        for (var j = 0; j < m; j++) {

            matrix[i].push(0)
        }
    }
    return matrix
}

for (var g = 0; g < 50; g++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 1
}
for (var h = 0; h < 25; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 2
}
for (var h = 0; h < 35; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 3
}
for (var h = 0; h < 6; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 4
}
for (var h = 0; h < 20; h++) {
    var x = Math.floor(Math.random() * 30)
    var y = Math.floor(Math.random() * 30)
    matrix[y][x] = 5
}
var grassArr = [];
var xotakerArr = [];
var gazanArr = [];
var mardArr = [];
var mardakerArr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y, 2)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var gz = new Gazan(x, y, 3)
            gazanArr.push(gz)
        }
        else if (matrix[y][x] == 4) {
            var md = new Mard(x, y, 4)
            mardArr.push(md)
        }
        else if (matrix[y][x] == 5) {
            var mdk = new Mardaker(x, y, 5)
            mardakerArr.push(mdk)
        }

    }
}





function drawServerayin() {
    

        }
    

    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in xotakerArr) {
        xotakerArr[i].eat()

        xotakerArr[i].move()

        xotakerArr[i].mult()
        xotakerArr[i].die()


    }



    for (var i in gazanArr) {
        gazanArr[i].eat()

        gazanArr[i].move()
        gazanArr[i].mult()
        gazanArr[i].die()

    }

    for (var i in mardArr) {
        mardArr[i].eat()

        mardArr[i].move()

        mardArr[i].mult()


        mardArr[i].die()


    }

    for (var i in mardakerArr) {
        mardakerArr[i].eat()

        mardakerArr[i].move()

        mardakerArr[i].mult()
        mardakerArr[i].die()



    }



setInterval(drawServerayin, 100)
