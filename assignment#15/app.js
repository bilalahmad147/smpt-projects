// var a = +prompt("Enter your nmbr")
// var b = +prompt("Enter your nmbr")
// function foo(){
//     if(a>b){
//         document.write("a is grater")

//     }
//     else{
//         document.write("b is grater")
//     }
// }
// foo();

// var a = +prompt("Enter your nmbra")
// var b = +prompt("Enter your nmbrb")
// var c = +prompt("Enter your nmbrc")

// function foo(){
//     if(a>b & c){
//         document.write("a is grater") 
//     }
//     if(b>c & c){
//         document.write("a is grater")    
//     }
//     // if(b>a){
//     //     document.write("b is grater")  
//     // }
//     // if(b>c){
//     //     document.write("b is grater")   

//     // }
//     else{
//         document.write("c is grater")
//     }
// }
// foo();


// var a = +prompt("Enter your nmbra")
// function foo() {
//     if (a > 0) {
//         document.write("nmbr is positive")
//     }
//     else if (a < 0) {
//         document.write("nmbr is negative")
//     }
//     else if (a == 0) {
//         document.write("nmbr is 0")
//     }
//     else {

//         document.write("nmbr is invalid")
//     }
// }

// foo();

// var a = +prompt("Enter a number : ")
// if (a % 5  == 0) {
//     document.write('number can be divisible')
// }
//  else if(a % 11  == 0){
//     document.write('number can be divisible')
// }
// else{

//     document.write('number can not')
// }
// var a = +prompt("Enter a number : ")
// if (a % 2  == 0) {
//     document.write('number is even')
// }
//  else {
//     document.write('number is odd')
//  }

// var char = prompt('Enter alphabat: ')
// function isCharacterALetter(char) {
//     if ((/[a-zA-Z]/).test(char)) {
//         document.write('is alpha')
//     } else {
//         document.write('not alpha')
//     }
// }
// isCharacterALetter(char)


// var key = prompt("enter your key")
// function foo (key){
//     if((/[a-zA-Z]/).test(key)) {
//             document.write('is alpha')
// }
// else if ((/[0-9]/).test(key)) {
//     document.write('is nmbr')
// }
// else{
//     document.write('is special char') 
// }
// }
// foo(key);

// var a = 'Bilal'
// var b = a.slice(0,5)
// var c = b

// document.write(c)


// var vowels = ['a', 'e', 'i', 'o', 'u']
// var isCondition = false
// var input = prompt('Enter char : ')
// for (let i = 0; i < vowels.length; i++) {
//     if (input === vowels[i]) {
//         document.write('is vowel')
//         isCondition = true
//         break
//     }
// }
// if (isCondition === false) {
//     document.write('not vowel')
// }


// var a =prompt('Enter word for changing case:')
// for (i = 0; i < a.length; i++) {
//     // console.log(a[i])
//     if ((/[A-Z]/).test(a[i])) {
//         var b = a[i].toLowerCase()
//         document.write(b)
//     }
//     if ((/[a-z]/).test(a[i])) {
//         var c = a[i].toUpperCase()
//         document.write(c)
//     }
// }


var a = prompt('Enter word for changing case:')
var num = 0;
var alpha = 0;
var spec = 0;
for (i = 0; i < a.length; i++) {
    if ((/[A-Z]/).test(a[i]) || (/[a-z]/).test(a[i])) {
        ++alpha;
    } else if ((/[0-9]/).test(a[i])) {
        ++num;
    } else {
        ++spec;
    }
}
document.write('num of alpha : ', alpha)
document.write('num of num : ', num)
document.write('num of spec : ', spec)



