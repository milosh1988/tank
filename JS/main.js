var yourBullet = new Image();
yourBullet.src = 'Pictures/Bullet.png';
var yourTank = new Image();
yourTank.src = 'Pictures/Tank1.png';
var yourScore = document.getElementById('score');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var yourCar = new Image();
yourCar.src = 'Pictures/Tank5.png';
var yourBoom = new Image();
yourBoom.src = 'Pictures/boom.png';
var yourBoom1 = new Image();
yourBoom1.src = 'Pictures/boom1.png';
var yourBoom2 = new Image();
yourBoom2.src = 'Pictures/boom2.png';
var yourBoom3 = new Image();
yourBoom3.src = 'Pictures/boom3.png';
var yourBrick = new Image();
yourBrick.src = 'Pictures/brick1.png';
var yourMetal = new Image();
yourMetal.src = 'Pictures/metal1.png';
var yourBush = new Image();
yourBush.src = 'Pictures/bush.png';
var width = canvas.width;
var height = canvas.height;
var yourLife = document.getElementById('life');
var yourEnemies = document.getElementById('enemies');
var yourEnemiesBoard = document.getElementById('enemiesBoard');
ctx.font = "30px Arial";
ctx.strokeText("Zdravo", 10, 50);
var yourBrickCrack1 = new Image();
yourBrickCrack1.src = 'Pictures/brickd1.png';
var yourBrickCrack2 = new Image();
yourBrickCrack2.src = 'Pictures/brickd2.png';
var yourBrickCrack3 = new Image();
yourBrickCrack3.src = 'Pictures/brickd3.png';
var yourBrickCrack4 = new Image();
yourBrickCrack4.src = 'Pictures/brickd4.png';
var yourBrickCrack5 = new Image();
yourBrickCrack5.src = 'Pictures/brickd5.png';
var yourBrickCrack6 = new Image();
yourBrickCrack6.src = 'Pictures/brickd6.png';

var yourWater = new Image();
yourWater.src = 'Pictures/water4.png';
var yourWater1 = new Image();
yourWater1.src = 'Pictures/water5.png';
var yourWater2 = new Image();
yourWater2.src = 'Pictures/water6.png';

var yourLoad = new Image();
yourLoad.src = 'Pictures/load.png';

function playAudio() {
    var audio = new Audio("Sound/shutting.mp3");
    audio.play();
}

function playAudioDeth() {
    var audio = new Audio("Sound/deth.wav");

    audio.play();
}

function playAudioBrick() {
    var audio = new Audio("Sound/brick.wav");

    audio.play();
}
function playAudioMetal() {
    var audio = new Audio("Sound/metal.wav");

    audio.play();
}


var gidSize = 50;

