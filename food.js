// Create class below


// here I created my food class
class Food{

    constructor(name,daysToSpoil,fresh=Boolean){//adding constructor and attributes
            this.name=name
            this.daysToSpoil=daysToSpoil
            this.fresh=fresh


    }
    //here I am adding my first method 
    isFresh(){
        if(this.fresh===true){

            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`)
        }else if(this.daysToSpoil<=0){
            this.fresh=false
            console.log(`${this.name} had spoiled.`)

        }

    }

    //here I am adding my second method
    aDayPasses(){

        this.daysToSpoil -= 1
        this.isFresh()
       
    }

    //here i forgot to add days to spoil not sure if order matters in the stack i figured the conditions should be met first so you know if the food is fresh before preparataion 
    prepare(){
        console.log(`${this.name} is being prepared`)
    }



}
//My test 1

const  createFoodItem=(name,daysToSpoil)=>{//here i created a function called create food item
    const newFood= new Food(name,daysToSpoil,true)//im declaring newFood to equal the creation of a new Food class, passing params name and days to spoil/ so arguements can be passed in when the function is called/invoked
                                                
    newFood.isFresh()//checking to see if the created new food is fresh
    newFood.prepare()// the new item is brand new assuming it will always be fresh then we can go ahead and prepare it
    return newFood // returning the whole process


}
createFoodItem("Pizza",5)


//my test 2

const twentyFourHours=(name,daysToSpoil)=>{
    const newFood= new Food(name,daysToSpoil,true)
    newFood.aDayPasses()//24 hours has passed less take a day off this food

}
twentyFourHours('milk',2)//if it works it should take a day off this item
twentyFourHours('oranges',1)//this should take a day off making it spoiled and retruning the spoiled message from isFresh()
// Do not edit below this line
module.exports = Food;
