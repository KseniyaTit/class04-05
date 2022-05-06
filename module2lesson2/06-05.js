/*let str = 'string'
console.log(str.repeat(2))*/

function func(str, num){
 
    result = 0
    for(i = 1; i<=num; i++){
        result = result + i;
        console.log(string)
    }


    
    return (str )
    
}



/*let obj =
   {age: 18,
    name: 'Alex',
    newObj : {
        a :1,
        b:2
    }


}
let b = obj
console.log(obj)
console.log(b)
const v = Object.assign({}, obj)
b.name = 'oleg'

b.newObj = 'smth'

/*const z = JSON.parse(JSON.stringify(obj))*/


/*function User (name, surname){
    this.name = name;
    this.surname = surname;
    this.text = 'aassss'
    this.sayHello =() => '${name}'


}

let userDima = new User('Dima', 'Hugh')
console.log(userDima)
console.log(userDima.sayHello())  */


/*function Unknown (num1,num2){
    this.num1 = num1;
    this.num2 = num2;
    this.multiplyNum = () => num1*num2
}

let result = new Unknown (2, 6)
console.log(result)
console.log(result.multiplyNum())*/


/*class Auto {
    constructor(num1,num2){


    this.num1 = num1;
    this.num2 = num2;
    this.multiplyNum = () => num1*num2
}
}


class Ford extends Auto{}
let ford = new Ford(3,6)

console.log(ford.multiplyNum())                  */


/*
function slc (str){
   
    return (str.slice(0, -4))
 }

console.log(slc('data@mail.com'))
 //data@mail


 */


 const arr = [1,2,3,'433333', 'рпрпр']
console.log(arr.sort((a,b)=> a - b))  //сортировка цифр
console.log(arr.sort((a,b)=>  a > b ? 1 : -1)) //сортирова по афлфавиту



const strSplit = 'hello smb'
console.log(strSplit.split (' '))


const red =[1,2,3,4]
console.log(red.reduce((a,b) => a +b, 0)) // 0- отправная точка
console.log(red.reduce((a,b) => {
    console.log(`a:${a} b:${b}`) return a + b} ,0))
 /*nst newArr = [...arr]
 


 const arrpush =arr.push
 

 const arrShift = arr.shift()
 const arrUnshift = arr.unshift(100)
*/

let strRep = 'first second third'
console.log(strRep.replaceAll (' '))