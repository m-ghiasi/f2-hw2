
let answerEl =document.getElementById("answer")
let arr = [1, 2, function(){} , "text", true, ]
let nameEl = document.getElementById("name").value
let reverseEl = document.getElementById("reverse")


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
    if (age = 20) {
        alert ("ورودی معتبر است")
        
    } else {
        ("ورودی نامعتبر است ")
    }
}
myPrompt()

function reversName(){
  
  console.log(name.value)
    reverseEl.textContent += nameEl
}