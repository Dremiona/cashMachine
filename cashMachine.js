let userInput;
let pin = 1234; 
let balance = 1000000;
let newPin = 0;

const pinCodeChangeFunction = () =>{
    console.log(userInput)
   userInput = prompt ("please set your new pin code")
    if (userInput.lenght < 4 && newPin.Number.isInteger(0 - 9)==true){ //COME BACK TO IT!
        alert("Your pin has been changed")
    }
    else {
        alert ("Please try again")
        pinCodeChangeFunction()
    }
   
}
const changePinFunction = () => {
    console.log(userInput)
    userInput = prompt ("Would you like to change pin? \n1. Yes \n2. No")
    if (userInput == 1){
        pinCodeChangeFunction()
        alert ("Your pin Code has been changed.")   
    }
}
const withdrawFunction = () =>{
    userInput = prompt ("How much would you like to withdraw? \n1. £5 \n2. £10 \n3. £20")
    console.log(userInput)
    if (userInput ==1){
        balance -= 5
    }
    else if (userInput ==2){
        balance -= 10
    }
    else if (userInput ==3){
        balance -= 20   
    }

    else if (balance < userInput){
        alert ("Not sufficient amount, try again")
        withdrawFunction()
    }
    
    else if (userInput > 3){
        balance -= userInput
        alert (`Your balance now is ${balance}. Thank you.`)  
    }
    else {
        alert ("You have to decide.")
        withdrawFunction()
     
    }
   
}
const serviceFunction = () =>{
   userInput = prompt ("What service would you like? \n1. Withdraw \n2. Change Pin \n3. Exit")
   console.log (userInput)
   if (userInput == 1){
       withdrawFunction()
   }
   else if (userInput == 2){
       changePinFunction()
   }
   else if (userInput == 3){
    alert ("Thank you for using the service. Come back when you have money.")
   }
   else {
       alert ("Ok. Let's try again")
       serviceFunction()
   }
}
   
const pinFunction = () => {
    userInput = prompt ("Please enter your pin code:")
    console.log(userInput)
    if (userInput == pin){
        alert ("Pin correct. Proceed.")
        serviceFunction()
    }
    else {
        alert ("Pin incorrect. Try again or leave.")
        pinFunction()
    }
}
pinFunction()