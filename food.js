// Create class below
class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh || true
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if (this.daysToSpoil<=0){
            console.log(`${this.name} has spoiled.`)
            this.fresh = false
        } else if (this.fresh){
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
    }

}
// Do not edit below this line
module.exports = Food;
