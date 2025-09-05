class Vehicle{
    constructor(type, price){
        this.type = type
        this.price = price
    }

    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}
 
const car = new Vehicle('car', '30k')
const car1 = new Vehicle('cart', 300)
// car.getThis()
// console.log(car1.getPrice())

const student = {
    name: 'Twaki',
    score: 200000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: () => {
      console.log(this)
    }
}
student.getScore()
student.getScoreArrow()