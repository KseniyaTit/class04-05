/*let str ='something'
let str2 ='AAAWER'
console.log(str.toUpperCase())
/*console.log(str2.toLowerCase())
console.log(str.trim)

console.log(str.slice())
console.log(str.substring(0, 4))*/

/*function smth (str){
    str = str.trim()
   let a = str.slice(0,1)
  
   let c = str.slice(1)

 return a.toUpperCase() + c.toLowerCase()

}
console.log(smth(' hello'))*/

 const arr = [1, 2, 3]
 console.log (arr.length)


 /*let str2 = 'hello world';
 console.log(str2.split(''))*/

 /*let str2 = 'hello/world/and/bye';
 console.log(str2.split('/'))*/


 /*et str2 = 'hello/world/and/bye';
 console.log(str2.indexOf('l'))*/

function func (a, b){
    
    let mult = 1;
    
    for (let counter = 1; counter < 1; mult< 0 ){
       let res = a*a
    }


    return res;
}
console.log(func(2, 3))


/* 
function func(a, b){
let count = 1
for (let i = 1; b>= 1; i ++)
 count *= a

 return count
}
console.log(func(2,3))
 

*/


/*const user = {
    age : 18,
    name: 'Alex',
    nationality: true,
    sayHello: function(){
       return('hi ${this.name}')
    },
    arrowfoo:() => 
        'name: ${this.name}'
    ,
    foo(){
        return 'age ${this.age}'
    }
 


}
console.log(user.foo()) */



var  num = 20
const method ={
    num: 9,
    mult: function(){
        return this.num * this.num
    },
    arrowDiv: () =>this.num / this.num
    

}

console.log(method.arrowDiv())
method.num = 20
console.log(method.num)