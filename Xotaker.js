var LivingCreature = require("./LivingCreature.js")
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 10
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
            matrix[newY][newX] = 2
            var xt = new Xotaker(newX, newY)
            xotakerArr.push(xt)
            this.energy = 1
            XotakerCnvec++
        }
    }

    move() {
        if (weather != "Dzmer") {
            this.energy--;
            var empty = this.chooseCell(0)
            var Newem = empty[Math.floor(Math.random() * empty.length)]


            if (Newem) {
                var newX = Newem[0]
                var newY = Newem[1]
                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0

                this.x = newX
                this.y = newY

            }
        }
    }

    eat() {
        if (weather != "Dzmer") {
            var arr = this.chooseCell(1);
            var food = arr[Math.floor(Math.random() * arr.length)]
            //var food = random(this.chooseCell(1));
            if (food) {
                var newX = food[0]
                var newY = food[1]
                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0

                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                    }
                }

                this.x = newX
                this.y = newY
                this.energy += 6
            }
        }
    }
    die() {
        if (weather == "Dzmer" && this.energy <= 3) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
        else if (weather != "Dzmer" && this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                    ;

                }
            }
        }

    }
}