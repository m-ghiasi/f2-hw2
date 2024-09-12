
let answerEl =document.getElementById("answer")
let arr = [1, 2, function(){} , "text", true, ]

let newEl = document.getElementById("new-el")
let primeEl = document.getElementById("prime-el")
let resultEl = document.getElementById("result")




function typer(input){
    for (let i = 0; i < input.length; i++) {
        console.log(typeof input[i])
        answerEl.textContent += typeof input[i] + ","
            
    }
}

function dataType(){
    console.log(typeof 4 +"4")
    console.log(typeof 2222n)
    console.log(typeof ("reza"))
    console.log(typeof 12 && 124)
    console.log(typeof 12 || 124)
    console.log(typeof Null)
    console.log(typeof (2 * 2))
    console.log(typeof 2* "2")
}


dataType()

function myPrompt(){
    let age = prompt("عدد 20 را وارد کنید ");
    if (age === 20) {
        alert ("ورودی معتبر است")
        
    } else {
        alert("ورودی نامعتبر است ")
    }
}
// myPrompt()



function reverseString(str) {
    let nameEl = document.getElementById("name").value;
    str = nameEl
    let reversString =  nameEl.split("").reverse().join("");
    newEl.textContent = "answer :" + reversString
}

function primeNumber(num1 , num2){
    let arr = [2,3,5,7,11,13,17,19]
    
    for (let i = 0; i < arr.length; i++) {
        if( num1 <= arr[i] &&  arr[i] <= num2){
            resultEl.textContent += arr[i] +","
            

        }
        if(typeof num1 && typeof num2 != "number"){
            console.log("ورودی نامعتبر ")
        } 
        
        
    }


}

primeNumber(1,8)

