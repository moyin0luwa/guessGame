function range (start, end){
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
}

endRange = 2
userLevel = 1
userScore = 0
console.log('Kindly enter your name as your user name')
const userName = prompt('USERNAME: _')

while(true){
  listOfGuesses = range(1,endRange)
  console.log('LEVEL' + userLevel + '--> Your current score is ' + userScore)
  correctGuess = listOfGuesses[Math.floor(Math.random()*listOfGuesses.length)]
  userGuess = prompt('Guess the chosen number in the range of 1 to ' + endRange)
  if (userGuess == correctGuess){
    endRange += 1
    userScore += 1
    userLevel += 1
    console.log("YOU WON!, You have now advanced to the next level \n") 
  }
  else{
    console.log("Game over")
    console.log('Your total score is ' + userScore)
    break
  }
}
