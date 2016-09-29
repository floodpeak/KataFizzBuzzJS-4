var base1 = 3

module.exports = function(number){

  if(number % base1 == 0 && number % 5 == 0){
    return 'FizzBuzz'
  }
  if(number % base1 == 0){
    return 'Fizz'
  }
  if(number % 5 == 0){
    return 'Buzz'
  }
  return number
}
