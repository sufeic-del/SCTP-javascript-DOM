console.log("hello world");

let plusButton = document.querySelector("#plus");
plusButton.addEventListener("click",function(){
//when workign with DOM we SELECT and then we MODIFY
let numberBox = document.querySelector("#number"); 
// take current innertext from the number box and thwn increase by one
let currentNumber = parseInt(numberBox.innerText);
//increase by 1
if (currentNumber<10){
currentNumber += 1};
// set innerText to the new currentnumber
numberBox.innerText = currentNumber; 
if (currentNumber == 0){
    numberBox.style.color = "black"
}

else if (currentNumber % 2 == 0){
    numberBox.style.color ="green"
}

else if (currentNumber % 2 == 1){
    numberBox.style.color = "red"
}
})

let zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click",function(){
    let numberBox = document.querySelector("#number");
    let currentNumber = 0;
    numberBox.innerText = currentNumber;
})

let minusButton = document.querySelector("#minus");
minusButton.addEventListener("click",function(){
    let numberBox = document.querySelector("#number");
    let currentNumber = parseInt(numberBox.innerText);
    currentNumber -= 1;
    numberBox.innerText = currentNumber;
})