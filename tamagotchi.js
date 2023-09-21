// Create class below


class Tamagotchi {
    constructor(name) {
      this.name = name;
      this.energy = 9;
      this.full = 8;
      this.mood = 6;
      this.sick = false;
      this.rehomed = false;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}!`);
    }
  
    status() {
      console.log(`Energy: ${this.energy}, Fullness: ${this.full}, Mood: ${this.mood}, Sick: ${this.sick}`);
    }
  
    eat() {
      this.full += 2;
      this.energy --;
      if (this.full > 10) {
        this.sick = true;
      }
    }
  
    medicate() {
      if (this.sick) {
        this.full = 9;
        this.energy -= 3;
        this.sick = !this.sick;
      } else {
        console.log("I refuse to take medicine");
        this.energy --;
      }
    }
  
    play() {
      if (this.sick) {
        this.mood --;
        this.energy --;
      } else if (this.mood > 9) {
          this.energy -= 2;
          this.full--
        } else if (this.energy <= 3) {
          console.log("I am not in the mood to play.");
          this.energy--;
      } 
      else {
        this.mood += 2;
        this.energy --;
        this.full --;
      }
    }
  
    sleep() {
      this.energy += 4;
      this.full -= 3;
    }
  
    timePasses() {
      if (this.sick) {
        this.mood -= 3;
        this.energy -= 2;
        this.full -= 2;
      } else {
        this.mood -= 2;
        this.energy --;
        this.full --;
      }
    }
  
    badGuardian() {
      console.log(`Tamagotchi ${this.name} has been rehomed.`);
      if (this.energy==0 || this.mood==0 || this.full==0) this.rehomed = true;
    }
  }

const Tam = new Tamagotchi("chu");
Tam.greet();
Tam.status();
Tam.eat();
Tam.medicate();
Tam.play();
Tam.sleep();
Tam.timePasses();
Tam.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
