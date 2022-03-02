let dictionary = {
    "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
    "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ї", "a": "ф", "s": "і",
    "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
    ";": "ж", "'": "є", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
    "n": "т", "m": "ь", ",": "б", ".": "ю", "/": ".", " " : " "
}

let mode = false;
const emptyStr='';
const switchBtn = document.querySelector('.switch-btn');
const input = document.querySelector('.inputField');
const output = document.querySelector('.outputField');
const body = document.querySelector('body');
const inputTxtField = document.querySelector('#input-txt-wrapper');
const outputTxtField = document.querySelector('#output-txt-wrapper');
const copyBtn = document.querySelector('.copy-btn')
input.addEventListener('input', switchLayout);

copyBtn.onclick = function(){
    const strToCopy = output.value;

    if(strToCopy){
        output.select();
        document.execCommand('copy');
    }

}

switchBtn.onclick = function(){
    mode = !mode;

    clearField('.inputField');
    clearField('.outputField');

    changePalette(mode);
}

function switchLayout() {
    const sentence = input.value.split('');

    const mapCharacter = mode ? item => dictionary[item] : item => Object.keys(dictionary).find(key => dictionary[key] === item);

    const switchedSetnence = sentence.map(mapCharacter).join('');

    output.value = switchedSetnence;
}

function clearField(element){
    return document.querySelector(element).value=emptyStr;
}



function changePalette(mode){

    const {bgColor, classToRemove, classToAdd, inputTxt, outputTxt} = mode 
        ? { bgColor: '#C3E0DD', classToRemove: 'hover-green', classToAdd: 'hover-orange', inputTxt: 'Eng', outputTxt:'Ukr'}
        : { bgColor: '#FAE9DA',classToRemove: 'hover-orange', classToAdd: 'hover-green', inputTxt: 'Ukr', outputTxt:'Eng'}

    body.style.background = bgColor;
    switchBtn.classList.remove(classToRemove);
    switchBtn.classList.add(classToAdd);
    inputTxtField.textContent=inputTxt;
    outputTxtField.textContent=outputTxt;
}




