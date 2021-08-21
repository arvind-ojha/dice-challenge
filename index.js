var rn1 = Math.floor(Math.random()*6) +1;
var rdi = "images/dice" + rn1 + ".png";
var rn2 = Math.floor(Math.random()*6+1);
var rdi2 = "images/dice" + rn2 + ".png";
var btt = document.querySelectorAll("img");
btt[0].setAttribute("src", "images/tenor.gif");
btt[0].classList.add("anim");
btt[1].setAttribute("src", "images/tenor.gif");
btt[1].classList.add("anim");
setTimeout(function () {
    btt[0].classList.remove("anim");
    btt[1].classList.remove("anim");
    document.querySelectorAll("img")[0].setAttribute("src", rdi);
    document.querySelectorAll("img")[1].setAttribute("src", rdi2);
    if(rn1>rn2){
    document.querySelector("h1").innerHTML = "Player 1 wins🚩";
}
else if(rn1<rn2){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw🚩";
}
},1000);

