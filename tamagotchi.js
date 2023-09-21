// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    let amSick;
    if (this.sick) {
      amSick = "am sick";
    } else {
      amSick = "am not sick";
    }
    console.log(
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\nI ${amSick}`
    );
  }

  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log(`${this.name} refuses to take medicine`);
      this.energy -= 1;
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
