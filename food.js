// Create class below
class Food {
    //Attributes
    constructor(name, daysToSpoil) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = true
    }
    //Methods
    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh() {
        if (this.daysToSpoil <= 0) {
            console.log(`${this.name} has spoiled.`)
            this.fresh = false
        }
        else {
            console.log(
              `There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }

    }

    aDayPasses() {
        this.daysToSpoil--;
        this.isFresh();
    }
}

// Do not edit below this line
module.exports = Food;
