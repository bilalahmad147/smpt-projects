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

var a = +prompt("Enter your nmbra")
var b = +prompt("Enter your nmbrb")
var c = +prompt("Enter your nmbrc")

function foo(){
    if(a>b){
        document.write("a is grater") 
    }
    if(a>c){
        document.write("a is grater")    
    }
    if(b>a){
        document.write("b is grater")  
    }
    if(b>c){
        document.write("b is grater")   
        break; 
    }
    
    else{
        document.write("c is grater")
    }
}
foo();

