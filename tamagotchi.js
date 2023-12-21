// Create class below


class       Tamagotchi{
    constructor(name,energy=9,full=8,mood=6,sick=false,rehomed=false){
        this.name=name
        this.energy=energy
        this.full=full
        this.mood=mood
        this.sick=sick
        this.rehomed=rehomed
    }
    greet(){
        return `Hello, I'm ${this.name}!`

    }
    status(){
        return `My energy level is a: ${this.energy},I am this full:${this.full} my mood level is :${this.mood},${this.sick?'I am sick':'I am not Sick!'}`

    }
    eat(){
        while(this.sick===false){
        if(this.full>10){



            this.sick=true


        }
        this.full+=2
        this.energy-=1
        


    }
}
    medicate(){
        if(this.sick===true){
            this.full+=9
            this.energy-=3

        }else{
            this.energy-=1
            return console.log(`refusal to take medicine`)
        }


    }
    play() {
        if (this.sick === true) {
            this.mood -= 1;
            this.energy -= 1;
        } else {
            if (this.sick===false&&this.mood > 9) {
                this.energy -= 2;
                this.full -= 1;
            } else if (this.energy <= 3) {
                this.energy -= 1;
                return console.log("I am too tired to play");
            } else {
                this.mood += 2;
                this.energy -= 1;
                this.full -= 1;
            }
        }
    }

    
    
    sleep(){
        this.energy+=4
        this.full-=3

    }
    timePasses(){
        if(this.sick===true){
            this.mood-=3
            this.full-=2
        }else{
            this.mood-=2
            this.full-=1
            this.energy-=1
        }

    }
    badGuardian(){

    }







}
const test= new Tamagotchi('test',3)
test.play()
console.log(test)
console.log(test.status())
console.log(test.greet())
test.timePasses()
console.log(test)
test.sleep()
console.log(test)
// const newPet=new Tamagotchi('Shakagatchi')
// console.log(newPet)
// newPet.play()
// // console.log(newPet)
// newPet.medicate()
// console.log(newPet)
// newPet.eat()
// console.log(newPet)
// newPet.eat()
// newPet.eat()
// newPet.eat()
// newPet.eat()
// newPet.eat()
// newPet.play()
// console.log(newPet)
// newPet.play()

module.exports = Tamagotchi;
