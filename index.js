const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById("btn")
let passSuggest1 = document.getElementById("pass1")
let passSuggest2 = document.getElementById("pass2")
let passGen = ""
let passGen2 = ""

button.addEventListener('click', function(){
    let passGen = ' '
    let passGen2 = ' '
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * 91);
        let randomIndex2 = Math.floor(Math.random() * 91);
        passGen += characters[randomIndex]
        passGen2 += characters[randomIndex2]
    }
    passSuggest1.textContent = passGen
    passSuggest2.textContent = passGen2
})



