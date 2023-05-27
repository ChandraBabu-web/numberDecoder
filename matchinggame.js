let teluguNumber;
let score = 0;
let correctAnswer;

function match() {
    const europeanNumber = document.getElementById("european-number").value;
    const matched = teluguToEuropean(teluguNumber) === europeanNumber;

    if (matched) {
        score += 1; // increase score by 1
        document.getElementById("score").innerHTML = score; // update the score display
        document.getElementById("result").innerHTML = "Correct!";
        generateRandomNumber(); // generate a new Telugu number to match
    } else {
        document.getElementById("result").innerHTML = "Incorrect. Please try again.";
    }
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
    document.getElementById("telugu-number").innerHTML = teluguNumber;
}

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

generateRandomNumber();