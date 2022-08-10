var jabukaDom = document.createElement('img');
jabukaDom.src = '/Pictures/apple.png'
jabukaDom.className = 'jabuka'
var teren = document.getElementById('main')

teren.appendChild(jabukaDom);



setInterval(function(){
jabukaDom.style.top = Math.random() * 500 + 'px'
jabukaDom.style.left = Math.random() * 500 + 'px'
}, 1000)

var noviSt = 'Misko pije'

function dodavanje(ona){
    return ona + ' Pivo'
}
noviSt = dodavanje(noviSt)
console.log(noviSt)

var pas = 'Hana'

function spic(mali){
    return mali + ' je cupa'
}

pas = spic(pas)
console.log(pas)
// Get the canvas and stuff
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

// The secret woobler
var shouldWooble = false;
var woobler = document.querySelector('button');
woobler.addEventListener('click', function() {
  if (shouldWooble) {
    shouldWooble = false;
    woobler.innerHTML = "Turn on Wooble";
  } else {
    shouldWooble = true;
    woobler.innerHTML = "Turn off Wooble";
  }
});

// This way when we draw the bullet it's always blue
ctx.fillStyle = "blue";

// Our sprites container
var sprites = [];

function bullet() {
  this.x = 0;
  this.y = height / 2;
  this.alive = true;
  this.init = function() {
    // Update position
    this.x += 5;
    sprites.push(this);
  };
  this.render = function() {
    if (this.alive) {
      // Render only if the bullet is alive (aka on screen)
      ctx.fillRect(this.x, this.y, 10, 10);
    }
  };
  this.update = function() {
    if (this.alive) {
      // update the x value only if the object is alive
      this.x += 7;
      if (shouldWooble) {
        this.y = (Math.sin(this.x) * 34) + (height / 2);
      }

      // Check if the bullet is on screen
      if (this.x > width) {
        this.alive = false;
      }
    }
  };
}

function createBullet() {
  bullets = new ClassBullet();
  bullets.init();
}

document.addEventListener('keyup', function(event) {
  // If space bar is pressed
  if (event.keyCode == 32) {
    createBullet();
  }
  event.preventDefault();
});

document.addEventListener('click', function() {
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
  for (var ix = sprites.length; ix--;) {
    sprites[ix].update();
  }
}

function render() {
  // Here we render all the sprites after clearing the screen
  ctx.clearRect(0, 0, width, height);
  for (var ix = sprites.length; ix--;) {
    sprites[ix].render();
  }
}

// Start the game
requestAnimationFrame(loop);