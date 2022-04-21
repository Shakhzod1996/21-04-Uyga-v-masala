let joke = 'joke😊'
let think = 'think😒'

function getCharacterCount(value, think){
  console.log(value.match(/./gu).length)
  console.log(think.match(/./gu).length)
}

getCharacterCount(joke, think)
