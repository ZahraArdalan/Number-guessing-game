'use strict';

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score=20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }else if(guess > SecretNumber){
    document.querySelector('.message').textContent='📈Too high!';
    score--;
    document.querySelector('.score').textContent=score;
  }else if(guess < SecretNumber){
    document.querySelector('.message').textContent='📉Too low!';
    score--
    document.querySelector('.score').textContent=score;}
});
