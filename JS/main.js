var yourBullet = new Image();
yourBullet.src = 'Pictures/Bullet.png';
var yourTank = new Image();
yourTank.src = 'Pictures/Tank1.png';
var yourScore = document.getElementById('score');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var score = 0;

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
var life = 3;
var yourLife = document.getElementById('life');
var enemies = 19;
var yourEnemies = document.getElementById('enemies');
var enemiesBoard = 1;
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

var sprites = [];


function ClassLoad(x2, y2) {
    this.x = x2;
    this.y = y2;
    this.width = 50;
    this.height = 50;
    this.alive = true;
    this.isLoad = true;
    this.init = function () {
        // Update position
        sprites.push(this);

    };
    this.render = function () {
        if (this.alive) {
            ctx.save();
            ctx.drawImage(yourLoad, this.x, this.y, this.width, this.height);
            ctx.restore();
        }

    };
    this.update = function () {

    };

}

function ClassWater(x, y) {
    this.x = x
    this.y = y
    this.images = [yourWater, yourWater1, yourWater2, yourWater1]
    this.selected = 0;

    this.changeIn = 10;

    this.width = 50;
    this.height = 50;

    this.alive = true;
    this.isWater = true;
    this.init = function () {
        // Update position
        this.x += 0;
        sprites.push(this);
    }

    this.render = function () {
        if (!this.alive) {
            return
        }
        ctx.save();
        ctx.drawImage(this.images[this.selected % this.images.length], this.x, this.y, this.width, this.height);
        ctx.restore();
    }
    this.update = function () {
        if (!this.alive) {
            return

        }
        this.changeIn--
        if (this.changeIn < 0) {
            this.changeIn = 25;
            this.selected++;
        }


    }
}

function ClassBrickCrack(brick) {
    this.x = brick.x
    this.y = brick.y
    this.images = [yourBrickCrack1, yourBrickCrack2, yourBrickCrack3, yourBrickCrack4, yourBrickCrack5, yourBrickCrack6]
    this.selected = 0;

    this.changeIn = 10;
    this.alive = true;
    this.isBrickCrack = true;

    this.render = function () {
        if (!this.alive) {
            return
        }
        ctx.save();
        ctx.translate(this.x + 25, this.y + 25);
        ctx.drawImage(this.images[this.selected % this.images.length], -25, -25, 50, 50);
        ctx.restore();
    }
    this.update = function () {
        if (!this.alive) {
            return

        }
        this.changeIn--
        if (this.changeIn < 0) {
            this.changeIn = 10;
            this.selected++;
        }
        if (this.selected >= 6) {
            this.alive = false;
        }

    }
}
function ClassBrick(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.alive = true;
    this.isBrick = true;
    this.init = function () {
        // Update position
        this.x += 0;
        sprites.push(this);

    };
    this.render = function () {
        if (this.alive) {
            ctx.save();
            ctx.drawImage(yourBrick, this.x, this.y, this.width, this.height);
            ctx.restore();


        }

    };
    this.update = function () {
        if (this.alive && brickGotHit(this)) {
            this.alive = false;
            playAudioBrick()
            var myBoom = new ClassBrickCrack(this)
            sprites.push(myBoom)
        };
    }
}

function ClassMetal(x1, y1) {
    this.x = x1;
    this.y = y1;
    this.width = 50;
    this.height = 50;
    this.alive = true;
    this.isMetal = true;
    this.init = function () {
        // Update position
        sprites.push(this);

    };
    this.render = function () {
        if (this.alive) {
            ctx.save();
            ctx.drawImage(yourMetal, this.x, this.y, this.width, this.height);
            ctx.restore();

        }

    };
    this.update = function () {
        if (this.alive && brickGotHit(this)) {
            playAudioMetal()

        };
    };

}

function ClassBush(x2, y2) {
    this.x = x2;
    this.y = y2;
    this.width = 50;
    this.height = 50;
    this.alive = true;
    this.isBush = true;
    this.init = function () {
        // Update position
        sprites.push(this);

    };
    this.render = function () {
        if (this.alive) {
            ctx.save();
            ctx.drawImage(yourBush, this.x, this.y, this.width, this.height);
            ctx.restore();
        }

    };
    this.update = function () {

    };

}



function ClassBoom(car) {
    this.x = car.x
    this.y = car.y
    this.images = [yourBoom, yourBoom1, yourBoom2, yourBoom3]
    this.selected = 0;
    //zamene slike za 10 frejam(prolaz kroz program)
    this.changeIn = 10;
    this.alive = true;
    this.isBoom = true;
    this.render = function () {
        if (!this.alive) {
            return
        }
        ctx.save();
        ctx.translate(this.x + 12.5, this.y + 12.5);
        ctx.drawImage(this.images[this.selected % this.images.length], -12.5, -12.5, 25, 25);
        ctx.restore();
    }
    this.update = function () {
        if (!this.alive) {
            return
        }
        this.changeIn--
        if (this.changeIn < 0) {
            this.changeIn = 10;
            this.selected++;
        }
        if (this.selected >= 8) {
            this.alive = false;
        }
    }
}

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


