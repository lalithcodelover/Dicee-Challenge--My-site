let randomNumber1= Math.floor(Math.random()*6) +1;
let randomNumber2= Math.floor(Math.random()*6) +1;
 
let image1="images/dice"+randomNumber1+".png";
let image2="images/dice"+randomNumber2+".png";

document.querySelector('.img1').setAttribute('src',image1);

document.querySelector('.img2').setAttribute('src',image2);

let htext =document.querySelector('h1');

if(randomNumber1>randomNumber2){
    htext.textContent="Player 1 Wins";
}
else if(randomNumber2>randomNumber1) {
    htext.textContent="Player 2 Wins";
}
else if(randomNumber1==randomNumber2) {
    htext.textContent="Draw💥";
}



