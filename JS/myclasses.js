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
        if (this.y > height - 25) {
            this.sy = -1;
            this.direction = 0;
        }

        if (this.x > width - 25) {
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
                gameOver()
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

var pera = { bojOciju: "Braon" }
console.log(pera, new ClassTank())