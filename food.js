// Create class below

class Food {
  constructor() {
    this.name = "Banana";
    this.daysToSpoil = 3;
    this.fresh = true;
  }

  prepare(name) {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`eeewwww what an old ${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil--;
  }
}

// Do not edit below this line
module.exports = Food;
