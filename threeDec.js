// let a = new String();
// console.log(a);

// let a ={
//     name:"Rutuja"
// }
// console.log(a.name)

// let str="Rutuja Meshram"

// let a = (str.split("e"));
// console.log(a)

// let join = a.join("e");
// console.log(join)

// 1] Remove e and print
// let str1 = "hello rutuja its javascript";
// // console.log(str1)
// // console.log(str1.split("e"))

// //2] reverse each element of the string
// let str3 = str1.split(" ")
// console.log(str3);

// let str5 = str3.map(word => word.split(""))//.reverse()
// console.log(str5)

// // 3] remove blank space
// console.log(str1.trim())

// // 4] make 1st letter capital of each word
// let str2 =str1.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// console.log(str2)

// // 5] get the length of each word
// let str4 = str1.split(" ").map(word => word.length)
// console.log(str4)


let str1 = "hello rutuja its javascript";
let str2 = str1.split(' ').reverse().join()map(x => x.split(''))
console.log(str2)
let str3 = str2.map(x => x.split(''))
console.log(str3)