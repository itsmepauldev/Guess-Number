"use strict";
const btn = document.getElementById("btn");
let num = [];
let manyguess = 5;
let numbertoguess = Math.round((Math.random() * 19)) + 1;
console.log(numbertoguess);

btn.onclick = function () {
    const guess = document.getElementById("guess").value;
    console.log(numbertoguess);
    if (guess === '') {
        console.log('Hi');
    } 
    else if (guess == numbertoguess) {
        alert(`🎉 Congratulations! 
    You did it! You guessed the number correctly and emerged 
    victorious! 
🏆Your sharp instincts and a bit of luck have earned you this win. 
Great job! Keep up the fantastic work and enjoy your victory!`);
        location.reload();

    } 
    else if (manyguess <= 0) {
        location.reload();
    }
    else if (guess >= 21) {
        alert("Please enter a number between 1 and 20.");

    }
    else if (guess > numbertoguess) {
        document.getElementById('clue').innerHTML = `Your Guess is too high.`
        manyguess--
        document.getElementById('numberofguess').innerHTML = `Guesses Remaining: ${manyguess}`;

    }
    else if (guess < numbertoguess) {
        document.getElementById('clue').innerHTML = `Your Guess is too low.`
        manyguess--
        document.getElementById('numberofguess').innerHTML = `Guesses Remaining: ${manyguess}`;
    }


    if (manyguess <= 0) {
        document.getElementById('b').innerHTML = `

<p class="text-center font-['Poppins'] font-medium mt-1 text-red-600">Game over the number was: ${numbertoguess}</p>
<div class="flex justify-center mt-3">

            <button id="try" class="bg-red-600 p-1 w-28 rounded-lg uppercase font-['Poppins'] font-medium text-white text-center">Try Again</button>

            </div>

`;
        const again = document.getElementById('try');
        again.onclick = function () {
            location.reload();
        }
    }else if (guess <= 20 && guess !== '') {
        num.push(guess);
        document.getElementById('no').innerHTML = `Guessed numbers are: ${num.join(',')}`
    }

}