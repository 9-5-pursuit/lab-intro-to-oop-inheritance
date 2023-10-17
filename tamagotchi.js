// Create class below
class tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = 9;
    this.full = 8;
    this.mood = 6;
    this.sick = false;
    this.rehomed = false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    console.log(`My mood is ${this.mood}`);
    console.log(`I am this full: ${this.full}`);
    console.log(`My energy is ${this.energy}`);
    if (this.sick) {
      console.log("I am sick");
    } else {
      console.log("I am not sick");
    }
  }

  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full < 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
    } else if (this.sick === false) {
      console.log(`I don't want to take medicine!`);
      this.energy--;
    }
  }

  play() {
    if (this.sick === true) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy--;
    } else {
      this.mood += 2;
      this.full--;
      this.energy--;
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick === false) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }

  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log(`${this.name} has been rehomed`);
    }
  }

}

// Do not edit below this line
module.exports = Tamagotchi;
