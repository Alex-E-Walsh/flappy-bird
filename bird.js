
function Bird() {

  this.img = loadImage("br_flappy.png");

  this.y = height / 2;
  this.x = 64;
  this.width = 50;
  this.height = 50;

  this.gravity = .75;
  this.velocity = 0;

  this.show = function() {
    imageMode(CENTER);
    image(this.img,this.x,this.y,this.width,this.height);
  };

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.velocity >= 5){this.velocity = 5};

    if (this.y >= height){
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0){
      this.velocity =0;
      this.y = 0;
    }
  };

  this.up = function(){
    this.velocity -= (this.gravity*15);
  };

}
