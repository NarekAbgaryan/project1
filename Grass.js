var LivingCreature = require("./LivingCreature.js")
module.exports = class Grass extends LivingCreature {

    mult() {
        if (weather != "Dzmer") {
            this.multiply++;

            var empty = this.chooseCell(0);
            var Newem = empty[Math.floor(Math.random() * empty.length)];

            if (Newem && this.multiply > 3) {
                var newX = Newem[0]
                var newY = Newem[1]
                matrix[newY][newX] = 1
                var newGr = new Grass(newX, newY)
                grassArr.push(newGr)
                this.multiply = 1;
                GrassHaytnvec++
            }
        }
    }
}