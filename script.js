// variable
// var/let/const
// scope:
// let/const has block scope {}, var has function scope

// if(true){
//     var b= 2
// }
// console.log(b)

// ++ increment  -- decrement
// function f(num1, num2){
//     return num1 + num2
// }
// console.log(f(1,2))

// arrow function
// function f1(num1, num2){
//     let num = num1 - num2
//     return num
// }

// const f2 = (num1, num2)=>{
//     let num = num1 - num2
//     return num
// }
// const f3 = (num1, num2)=> num1 - num2
// console.log(f1(3,2))
// console.log(f2(4,3))
// console.log(f2(5,4))

// array:
// a = [1,3,2,4]
// push(),pop(),unshift(),shift(), slice()
// console.log(a.sort())
// console.log(a)
// console.log(a.reverse())
// console.log(a)

// a-b: ascending, b-a descending
// console.log(a.sort(function(a,b){return b-a}))

// Iteration: forEach()/map()/filter()/reduce()
// a = [2,5,3,4]
// b = []
// a.forEach((num)=>{
//     b.push(num*2)
// });
// // function func(num){
// //     b.push(num*2)
// // }
// console.log(b)

// // map
// a = [2,5,3,4]
// b = a.map((num)=> num*2)
// console.log(b)

// // filter
// a = [2,5,3,4]
// b = a.filter((num)=>{
//      return num > 3
// })
// console.log(b)

// // reduce
// a = [2,5,3,4]
// b = a.reduce((total, num)=>{
//     return total+num
// })
// console.log(b)

// object:
// const student = {
//     firstName: "John",
//     'lastName': "Doe",
//     'grade': 5,
//      age: function(){
//         return 6+7
//     }
// };
// console.log(student.firstName)
// console.log(student['firstName'])
// console.log(student.age())

// JSON text
// console.log(typeof(JSON.stringify(student)))
// const studentJSON = JSON.stringify(student)
// console.log(studentJSON)
// console.log(typeof(JSON.parse(studentJSON)))

// a=[2,4,3,1]
// a="abcdef"

// for(let i=0; i<a.length; i++){
//     console.log(a[i])
// }

// for(let i in a){
//     console.log(i)
// }

// for(let i of a){
//     console.log(i)
// }
// a=[{a:5, b:2},{a:3, b:4},{a:4, b:3}]
// console.log(a.sort(function(m,n){return n.b-m.b}))

// console.log(Object.keys(a))
// convert to array
// const keys = Object.keys(a)
// const values = Object.values(a)
// console.log(values)
// keys.forEach((num)=>console.log(num))
// const entries = Object.entries(a)
// console.log(entries)
// for(let [k, v] of entries){
//     console.log(v)
// }
// entries.forEach(([k,v])=>{
//     console.log(k)
// })

//destructuring
// let [a,,b]=[1,2,3,4]
// console.log(b)
// let data = {firstName:'Mary', age: 28}
// const {firstName} = data
// console.log(firstName)

// let i = 5;
// while (i<5){
//    i++; 
//     console.log(i);     
// }
// do {
//     i++;
//     console.log(i);     
// }
// while (i < 5);

////////////////////primitive type, reference type////////////////
// primitive type: number/string/boolen
// reference type: object/array
// (when copy a object use spread operator)

// primitive type:
// a=1
// b=a
// a=2
// console.log(b)

// reference type:
// a = [1,3,2,4]
// b=a
// a[0]=0
// console.log(b)

// let person = {
//     name: 'Mary'
// }
// let person2 = person
// person2.name = 'Lucy'
// console.log(person)

// spread:
// let num=[1,3,2,4]
// let num2=[5, ...num, 6]
// console.log(num2)

// let person = {
//     name: 'Mary'
// }
// let student = {...person, age:20}
// person.name='Lucy'
// console.log(student)

// rest:
// const func = (...args)=>{
//     // console.log(args)
//     return args.filter((num)=>num>4)
// }
// console.log(func(1,2,3,4,5,6))