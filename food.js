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
    aDayPasses(){
        this.daysToSpoil--
        this.isFresh()
    }

}
class BadFood extends Food {
    constructor(name, daysToSpoil, fresh) {
        super(name, daysToSpoil, fresh)
        this.weapons= [{'hitpoints':3},{'hitpoints':4},{'hitpoints':5}]
    }
    prepare(){
        console.log(`I am ${this.name} and my calories are too high to count!`)
    }
}
// Do not edit below this line
module.exports = Food;