var map =
    [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 5, 5, 5, 5, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 4, 3, 3, 4, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 2, 3, 1, 2, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 2, 4, 2, 2, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

var map2 =
    [
        [0, 1, 0, 5, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [5, 5, 1, 5, 5, 5, 5, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 4, 3, 3, 4, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 2, 3, 1, 2, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 2, 4, 2, 2, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1]
    ]
var map3 =
    [
        [0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 5, 5, 5, 5, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 4, 3, 3, 4, 0, 0, 0, 1, 1],
        [1, 1, 5, 1, 0, 2, 3, 1, 2, 0, 1, 1, 1, 1],
        [1, 1, 5, 1, 0, 2, 4, 2, 2, 0, 1, 1, 1, 1],
        [1, 1, 5, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 5, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 5, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 5, 5, 5, 5, 5, 5, 5, 1, 4, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 2, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 3, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1]
    ]
var map4 =
    [
        [0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 5, 5, 5, 5, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 2, 3, 3, 2, 0, 0, 0, 1, 1],
        [1, 1, 5, 1, 0, 2, 3, 1, 2, 0, 1, 1, 1, 1],
        [1, 1, 5, 1, 0, 2, 2, 2, 2, 0, 1, 1, 1, 1],
        [1, 1, 5, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 5, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 5, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 3, 5, 1, 3, 5, 5, 5, 1, 2, 1, 1, 1],
        [0, 3, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1],
        [1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1],
        [1, 3, 1, 1, 1, 0, 0, 5, 1, 5, 2, 0, 1, 1],
        [1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 3, 3, 3],
        [4, 1, 0, 0, 1, 1, 4, 1, 1, 1, 0, 1, 1, 4]
    ]

var maps = [map, map2, map3, map4]
var enemies = 0
var enemie = 5
var enemie2 = 10
var enemie3 = 15
var enemie4 = 15

var enemiseByLevel = [enemie, enemie2, enemie3, enemie4]


function createElement(x, y, element) {
    (new element(x, y)).init()
}


var level = 0;
var score;
var life;
var enemiesBoard;

var playing;
var gameStarted;
var sprites;
var tank;
var loads;

function initialiseGame() {
    score = 0;
    yourScore.innerHTML = score
    life = 1;
    yourLife.innerHTML = life
    yourEnemies.innerHTML = enemies
    enemiesBoard = 0;
    yourEnemiesBoard.innerHTML = enemiesBoard

    playing = true;

    sprites = [];
    loads = [];
    tank = new ClassTank();
    tank.init();
    myMap = maps[level % maps.length]
    enemies = enemiseByLevel[level % enemiseByLevel.length]
    initialiseMap(myMap)
    gameStarted = true;
}
function initialiseGameLevel() {
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    let nextLevel = document.getElementById("next-level");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    nextLevel.style.display = "none";


    yourEnemies.innerHTML = enemies
    enemiesBoard = 0;
    yourEnemiesBoard.innerHTML = enemiesBoard

    playing = true;

    sprites = [];
    loads = [];
    tank = new ClassTank();
    tank.init();
    myMap = maps[level % maps.length]
    enemies = enemiseByLevel[level % enemiseByLevel.length]
    initialiseMap(myMap)
    gameStarted = true;
}

function initialiseMap(map) {
    map.forEach(function (e, iy) {
        e.forEach(function (ee, ix) {
            if (ee == 0) {
                //createBrick(ix * gidSize, iy * gidSize, './ground64/ground.png');
            }
            if (ee == 1) {
                createElement(ix * gidSize, iy * gidSize, ClassBrick);
            }
            if (ee == 2) {
                createElement(ix * gidSize, iy * gidSize, ClassBush);
            }
            if (ee == 3) {
                createElement(ix * gidSize, iy * gidSize, ClassWater);
            }
            if (ee == 4) {
                createElement(ix * gidSize, iy * gidSize, ClassLoad);
                loads.push({ x: ix * gidSize, y: iy * gidSize })
            }
            if (ee == 5) {
                createElement(ix * gidSize, iy * gidSize, ClassMetal);
            }
        }
        )
    }
    )
}

function nextLevel() {
    if (enemiesBoard > 0 || enemies > 0) {
        return
    }
    launchNextLevel()

}

function newCar() {
    if (enemies <= 0) {
        return
    }
    car = new ClassCar()
    car.init();
    enemiesBoard++
    enemyShowLeft()
    enemyToAppear()
}

//setInterval(newCar, 3000)
var changeInCar = 10;
function addCar() {

    changeInCar--
    if (changeInCar < 0) {
        changeInCar = 180;
        newCar()
    }
}

function createBullet() {
    if (!tank.alive) {
        return
    }
    var bullet = new ClassBullet();
    bullet.init();

}
function createCarBullet(car) {
    var bulletCar = new ClassCarBullet(car);
    bulletCar.init();

}
window.addEventListener('keydown', (e) => {

    e.preventDefault();

});
document.addEventListener('keyup', function (event) {
    // If space bar is pressed
    if (event.key == " ") {
        createBullet();
    }
    switch (event.key) {
        case 'ArrowLeft':
            tank.setSpeed(-10, 0);
            break;
        case 'ArrowRight':
            tank.setSpeed(10, 0);
            break;
        case 'ArrowUp':
            tank.setSpeed(0, -10);
            break;
        case 'ArrowDown':
            tank.setSpeed(0, 10);
            break;
        default:
    }
    switch (event.key) {
        case 'ArrowLeft':
            tank.direction = -90;
            break;

        case 'ArrowRight':

            tank.direction = 90;
            break;

        case 'ArrowUp':

            tank.direction = 0;
            break;

        case 'ArrowDown':
            tank.direction = 180;
            break;

        default:

    }
    keyup(event)
    event.preventDefault();
    event.stopPropagation();
});

document.addEventListener('click', function () {
    createBullet();
});

function loop() {
    if (gameStarted) {
        update();
        render();
    }
    requestAnimationFrame(loop);
}
function pauseGame() {
    playing = !playing
}

function keyup(e) {
    if (e.keyCode == 80) pauseGame()
}


function update() {
    // Here we update all the sprites
    // THe reverse for loop is faster
    if (playing === true) {
        addCar()
        for (var ix = 0; ix < sprites.length; ix++) {
            var sprite = sprites[ix];
            sprite.update();
        }
    }
}

function render() {
    // Here we render all the sprites after clearing the screen
    ctx.clearRect(0, 0, width, height);

    for (var ix = 0; ix < sprites.length; ix++) {
        var sprite = sprites[ix];
        if (sprite.isWater || sprite.isLoad || sprite.isBrickCrack) {
            sprites[ix].render();
        }
    }

    for (var ix = 0; ix < sprites.length; ix++) {
        var sprite = sprites[ix];
        if (sprite.isCarBullet || sprite.isBullet) {
            sprites[ix].render();
        }
    }
    for (var ix = 0; ix < sprites.length; ix++) {
        var sprite = sprites[ix];
        if (sprite.isTank ||
            sprite.isCar ||
            sprite.isBrick ||
            sprite.isMetal
        ) {
            sprites[ix].render();
        }
    }
    for (var ix = 0; ix < sprites.length; ix++) {
        var sprite = sprites[ix];
        if (sprite.isBush || sprite.isBoom) {
            sprites[ix].render();
        }
    }
}

// Start the game
requestAnimationFrame(loop);

window.addEventListener('load', () => {
    yourTank.style.position = 'absolute';
    yourTank.style.left = '910px';
    yourTank.style.top = '230px';
});
//Isto, drugacije napisano

//funkcija rotacije


function tankBlock(tank) {

    var rectCanvas = canvas.getBoundingClientRect()

    if (tank.y < 0) {
        return true
    }
    if (tank.x < 0) {
        return true
    }
    if (tank.y + 20 > rectCanvas.height) {
        return true
    }
    if (tank.x + 20 > rectCanvas.width) {
        return true
    }
    if (isSomethingOverlapBrick(tank)) {
        return true
    }
    return false
}


function isEndSmallerThanBegining(end, begining) {
    return end <= begining
}

function somethingOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    if (isEndSmallerThanBegining(ah + ay, by)) {
        return false
    }
    if (isEndSmallerThanBegining(bh + by, ay)) {
        return false
    }
    if (isEndSmallerThanBegining(aw + ax, bx)) {
        return false
    }
    if (isEndSmallerThanBegining(bw + bx, ax)) {
        return false
    }
    return true
}

function hitSomething(bullet, something) {
    return somethingOverlap(bullet.x, bullet.y, 10, 10, something.x, something.y, something.width || 25, something.height || 25)
}


//Izvlacenje pozicije iz sprites
function carGotHit(car) {
    for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        if (sprite == car) {
            continue;
        }
        if (!sprite.isBullet) {
            continue;
        }
        if (!sprite.alive) {
            continue;
        }
        if (hitSomething(sprite, car)) {
            sprite.alive = false;
            playAudioDeth(car)
            enemiesBoard--
            enemyShowLeft()
            addScore()
            var myBoom = new ClassBoom(car)
            sprites.push(myBoom)
            return true;
        }
    }
    return false;
}
function addScore() {
    score = score + 1
    yourScore.innerHTML = score
    nextLevel()
}

