const correctPassword = "2008";

const message = `Happy Girlfriend Day, My Love!

Today is just another reminder of how lucky I am to have someone as kind, caring, and beautiful as you in my life.

You make my days brighter, my heart happier, and my world more meaningful.

Thank you for your love and for always being there for me.

On this Girlfriend Day, I just want you to know that you are my happiness, my peace, my biggest blessing, and my favorite person.

I love you today, tomorrow, and always.

❤️ Forever Yours,
Shivansh`;

function unlockWebsite(){

const pass=document.getElementById("password").value;

if(pass===correctPassword){

document.getElementById("lockScreen").style.display="none";
document.getElementById("mainWebsite").style.display="block";

const music=document.getElementById("music");
music.play().catch(()=>{});

typeWriter();

}
else{

document.getElementById("error").innerHTML="Wrong Password 💔";

}

}

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("typewriter").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

// Together Since
const startDate=new Date("2026-04-17T00:00:00");

function updateTimer(){

const now=new Date();

let diff=now-startDate;

if(diff<0){
document.getElementById("countdown").innerHTML="Our journey begins on 17 April 2026 ❤️";
return;
}

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("countdown").innerHTML=
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateTimer,1000);

updateTimer();

// Floating Hearts
setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},400);

// Surprise Button
document.getElementById("surpriseBtn").onclick=function(){

alert("Happy Girlfriend's Day Sanhya ❤️\n\nYou are my Happiness, My Peace & My Forever.");

for(let j=0;j<80;j++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*40)+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

},j*60);

}

};
