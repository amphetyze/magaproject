const letters = {
    "a": "₳",
    "b": "6",
    "c": "C",
    "d": "D",
    "e": "3",
    "f": "F",
    "g": "G",
    "h": "Ħ",
    "i": "1",
    "j": "J",
    "k": "K",
    "l": "Jl",
    "m": `/\\/\\`,
    "n": "N",
    "o": "0",
    "p": "P",
    "q": "Q",
    "r": "R",
    "s": "S",
    "t": "T",
    "u": "U",
    "v": "V",
    "w": "W",
    "x": "X",
    "y": "Y",
    "z": "Z",

    "а": "₳",
    "б": "6",
    "в": "B",
    "г": "G",
    "д": "D",
    "е": "3",
    "ё": "3",
    "ж": "}|{",
    "з": "Z",
    "и": "u",
    "й": "u",
    "к": "K",
    "л": "JI",
    "м": "/\\/\\",
    "н": "Ħ",
    "о": "O",
    "п": "II",
    "р": "P",
    "с": "C",
    "т": "T",
    "у": "y",
    "ф": "F",
    "х": "X",
    "ц": "c",
    "ч": "ch",
    "ш": "ᗯ",
    "щ": "ᗯ",
    "ъ": "b",
    "ы": "bI",
    "ь": "b",
    "э": "3",
    "ю": "|-0",
    "я": "9|"
};

function changeLetters(string) {
    let result = '';

    for (let char of string) {
        if (letters[char]) {
            result += letters[char];
        } else {
            result += char;
        }
    }

    if (string === 'шахбан' || string === 'мага') {
        result += ' ♕';
    }

    return result;
}

const textInput = document.querySelector('#textInput');
const textOutput = document.querySelector('#textOutput');
const button = document.querySelector('#getResultButton');

textInput.addEventListener('input', () => {
    changeButtonStatus();
    textOutput.value = changeLetters(textInput.value.toLowerCase());
});

function changeButtonStatus() {
    if (textInput.value === '') {
        button.classList.add('button-disabled');
        button.setAttribute('disabled', 'disabled');
    } else {
        button.classList.remove('button-disabled');
        button.removeAttribute('disabled', 'disabled');
    }
};

changeButtonStatus();