function lostLifes() {
    life--
    yourLife.innerHTML = life
}


function enemyToAppear() {
    enemies--
    yourEnemies.innerHTML = enemies
}


function enemyShowLeft() {
    yourEnemiesBoard.innerHTML = enemiesBoard
}


//Izvlacenje pozicije iz sprites
function tankGotHit(tank) {
    for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        if (sprite == tank) {
            continue;
        }
        if (!sprite.isCarBullet) {
            continue;
        }
        if (!sprite.alive) {
            continue;
        }
        if (hitSomething(sprite, tank)) {
            sprite.alive = false;
            playAudioDeth(tank)
            var myBoom = new ClassBoom(tank)
            sprites.push(myBoom)
            return true;
        }
    }
    return false;
}

function brickGotHit(brick) {
    for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        if (sprite == brick) {
            continue;
        }
        if (!(sprite.isCarBullet || sprite.isBullet)) {
            continue;
        }
        if (sprite.isBrick) {
            playAudioBrick()
        }

        if (!sprite.alive) {
            continue;
        }
        if (hitSomething(sprite, brick)) {
            sprite.alive = false;
            return true;
        }

    }
    return false;
}

function isSomethingOverlapBrick(something) {
    for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        if (sprite == something) {
            continue;
        }
        if (!(sprite.isMetal || sprite.isBrick || sprite.isWater)) {
            continue;
        }
        if (!sprite.alive) {
            continue;
        }
        if (somethingOverlap(
            something.x, something.y, something.width || 25, something.height || 25,
            sprite.x, sprite.y, sprite.width, sprite.height)
        ) {
            return true;
        }
    }
    return false;
}

//a --- b --- a || b
//0     0     0
//1     0     1
//0     1     1
//1     1     1
////////////////////
//a --- b --- a && b
//0     0     0
//1     0     0
//0     1     0
//1     1     1
/////////////////// 

function startGame() {
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    let nextLevel = document.getElementById("next-level");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    nextLevel.style.display = "none";
    initialiseGame();
}

function gameOver() {
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    let nextLevel = document.getElementById("next-level");
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
    nextLevel.style.display = "none";
    gameStarted = false;
}

function launchNextLevel() {
    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    let nextLevel = document.getElementById("next-level");
    let nextLevelLabel = document.getElementById("next-level-label");

    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "none";
    nextLevel.style.display = "block";
    level++
    nextLevelLabel.innerHTML = "Level " + level + " finished"
}


