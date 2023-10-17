// Create class below
class Food {
  constructor() {
    this.name = "Banana";
    this.daysToSpoil = 3;
    this.fresh = true;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.daysToSpoil === 0) {
      this.fresh = false;
    }
    if (this.fresh) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`eeewww what an old ${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}
// Do not edit below this line
module.exports = Food;