function ClassCar() {
    var myPos = loads[parseInt(Math.random() * loads.length)]
    this.x = myPos.x + 10;
    this.y = myPos.y + 10;
    this.sx = 0;
    this.sy = 1;
    this.direction = 180;
    this.shootIn = Math.random() * 600
    this.isCar = true

    this.alive = true;
    this.init = function () {
        // Update position
        this.x += 0;
        sprites.push(this);
    };
    this.render = function () {
        if (this.alive) {

            ctx.save();
            ctx.translate(this.x + 12.5, this.y + 12.5);
            ctx.rotate(this.direction * (Math.PI / 180));
            ctx.drawImage(yourCar, -12.5, -12.5, 25, 25);
            ctx.restore();

        }
    }
    this.update = function () {
        if (!this.alive) {
            return;
        }

        var ponovi = Math.random()
        if (ponovi < 0.01) {
            var pravac = Math.random()
            if (pravac < 0.5) {
                if (pravac < 0.25) {
                    this.sy = -1
                    this.sx = 0
                    this.direction = 0
                }
                else {
                    this.sy = 1
                    this.sx = 0
                    this.direction = 180
                }
            }
            else {
                if (pravac < 0.75) {
                    this.sx = -1
                    this.sy = 0
                    this.direction = -90
                }
                else {
                    this.sx = 1
                    this.sy = 0
                    this.direction = 90
                }
            }


        }

        //Da ne izlazi iz okvira :D
        if (this.y > height) {
            this.sy = -1;
            this.direction = 0;
        }

        if (this.x > width) {
            this.sx = -1
            this.direction = -90;
        }

        if (this.y < 0) {
            this.sy = 1
            this.direction = 180
        }

        if (this.x < 0) {
            this.sx = 1
            this.direction = 90
        }

        var oldx = this.x;
        var oldy = this.y;
        this.x += this.sx;
        this.y += this.sy;
        if (isSomethingOverlapBrick(this)) {
            this.x = oldx;
            this.y = oldy;
        }
        // this.sx=0;
        // this.sy=0;
        if (carGotHit(this)) {
            this.alive = false;
        }
        this.shootIn--
        if (this.shootIn < 0) {
            this.shootIn = Math.random() * 600
            createCarBullet(this)
        }

    }
    this.setSpeed = function (sx, sy) {
        this.sx = sx;
        this.sy = sy;

    }
};

function ClassTank() {
    this.x = 20;
    this.y = 20;
    this.sx = 0;
    this.sy = 0;
    this.direction = 0;

    this.alive = true;
    this.isTank = true;
    this.init = function () {
        // Update position
        this.x += 5;
        sprites.push(this);
    };
    this.render = function () {
        if (this.alive) {

            ctx.save();
            ctx.translate(this.x + 11, this.y + 12.5);
            ctx.rotate(this.direction * (Math.PI / 180));
            ctx.drawImage(yourTank, -10, -12.5, 20, 25);
            ctx.restore();
        }
    }
    this.update = function () {
        if (!this.alive) {
            return
        }
        var oldx = this.x;
        var oldy = this.y;
        this.x += this.sx;
        this.y += this.sy;
        this.sx = 0;
        this.sy = 0;
        if (tankBlock(this)) {
            this.x = oldx;
            this.y = oldy;
        }
        if (tankGotHit(this)) {
            this.alive = false;


            if (life <= 0) {
                alert("Game over!")
                return


            }

            var newTank = function () {
                tank = new ClassTank()
                tank.init();
                lostLifes()

            }
            setTimeout(newTank, 500)
        }

    }
    this.setSpeed = function (sx, sy) {
        this.sx = sx;
        this.sy = sy;

    }

};
function ClassCarBullet(car) {
    this.x = car.x + 6;
    this.y = car.y + 6;
    this.direction = car.direction;
    this.alive = true;
    this.isCarBullet = true;
    this.init = function () {
        // Update position
        this.x += 0;
        sprites.push(this);
        playAudio()
    };
    this.render = function () {
        if (this.alive) {
            ctx.save();
            ctx.translate(this.x + 5, this.y + 5); /// neki problem
            ctx.rotate(this.direction * (Math.PI / 180));
            ctx.drawImage(yourBullet, -5, -5, 10, 10);
            ctx.restore();


        }
    };
    this.update = function () {
        if (this.alive) {
            if (this.direction == 0) {
                this.y -= 1
            }
            if (this.direction == -90) {
                this.x -= 1
            }
            if (this.direction == 180) {
                this.y += 1
            }
            if (this.direction == 90) {
                this.x += 1
            }
            // Check if the bullet is on screen
            if (this.y > height) {
                this.alive = false;
            }
            //check if the bullet is hit element
            if (this.x > width) {
                this.alive = false;
            }
            // Check if the bullet is on screen
            if (this.y < 0) {
                this.alive = false;
            }
            // Check if the bullet is on screen
            if (this.x < 0) {
                this.alive = false;
            }
            // if(hitSomething(this, car)){
            //     this.alive = false;
            // }

        }
    };
}

