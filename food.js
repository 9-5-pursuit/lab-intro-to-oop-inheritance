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
}
// Do not edit below this line
module.exports = Food;
