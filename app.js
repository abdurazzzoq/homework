

let ticket = 500
let hotel = 250
let museum = 120

let dollarSum = 10650.34
let euroSum = 10650.03

let allAmoount = Math.round((ticket+hotel)*dollarSum+euroSum*museum)
console.log(allAmoount)
let answer = prompt('How much money do you have?')
console.log(`I have ${answer} dollars`)