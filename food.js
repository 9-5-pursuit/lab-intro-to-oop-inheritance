// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = 10;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil <= 0) {
     console.log(`${this.name} has spoiled.`);
    } else {
        
         console.log(
           `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
         );
    }
  }
  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh(); 
  }
}
//Testing the food class 
const iceCream = new Food('ice cream', 3);

iceCream.prepare();
iceCream.isFresh();

//Day passes

iceCream.aDayPasses();

//Check freshness again
iceCream.isFresh();

// Do not edit below this line
module.exports = Food;
