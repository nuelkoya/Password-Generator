let firstPassword = document.getElementById('pwrd-1')
let secondPassword = document.getElementById('pwrd-2')
let thirdPassword = document.getElementById('pwrd-3')
let fourthPassword = document.getElementById('pwrd-4')
let passwordLength = document.getElementById('password-length')

const character = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4',
'5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
'<', '>', '?']




function generatePassword(){
    if (passwordLength.value >= 1 &&  passwordLength.value < 16){
        firstPassword.textContent = password()
        secondPassword.textContent = password()
        thirdPassword.textContent = password()
        fourthPassword.textContent = password()
        document.getElementById('text').textContent =''
    } else{
        firstPassword.textContent = "..."
        secondPassword.textContent = "..."
        thirdPassword.textContent = "..."
        fourthPassword.textContent = "..."
        document.getElementById('text').textContent =`
            Max length is 15.
        `
    }
    
    
}

function password(){
    let password = ""
    for(let i = 0; i < passwordLength.value; i++){
        let random = Math.floor(Math.random() * character.length)
        password += character[random]
    }
        return password
    
}
