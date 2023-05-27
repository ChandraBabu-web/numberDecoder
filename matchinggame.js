let teluguNumber;
let score = 0;
let correctAnswer;
let timeLeft = 100;
let timerId;

function teluguToEuropean(teluguNumber) {
    const mapping = {
        '౦': '0',
        '౧': '1',
        '౨': '2',
        '౩': '3',
        '౪': '4',
        '౫': '5',
        '౬': '6',
        '౭': '7',
        '౮': '8',
        '౯': '9'
    };

    let europeanNumber = "";

    for (let i = 0; i < teluguNumber.length; i++) {
        const digit = mapping[teluguNumber[i]];
        europeanNumber += digit;
    }

    return europeanNumber;
}

function devanagariToEuropean(devanagariNumber) {
    const mapping = {
        '०': '0',
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9'
    };

    let europeanNumber = "";

    for (let i = 0; i < devanagariNumber.length; i++) {
        const digit = mapping[devanagariNumber[i]];
        europeanNumber += digit;
    }

    return europeanNumber;
}

function gurmukhiToEuropean(gurmukhiNum) {
    const gurmukhiDigits = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'];
    let europeanNum = '';

    for (let i = 0; i < gurmukhiNum.length; i++) {
        const digitIndex = gurmukhiDigits.indexOf(gurmukhiNum[i]);
        if (digitIndex !== -1) {
            europeanNum += digitIndex;
        } else {
            europeanNum += gurmukhiNum[i];
        }
    }

    return europeanNum;
}

function bengaliToEuropean(bengaliNumber) {
    const mapping = {
        '০': '0',
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9'
    };

    let europeanNumber = "";

    for (let i = 0; i < bengaliNumber.length; i++) {
        const digit = mapping[bengaliNumber[i]];
        europeanNumber += digit;
    }

    return europeanNumber;
}

function gujaratiToEuropean(number) {
    const gujaratiDigits = {
        '૦': 0,
        '૧': 1,
        '૨': 2,
        '૩': 3,
        '૪': 4,
        '૫': 5,
        '૬': 6,
        '૭': 7,
        '૮': 8,
        '૯': 9,
    };

    let europeanNumber = '';

    for (let i = 0; i < number.length; i++) {
        europeanNumber += gujaratiDigits[number[i]];
    }

    return europeanNumber;
}


function oriyaToEuropean(number) {
    const oriyaDigits = {
        '୦': 0,
        '୧': 1,
        '୨': 2,
        '୩': 3,
        '୪': 4,
        '୫': 5,
        '୬': 6,
        '୭': 7,
        '୮': 8,
        '୯': 9,
    };

    let europeanNumber = '';
    for (let i = 0; i < number.length; i++) {
        europeanNumber += oriyaDigits[number.charAt(i)];
    }

    return europeanNumber;
}

function tamilToEuropean(tamilNumber) {
    const tamilDigits = ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'];
    const europeanDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let europeanNumber = '';

    for (let i = 0; i < tamilNumber.length; i++) {
        const digitIndex = tamilDigits.indexOf(tamilNumber[i]);
        const digit = europeanDigits[digitIndex];
        europeanNumber += digit;
    }

    return europeanNumber;
}

function kannadaToEuropean(kannadaNumber) {
    const kannadaDigits = ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"];
    let europeanNumber = "";

    for (let i = 0; i < kannadaNumber.length; i++) {
        const digitIndex = kannadaDigits.indexOf(kannadaNumber[i]);
        if (digitIndex !== -1) {
            europeanNumber += digitIndex;
        } else {
            europeanNumber += kannadaNumber[i];
        }
    }

    return europeanNumber;
}

function malayalamToEuropean(malayalamNumber) {
    const malayalamDigits = ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"];
    let europeanNumber = "";

    for (let i = 0; i < malayalamNumber.length; i++) {
        const digitIndex = malayalamDigits.indexOf(malayalamNumber[i]);
        const digit = digitIndex !== -1 ? digitIndex.toString() : malayalamNumber[i];
        europeanNumber += digit;
    }

    return europeanNumber;
}


