// Question #1

// var creditCardNum = prompt("Enter Credit Card Number : ")
// var ccNumLength = creditCardNum.length
// if (ccNumLength < 16 || ccNumLength > 16) {
//     alert("Enter 16 digit credit card number")
// } else {
//     var ccNumToShow = creditCardNum.slice(0,12)
//     var ccNumToHide = creditCardNum.slice(12)
//     ccNumToShow = '************'
//     var ccNum = ccNumToShow + ccNumToHide
// }

// Question #2

var enterName = prompt('Enter Name To find Potatos : ')
for (let i = 0; i < enterName.length; i++) {
    var num = 0;
    if (enterName.slice(i, i + 6) === 'potato') {
        num = num + 1
        console.log(num)
        break
    } else {
        console.log('NOt found')
    }
    console.log(num)
}