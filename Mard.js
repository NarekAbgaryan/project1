var LivingCreature = require("./LivingCreature.js")
module.exports = class Mard extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 4;
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
        if (Newem && this.energy > 30) {
            var newX = Newem[0]
            var newY = Newem[1]
            matrix[newY][newX] = 4
            var md = new Mard(newX, newY)
            mardArr.push(md)
        }
    }

    move() {
        var empty = this.chooseCell(0)
        var Newem = empty[Math.floor(Math.random() * empty.length)]
        this.energy--;
        if (Newem) {
            var newX = Newem[0]
            var newY = Newem[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(1);
        var food = arr[Math.floor(Math.random() * arr.length)]
        var arr = this.chooseCell(2);
        var food1 = arr[Math.floor(Math.random() * arr.length)]
        var arr = this.chooseCell(3);
        var food2 = arr[Math.floor(Math.random() * arr.length)]

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 2
        }

        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4
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
        if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in gazanArr) {
                if (gazanArr[i].x == newX && gazanArr[i].y == newY) {
                    gazanArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }



    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in mardArr) {
                if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
                    mardArr.splice(i, 1)
                }
            }
        }
    }

}