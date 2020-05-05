
function Pipe() {

  this.img_b = loadImage("images/pipe_bottom.png");
  this.img_t = loadImage("images/pipe_top.png");

  this.x= width-50;
  this.x_speed = 1.5 ;
  this.spacing = 175;
  this.h = random((height/6), (height/2))
  this.w = 100;
  this.bottom = height - (this.h + this.spacing);
  this.game_over = false;

  this.hits = function(bird){
      if (bird.y < this.h || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.game_over = true;
          return true;
        }
      }
  return false
  };

  this.show = function(){
    imageMode(CORNER);
    image(this.img_t,this.x,0,this.w,this.h);
    image(this.img_b,this.x,height-this.bottom,this.w,this.bottom);
  };

  this.update = function(){
    this.x -= this.x_speed
  };


};
