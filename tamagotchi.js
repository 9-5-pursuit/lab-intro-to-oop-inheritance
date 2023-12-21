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
        return console.log(`Hello, I'm ${this.name}`)

    }
    status(){
        return console.log(`My energy level  is a:${this.energy},I am this full:${this.full} my mood level is :${this.mood}${this.sick?'I am sick':'I am not Sick'}`)

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
            return console.log(`refuasal to take medicine`)
        }


    }
    play(){

    }
    sleep(){

    }
    timePasses(){

    }
    badGuardian(){

    }







}
const newPet=new Tamagotchi('Shakagatchi')
console.log(newPet)
// console.log(newPet)
newPet.medicate()
console.log(newPet)
newPet.eat()
console.log(newPet)
// Do not edit below this line
module.exports = Tamagotchi;
