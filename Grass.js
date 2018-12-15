var LivingCreature = require("./LivingCreature.js")
module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y)
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

    chooseCell(character) {

        return super.chooseCell(character);


    }

    mult() {
        this.multiply++
        var empty = this.chooseCell(0)
        var Newem = empty[Math.floor(Math.random() * empty.length)]

        if (Newem && this.multiply > 3) {
            var newX = Newem[0]
            var newY = Newem[1]
            matrix[/*newY*/Newem][/*newX*/Newem] = 1
            var newGr = new Grass(/*newX, newY*/Newem, Newem)
            grassArr.push(newGr)
        }
    }
}