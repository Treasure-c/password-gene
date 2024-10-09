
// const lengthBox = document.getElementById('lengthBox');

// function print() {
//      lengthBoxVal = Number(lengthBox.value)
//     console.log(lengthBoxVal);
// }
let passLength;

const passwordBox = document.getElementById('password');
const cta = document.querySelector('.cta');

// assigning uppercase lowercase number and symbols
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwsyz";
const number = "0123456789";
const symbol = "!>#>./[]£%^&*()";
const allchar = upperCase + lowerCase + number + symbol;

function generatePass() {


    var password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    passLength = document.getElementById('lengthBox').value;
    passLength = Number(passLength)

    while(passLength > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    } //The while loop adds more character to the password


    passwordBox.value = password
    // console.log(lengthvalue)

}

function copytxt() {
    passwordBox.select();
    document.execCommand("copy");
}
// // function that handles password length
