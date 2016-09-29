var base1 = 3
var base2 = 5
module.exports = function(number){
  var isMultiple3 = number % base1 == 0
  var isMultiple5 = number % base2 == 0
  if(isMultiple3 && isMultiple5){
    return 'FizzBuzz'
  }
  if(isMultiple3){
    return 'Fizz'
  }
  if(isMultiple5){
    return 'Buzz'
  }
  return number
}
