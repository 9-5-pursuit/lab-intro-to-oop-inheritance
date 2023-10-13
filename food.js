// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  //Prepare method

  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  // Fresh method
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  // Days passed method
  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

let banana = new Food("Banana", 3);

banana.prepare();
banana.isFresh();
banana.aDayPasses();

// Do not edit below this line
module.exports = Food;