function generateRandomNumber() {
    const teluguDigits = ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = teluguDigits[digitIndex];
        teluguNumber += digit;
    }

    correctAnswer = teluguToEuropean(teluguNumber); // set the correct answer
    if (document.getElementById("language-select").value === 'telugu') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateDevanagariRandomNumber() {
    const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = devanagariDigits[digitIndex];
        teluguNumber += digit;
    }

    correctAnswer = teluguToEuropean(teluguNumber); // set the correct answer
    if (document.getElementById("language-select").value === 'devanagari') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateBengaliRandomNumber() {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = bengaliDigits[digitIndex];
        teluguNumber += digit;
    }

    correctAnswer = bengaliToEuropean(teluguNumber); // set the correct answer
    if (document.getElementById("language-select").value === 'bengali') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateGurmukhiRandomNumber() {
    const gurmukhiDigits = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = gurmukhiDigits[digitIndex];
        teluguNumber += digit;
    }

    // Set the correct answer
    correctAnswer = gurmukhiToEuropean(teluguNumber);

    // If the selected language is Gurmukhi, display the number
    if (document.getElementById("language-select").value === 'gurmukhi') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateGujaratiRandomNumber() {
    const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = gujaratiDigits[digitIndex];
        teluguNumber += digit;
    }

    correctAnswer = gujaratiToEuropean(teluguNumber); // set the correct answer

    if (document.getElementById("language-select").value === 'gujarati') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateOriyaRandomNumber() {
    const oriyaDigits = ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'];
    teluguNumber = "";


    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = oriyaDigits[digitIndex];
        teluguNumber += digit;
    }

    const correctAnswer = oriyaToEuropean(teluguNumber);
    if (document.getElementById('language-select').value === 'oriya') {
        document.getElementById('telugu-number').innerHTML = teluguNumber;
    }
}

function generateTamilRandomNumber() {
    const tamilDigits = ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = tamilDigits[digitIndex];
        teluguNumber += digit;
    }

    const correctAnswer = tamilToEuropean(teluguNumber); // set the correct answer
    if (document.getElementById("language-select").value === 'tamil') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateKannadaRandomNumber() {
    const kannadaDigits = ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = kannadaDigits[digitIndex];
        teluguNumber += digit;
    }

    const correctAnswer = kannadaToEuropean(teluguNumber); // set the correct answer
    if (document.getElementById("language-select").value === 'kannada') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}

function generateMalayalamRandomNumber() {
    const malayalamDigits = ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'];
    teluguNumber = "";

    for (let i = 0; i < 4; i++) {
        const digitIndex = Math.floor(Math.random() * 10);
        const digit = malayalamDigits[digitIndex];
        teluguNumber += digit;
    }

    const correctAnswer = malayalamToEuropean(teluguNumber); // set the correct answer
    if (document.getElementById("language-select").value === 'malayalam') {
        document.getElementById("telugu-number").innerHTML = teluguNumber;
    }
}


function match() {
    const europeanNumber = document.getElementById("european-number").value;
    let matched;
    if (document.getElementById("language-select").value === 'telugu') {
        matched = teluguToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'devanagari') {
        matched = devanagariToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'bengali') {
        matched = bengaliToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'gurmukhi') {
        matched = gurmukhiToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'gujarati') {
        matched = gujaratiToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'oriya') {
        matched = oriyaToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'tamil') {
        matched = tamilToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'kannada') {
        matched = kannadaToEuropean(teluguNumber) === europeanNumber;
    } else if (document.getElementById("language-select").value === 'malayalam') {
        matched = malayalamToEuropean(teluguNumber) === europeanNumber;
    }



    if (matched) {
        score += 10; // increase score by 1
        document.getElementById("score").innerHTML = score; // update the score display
        document.getElementById("result").innerHTML = "Correct!";
        if (document.getElementById("language-select").value === 'telugu') {
            generateRandomNumber(); // generate a new Telugu number to match
        } else if (document.getElementById("language-select").value === 'devanagari') {
            generateDevanagariRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'bengali') {
            generateBengaliRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'gurmukhi') {
            generateGurmukhiRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'gujarati') {
            generateGujaratiRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'oriya') {
            generateOriyaRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'tamil') {
            generateTamilRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'kannada') {
            generateKannadaRandomNumber(); // generate a new Devanagari number to match
        } else if (document.getElementById("language-select").value === 'malayalam') {
            generateMalayalamRandomNumber(); // generate a new Devanagari number to match
        }




    } else {
        document.getElementById("result").innerHTML = "Incorrect. Please try again.";
    }
}

function stopTimer() {
    clearInterval(timerId);
}

function startTimer() {
    timerId = setInterval(() => {
        timeLeft -= 1;
        document.getElementById("time-left").innerHTML = timeLeft;
        if (timeLeft === 0) {
            stopTimer();
            document.getElementById("result").innerHTML = `Time's up! Your final score is ${score}.`;
        }
    }, 1000);
}

document.getElementById("language-select").addEventListener("change", function() {
    if (this.value === 'telugu') {
        generateRandomNumber();
    } else if (this.value === 'devanagari') {
        generateDevanagariRandomNumber();
    } else if (this.value === 'bengali') {
        generateBengaliRandomNumber();
    } else if (this.value === 'gurmukhi') {
        generateGurmukhiRandomNumber();
    } else if (this.value === 'gujarati') {
        generateGujaratiRandomNumber();
    } else if (this.value === 'oriya') {
        generateOriyaRandomNumber();
    } else if (this.value === 'tamil') {
        generateTamilRandomNumber();
    } else if (this.value === 'kannada') {
        generateKannadaRandomNumber();
    } else if (this.value === 'malayalam') {
        generateMalayalamRandomNumber();
    } else {
        document.getElementById("telugu-number").innerHTML = '';
    }
});

generateRandomNumber();
startTimer();
