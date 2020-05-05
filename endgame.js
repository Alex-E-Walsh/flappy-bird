function endGame() {
  this.img = loadImage("images/game_over.png");

  this.show = function(){
    imageMode(CENTER);
    image(this.img,width/2,height/2,250,150);
  }
};
