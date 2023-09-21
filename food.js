// Create class below


class Food {
    constructor(name, d, f=true) {
        this.name = name;
        this.daysToSpoil = d;
        this.fresh = f;
    }

    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    isFresh() {
        let mssg = this.daysToSpoil > 0 ? `There are ${this.daysToSpoil} days left before ${this.name} spoils.` : `${this.name} has spoiled.`
        console.log(mssg);
    }

    aDayPasses() {
        this.daysToSpoil--;
        this.isFresh();
    }
}

let testf = new Food('ice cream', 0, false)
testf.prepare();
testf.isFresh();
testf.aDayPasses();

// Do not edit below this line
module.exports = Food;
