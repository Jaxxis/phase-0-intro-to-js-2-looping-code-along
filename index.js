const names = ["Guadalupe", "Ollie", "Aki"]
const event = surprise

function writeCards(names, event = "surprise"){
    let thankYouCards =[]
    for (let i = 0; i < names.length; i++){
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
   return thankYouCards
}

function countDown(firstNumber){
    while (firstNumber > 0){
        console.log(firstNumber)
        firstNumber -= 1
    }

    console.log(firstNumber)
}