function ClassBullet() {
    this.x = tank.x + 6;
    this.y = tank.y + 6;
    this.direction = tank.direction;
    this.alive = true;
    this.isBullet = true;
    this.init = function () {
        // Update position
        this.x += 0;
        sprites.push(this);
        playAudio()
    };
    this.render = function () {
        if (this.alive) {
            ctx.save();
            ctx.translate(this.x + 5, this.y + 5); /// neki problem
            ctx.rotate(this.direction * (Math.PI / 180));
            ctx.drawImage(yourBullet, -5, -5, 10, 10);
            ctx.restore();


        }

    };
    this.update = function () {
        if (this.alive) {
            if (this.direction == 0) {
                this.y -= 1
            }
            if (this.direction == -90) {
                this.x -= 1
            }
            if (this.direction == 180) {
                this.y += 1
            }
            if (this.direction == 90) {
                this.x += 1
            }
            // Check if the bullet is on screen
            if (this.y > height) {
                this.alive = false;
            }
            //check if the bullet is hit element
            if (this.x > width) {
                this.alive = false;
            }
            // Check if the bullet is on screen
            if (this.y < 0) {
                this.alive = false;
            }
            // Check if the bullet is on screen
            if (this.x < 0) {
                this.alive = false;
            }
            // if(hitSomething(this, car)){
            //     this.alive = false;
            // }
            // this.sx=0;
            // this.sy=0;

        }
    };
}

var tank = new ClassTank();
tank.init();


var bricks = [{ x: 150, y: 50 }, { x: 200, y: 50 }, { x: 250, y: 50 }, { x: 300, y: 50 }, { x: 350, y: 50 },
{ x: 50, y: 100 }, { x: 250, y: 100 }, { x: 350, y: 100 },
{ x: 50, y: 150 }, { x: 250, y: 150 }, { x: 350, y: 150 },
{ x: 50, y: 200 }, { x: 100, y: 200 }, { x: 200, y: 200 }, { x: 250, y: 200 }, { x: 350, y: 200 },
{ x: 50, y: 250 }, { x: 100, y: 250 }, { x: 350, y: 250 },
{ x: 50, y: 300 }, { x: 100, y: 300 }, { x: 200, y: 300 }, { x: 250, y: 300 }, { x: 350, y: 300 },
{ x: 50, y: 350 }, { x: 100, y: 350 }, { x: 200, y: 350 }, { x: 250, y: 350 }, { x: 300, y: 350 }, { x: 350, y: 350 },
];
for (var i = 0; i < bricks.length; i++) {
    var brickpos = bricks[i];
    var brick = new ClassBrick(brickpos.x, brickpos.y);
    brick.init();
}

var metals = [{ x: 0, y: 50 }, { x: 100, y: 50 },
];
for (var i = 0; i < metals.length; i++) {
    var metalpos = metals[i];
    var metal = new ClassMetal(metalpos.x, metalpos.y);
    metal.init();
}

var bushs = [{ x: 50, y: 0 }, { x: 100, y: 150 },
];
for (var i = 0; i < bushs.length; i++) {
    var bushpos = bushs[i];
    var bush = new ClassBush(bushpos.x, bushpos.y);
    bush.init();
}

var waters = [{ x: 150, y: 150 }, { x: 100, y: 150 },
];
for (var i = 0; i < waters.length; i++) {
    var waterpos = waters[i];
    var water = new ClassWater(waterpos.x, waterpos.y);
    water.init();
}

var loads = [{ x: 300, y: 300 }, { x: 0, y: 300 }, { x: 150, y: 300 }];

for (var i = 0; i < loads.length; i++) {
    var loadpos = loads[i];
    var load = new ClassLoad(loadpos.x, loadpos.y);
    load.init();
}


var newCar = function () {
    if (enemies <= 0) {
        return
    }
    car = new ClassCar()
    car.init();
    enemiesBoard++
    enemyShowLeft()
    enemyToAppear()

}

setInterval(newCar, 3000)


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

document.addEventListener('keyup', function (event) {
    // If space bar is pressed
    if (event.keyCode == 32) {
        createBullet();
    }
    event.preventDefault();
});

document.addEventListener('click', function () {
    createBullet();
});

function loop() {
    // Very simple and naive game loop
    update();
    render();
    requestAnimationFrame(loop);
}

function update() {
    // Here we update all the sprites
    // THe reverse for loop is faster
    for (var ix = 0; ix < sprites.length; ix++) {
        var sprite = sprites[ix];
        sprite.update();
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

window.addEventListener('keyup', (event) => {
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
});
//funkcija rotacije


window.addEventListener('keyup', function (event) {
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
});

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
            addScore()
            enemiesBoard--
            enemyShowLeft()
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
}
yourScore.innerHTML = score
function lostLifes() {
    life--
    yourLife.innerHTML = life
}
yourLife.innerHTML = life

function enemyToAppear() {
    enemies--
    yourEnemies.innerHTML = enemies
}
yourEnemies.innerHTML = enemies

function enemyShowLeft() {
    yourEnemiesBoard.innerHTML = enemiesBoard
}
yourEnemiesBoard.innerHTML = enemiesBoard

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
        if (sprite == brick == metal) {
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