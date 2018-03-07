// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;
    if(this.x > 505) {
      this.x = -100;
      this.randomspeed();
    }

    var left = this.x - 70;
    var right = this.x + 70;
    var top = this.y - 65;
    var bottom = this.y + 65;

    if(player.x > left && player.x < right && player.y > top && player.y < bottom){
      player = new Player();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.randomspeed = function(){
  this.speed = 50 * Math.floor(Math.random() + 1);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.character = "images/char-princess-girl.png";
  this.x = 202;
  this.y = 400;
  this.leftwall = false;
  this.rightwall = false;
  this.bottomwall = true;
}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.character), this.x, this.y);
}
Player.prototype.update = function() {

}
Player.prototype.handleInput = function(code){
  var x = 101;
  var y = 83;
  this.checkposition();

  if(code == "left"){
    if(this.leftwall == true){
      return;
    }
    else {
      this.x -= x;
    }
  }
  if(code == "right"){
    if(this.rightwall == true){
      return;
    }
    else {
      this.x += x;
    }
  }
  if(code == "up"){
    if(this.y <= 100) {
      this.reset();
    }
    else {
      this.y -= y;
    }
  }
  if(code == "down"){
    if(this.bottomwall == true){
      return;
    }
    else {
      this.y += y;
    }
  }
}

Player.prototype.reset = function() {
  this.x = 202;
  this.y = 400;
  this.checkposition();
}

Player.prototype.checkposition = function(){
  if(this.x <= 80){
    this.leftwall = true;
  }
  else if(this.x >= 400) {
    this.rightwall = true;
  }
  else {
    this.leftwall = false;
    this.rightwall = false;
  }

  if(this.y >= 400){
    this.bottomwall = true;
  }
  else {
    this.bottomwall = false;
  }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for(var i = 0; i < 3; i++){
  var aSpeed = Math.floor(Math.random() * 4 + 1) * 60;
  allEnemies.push( new Enemy(-100, 60 + 80 * i, aSpeed) );
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  // console.log(e);
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
