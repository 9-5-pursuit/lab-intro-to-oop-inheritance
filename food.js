// Create class below


// here I created my food class
 class Food{

    constructor(name,daysToSpoil,fresh=true){//adding constructor and attributes
            this.name=name
            this.daysToSpoil=daysToSpoil
            this.fresh=fresh


    }
    //here I am adding my first method 
    isFresh(){
        if(this.fresh===true&&this.daysToSpoil>=1){

          return console.log( `There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }else {
            this.fresh=false
            return console.log(`${this.name} has spoiled.`)

        }

    }

    //here I am adding my second method
    aDayPasses(){

        this.daysToSpoil -= 1
       return  this.isFresh()
       
    }

    //here i forgot to add days to spoil not sure if order matters in the stack i figured the conditions should be met first so you know if the food is fresh before preparataion 
    prepare(){
        return console.log(`${this.name} is being prepared`)
    }



}

const banana= new Food("Banana",3)
// console.log(banana)
// console.log(typeof banana.isFresh())
banana.isFresh()
// const bananaCreamPie = new Food("BananaCreamPie", 4);
// console.log(bananaCreamPie)
// //My test 1
// const iceCream=new Food('Chococlate Ice Cream',3)//creating ice cream instance
// console.log(iceCream.isFresh()) //calling method is fresh to check if icecream is fresh
// console.log(iceCream.prepare())//its fresh ok lets prepare it
// console.log(iceCream.aDayPasses())//calling a day passes method which subtracts a day and then check if it is fresh(2nd day)
// console.log(iceCream.aDayPasses())//a day passes again (day1)
// console.log(iceCream.aDayPasses())//a day passes again checking to see if it is still fresh (it has spoiled at this point in this test case)




module.exports= Food
