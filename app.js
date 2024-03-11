let secretNumber;
let tries;
let previousNumbers = [];
let maxNumber = 10;
function textElement (element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
}
function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    console.log(generatedNumber);
    console.log(previousNumbers);
    if (previousNumbers.length == maxNumber) {
        textElement('p', 'Number have been played already');
        return;
    }
    if (previousNumbers.includes(generatedNumber)){
        return generateSecretNumber();
    }
    previousNumbers.push(generatedNumber);
    return generatedNumber;
}
function initialConditions (){
    textElement('h1','Secret game number');
    textElement('p',`Write a number between 1 to ${maxNumber}`);
    secretNumber = generateSecretNumber();
    tries = 1;
}
function userGuess() {
    let userNumber = parseInt(document.getElementById('userNumber').value);
    if(userNumber === secretNumber){
        textElement('p', `You won on ${tries} ${(tries === 1 ? 'try' : 'tries')}`);
        document.getElementById('retry').removeAttribute('disabled');
    }
    if(userNumber > secretNumber){
        textElement('p','Secret number is smaller');
    }
    if (userNumber < secretNumber) {
        textElement('p', 'Secret number is higher');
    }
    tries++;
    eraseData();
}
function eraseData () {
    document.querySelector('#userNumber').value = '';
}
function retryGame(){
    eraseData();
    initialConditions();
    document.querySelector('#retry').setAttribute('disabled', 'true');
}
initialConditions();

