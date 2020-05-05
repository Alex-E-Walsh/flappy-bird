function count(){
  this.score = 0

  this.show = function(){
    textSize(40);
    textAlign(CENTER)
    textStyle(BOLD)
    text("SCORE:",width/2,height/10);
    text(this.score,width/2,height/6);
  }

  this.update = function(pipe){
    if(bird.x == (pipe.x + pipe.w)){
      this.score ++;
      console.log('plus one');
  }
}
}
