// Create class below
class Food {
    constructor(name, days) {
        this.name = name;
        this.daysToSpoil = days;
        this.fresh = true;
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    } else{
        console.log(`${this.name} has spoiled.`)
    }
    }
}

// Do not edit below this line
module.exports = Food;
