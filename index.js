document.querySelector(".rules_btn").onclick = function() {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".tips").style.display = "none";
    document.querySelector(".rules").style.display = "block";
}
document.querySelector(".tips_btn").onclick = function() {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".tips").style.display = "block";
    document.querySelector(".rules").style.display = "none";
}
document.querySelector(".ok_btn1").onclick = function() {
    document.querySelector(".home").style.display = "block";
    document.querySelector(".tips").style.display = "none";
    document.querySelector(".rules").style.display = "none";
}
document.querySelector(".ok_btn2").onclick = function() {
    document.querySelector(".home").style.display = "block";
    document.querySelector(".tips").style.display = "none";
    document.querySelector(".rules").style.display = "none";
}
document.querySelector(".play").onclick = function() {
    document.querySelector(".home").style.display = "none";
    document.querySelector("#game").style.display = "block";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
import start from '../sounds/game-start.mp3';
const delay = ms => new Promise(res => setTimeout(res, ms));
document.addEventListener("keydown", async function(event) {
    if (event.key === "Enter" && document.getElementById("game").style.display==="block") {
        document.querySelector("#game p").style.display = "none";
        
            let start = new Audio(start);
            start.play();
            await delay(1000);
            startGame()
       
    }
});

let user_generated_pattern = [];
let computer_generated_pattern = [];
let level = 1;
const colors = ["red", "blue", "green", "yellow"];
const red=new Audio("../sounds/red.mp3");
const blue=new Audio("../sounds/blue.mp3");
const yellow=new Audio("../sounds/yellow.mp3");
const green=new Audio("../sounds/green.mp3");

async function startGame() {
    user_generated_pattern = [];
    computer_generated_pattern = [];
    level = 1;
    document.getElementById("status").textContent = "Level " + level;
    await delay(1000);
    nextSequence();
}

document.querySelectorAll(".button").forEach(n => n.addEventListener("click", function() {
    if(this.id==="red")
    {
        red.play();
    }
    else if(this.id==="blue")
        {
            blue.play();
        }
    else if(this.id==="yellow")
        {
             yellow.play();
         }
    else if(this.id==="green")
         {
            green.play();
         }
    user_generated_pattern.push(this.id);
    check(user_generated_pattern.length - 1);
}));

async function check(level) {
    if (user_generated_pattern[level] === computer_generated_pattern[level]) {
        if (user_generated_pattern.length === computer_generated_pattern.length) {
            if (user_generated_pattern.length === 10) {
                document.getElementById("status").textContent = "Hurrah....You won!";
                let win = new Audio('../sounds/win.mp3');
                win.play();
                await delay(4000);
                startGame();
            } else {
                console.log("correct");
                user_generated_pattern = [];
                level++;
                document.getElementById("status").textContent = "Level " + level;
                await delay(1000);
                nextSequence();
            }
        }
    } else {
        document.getElementById("status").textContent = "Sorry, You lost!";
        let over = new Audio('../sounds/game-over.mp3');
        over.play();
        await delay(4000);
           startGame();
    };
}

async function nextSequence() {
    
    let random_index = getRandomInt(0, colors.length - 1);
    computer_generated_pattern.push(colors[random_index]);
    if(colors[random_index]==="red")
    {
        document.getElementById("red").style.border="5px solid white";
        red.play();
        await delay(500);
        document.getElementById("red").style.border="none";
    }
    else if(colors[random_index]==="blue")
        {
            document.getElementById("blue").style.border="5px solid white";
            blue.play();
            await delay(500);
            document.getElementById("blue").style.border="none";
        }
    else if(colors[random_index]==="yellow")
        {
            document.getElementById("yellow").style.border="5px solid white";
            yellow.play();
            await delay(500);
            document.getElementById("yellow").style.border="none";
         }
    else if(colors[random_index]==="green")
         {
            document.getElementById("green").style.border="5px solid white";
        green.play();
        await delay(500);
        document.getElementById("green").style.border="none";
         }
    console.log(colors[random_index])
}
document.addEventListener("keydown",function(e){
    if(e.key==="x")
    {
        document.querySelector(".home").style.display = "block";
        document.querySelector("#game").style.display = "none";
    }
})

