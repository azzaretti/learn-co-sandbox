// let tacosAvailable = 4
// let weather = 'sunny'

// //if the weat is good (meaning sunny) and there are more than 0 tacos available we want to do something

// if (weather === 'sunny' && tacosAvailable > 0) {
//   //if there are 2 tacos available, alert with a message saying 2 left, otherwise say, only 1 left!!
//   //nesting if statements - putting if statements inside other if statements 
//   //chaining if statements - combining multiple if statments before the else
//   if(tacosAvailable === 2) {
//     alert("There are only 2 left!")
//   } else if (tacosAvailable > 5) 
//     alert("There are at least 5 left")
//     else{
//     alert("Only 1 left!!")
//   }
// }

//functions make code reusable
//parameters for the function

// function checkIfWeatherIsSunny(currentWeather) {
//   if (currentWeather === 'sunny') {
//     console.log("It's really sunny outside!")
//   }
//   else {
//     console.log("It's not very sunny outside")
//   }
// }

// checkIfWeatherIsSunny('rain')
// checkIfWeatherIsSunny('sunny')
// checkIfWeatherIsSunny('thunderstorm')




//a function to discount a 'price' by 50%
//another function takes the return of the discount and gives it a look of a real price (with $ etc.)

const price = 20
function discountPrice (nonDiscountedPrice) {
  return nonDiscountedPrice / 2
}
function makeANumberAPrice(somenumber){
  console.log('$' + somenumber + '.00')
}
const discountedPrice = discountPrice(price)
makeANumberAPrice(discountedPrice)






