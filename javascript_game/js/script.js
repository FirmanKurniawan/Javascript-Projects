console.log("sam")

let inputDir = {
    x:0,
    y:0
};

const foodsound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const movesound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [
    {x : 13, y : 15}
]

food = {x:6, y:7}


function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

// console.log(ctime)

function isCollide(snake)
{
    // If you bumb int yourself
    for(let i = 1; i < snakeArray.length; i++)
    {
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y)
        {
            return true;
        }
    }

    // If you bumb into ball
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y>=18 || snake[0].y<=0)
    {
        return true
    }
}

function gameEngine()
{

    if(isCollide(snakeArray)){
        gameOverSound.play()
        musicSound.pause()
        inputDir = {x:0, y:0}
        alert("GameOver. Press Any Key to pay again!")
        snakeArray = [{x:13, y:15}]
        musicSound.play()
        score = 0;
    }

    if(snakeArray[0].y == food.y && snakeArray[0].x == food.x)
    {
        foodsound.play()
        score += 1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score "+score;
        snakeArray.unshift({x:snakeArray[0].x +inputDir.x, y:snakeArray[0].y +inputDir.y})
        let a = 2;
        let b = 16;
        food = {x:Math.round(a+ (b-a)*Math.random()), y:Math.round(a+ (b-a)*Math.random())}
    }

    // Moving the snake
    for(let i = snakeArray.length-2; i>= 0; i--)
    {
        // const element = array[i];
        snakeArray[i+1] = {...snakeArray[i]}
    }

    snakeArray[0].x += inputDir.x;
    snakeArray[0].y += inputDir.y;

    board.innerHTML = "";
    snakeArray.forEach((e, index) => {
        // console.log(e, index)
        sankeElement = document.createElement('div');
        sankeElement.style.gridRowStart = e.y;
        sankeElement.style.gridColumnStart = e.x;
        if(index == 0)
        {
            sankeElement.classList.add('head')
        }
        else{
            
            sankeElement.classList.add('snake')
        }
        board.appendChild(sankeElement)
    })

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}



// main
musicSound.play();
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x:0, y:1}
    movesound.play();
    switch(e.key)
    {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})