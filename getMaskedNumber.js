var base1 = 3
var base2 = 5
module.exports = function(number){
  var isMultiple3 = number % base1 == 0
  var isMultiple5 = number % base2 == 0
  var result = ''
  if(isMultiple3 && isMultiple5){
    result = 'FizzBuzz'
  }
  if(isMultiple3){
    result = 'Fizz'
  }
  if(isMultiple5){
    result = 'Buzz'
  }
  return result == '' ? number : result
}
