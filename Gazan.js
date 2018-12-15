var LivingCreature = require("./LivingCreature.js")
module.exports = class Gazan extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 10
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],

        ]

    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);


    }

    mult() {
        var empty = this.chooseCell(0)
        var Newem = empty[Math.floor(Math.random() * empty.length)]
        if (Newem && this.energy > 10) {
            var newX = Newem[0]
            var newY = Newem[1]
            matrix[newY][newX] = 3
            var gz = new Gazan(newX, newY)
            gazanArr.push(gz)
        }
    }

    move() {
        var empty = this.chooseCell(0)
        var Newem = empty[Math.floor(Math.random() * empty.length)]
        this.energy--;
        if (Newem) {
            var newX = Newem[0]
            var newY = Newem[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(2);
        var food = arr[Math.floor(Math.random() * arr.length)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gazanArr) {
                if (gazanArr[i].x == this.x && gazanArr[i].y == this.y) {
                    gazanArr.splice(i, 1)
                }
            }
        }

    }

}
