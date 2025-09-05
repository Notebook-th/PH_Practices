// class > template 

// 1.property
// 2. method( a special type of function inside a class without the function keyword)

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
        // console.log('cALLING', name)
    }
    goal (){
        console.log('scored a goal')
    }
    getTeamName(){
        return 'Real madrid'
    }
}
const player1 = new Player('Twaki',44)
const p2 = new Player('Nuzhat')
// player1.goal()
player1.getTeamName()
console.log(player1)