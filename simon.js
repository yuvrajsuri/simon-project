//////////////////Simon Says Game//////////////
let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let highsc=document.querySelector("#hs");
let hs=0;

let btns=["red","yellow", "green", "purple"];

let h2=document.querySelector("h2");

document.addEventListener('keypress', function(){
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelUp();
    }

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000/4);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000/4);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `level ${level}`;

    let randInd=Math.floor(Math.random()*4);
    let randColor= btns[randInd];
    let randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function checkAns(idn){
    if(userSeq[idn] == gameSeq[idn])
    {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
    h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor="white";
    },150);
    if(hs<level){
        hs=level;
    }
    highsc.innerText=`Highest score is ${hs}`;
    reset();
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    UserSeq=[];
    level=0;
}
//////////////////////////////////////////////////////////////////