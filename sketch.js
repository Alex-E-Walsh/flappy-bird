
var bird;
var pipes = [];
var endGame;
over = false;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  endGame = new endGame();
}

function gameOver(){
  frameRate(0)
  endGame.show()
  bird.velocity = 0;
  bird.gravity = 0;
  for(p in pipes){
    if(pipes[p].x < 400){pipes[p].x_speed=0;}
    else{pipes.splice(p,pipes.length-1);}
  }

  // console.log('game image')
}

function draw() {
  background(255)
  console.log('still going')
  bird.update()
  bird.show()
  if( frameCount % 180 == 0 && over == false){
    pipes.push(new Pipe());
  }
  for(var i =pipes.length-1;i>=0;i--){
    if(pipes[i].hits(bird)){over= true;}
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].x < -pipes[i].w){
      pipes.splice(i,1);
    }
  };
  if(over){

    gameOver()
  }
}

function keyPressed() {
  if (keyCode == 32){
    bird.up()
  }


}
