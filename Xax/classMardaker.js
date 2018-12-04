class Mardaker extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 13;
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
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var mdk = new Mardaker(newX, newY)
            mardakerArr.push(mdk)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
       
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
        
    }

    eat() {
        var food = random(this.chooseCell(4))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] =5
            matrix[this.y][this.x] = 0

            for (var i in mardArr) {
                if (mardArr[i].x == newX && mardArr[i].y == newY) {
                    mardArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy +=2
        }
    }
     
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in mardakerArr) {
                if (mardakerArr[i].x == this.x && mardakerArr[i].y == this.y) {
                    mardakerArr.splice(i, 1)
                }
            }
        }

    }

}
