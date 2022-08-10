// Get the canvas and stuff
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var img = document.getElementById('pictureBullet')
let POP_SOUND = new audio ('C:\Users\milos\OneDrive\Desktop\java-script\Tekici\Sound\muz.mp3');
POP_SOUND.volume = 0.5;

var width = canvas.width;
var height = canvas.height;

// The secret woobler
var shouldWooble = false;
var woobler = document.querySelector('button');
woobler.addEventListener('click', function(eveni) {
  eveni.stopPropagation();
  // moze i shouldWooble = !shouldWooble
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
      ctx.drawImage(img, this.x, this.y, 10, 10);
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

function kapljica() {
  this.x = width/2 + Math.random()*50;
  this.y = 0;
  this.alive = true;
  this.init = function() {
    // Update position
    sprites.push(this);
  };
  this.render = function() {
    if (this.alive) {
      // Render only if the bullet is alive (aka on screen)
      ctx.drawImage(img, this.x, this.y, 10, 10);
    }
  };
  this.update = function() {
    if (this.alive) {
      // update the x value only if the object is alive
      this.y += 10;
      // Check if the bullet is on screen
      if (this.y > height) {
        this.alive = false;
      }
    }
  };
}

var bulets = {
  update: function() {
    if (this.alive) {
      // update the x value only if the object is alive
      this.y += 10;
      // Check if the bullet is on screen
      if (this.y > height) {
        this.alive = false;
      }
    }
  }
}


setInterval(function(){
  kapljice = new kapljica();
  kapljice.init();
}, 100)

function trepceMetak() {
  this.x = width / 2 ;
  this.y = height / 2;
  this.alive = true;
  this.couner =0;
  this.init = function() {
    // Update position
    sprites.push(this);
  };
  this.render = function() {
    if (this.alive) {
      // Render only if the bullet is alive (aka on screen)
      ctx.drawImage(img, this.x, this.y, 10, 10);
    }
  };
  this.update = function() {
    this.couner--
    if(this.couner < 0){
      this.couner = 30

      if (this.alive){
        this.alive=false
      } else{
        this.alive=true
      }
    }
  };
}

var bulets = {
  update: function() {
    if (this.alive) {
      // update the x value only if the object is alive
      this.y += 10;
      // Check if the bullet is on screen
      if (this.y > height) {
        this.alive = false;
      }
    }
  }
}



  trepceMetak1 = new trepceMetak();
  trepceMetak1.init();



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
    var sprite = sprites[ix];
    sprite.update();
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