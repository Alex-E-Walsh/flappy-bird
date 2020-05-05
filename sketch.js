
var bird;
var pipes = [];
var endGame;
var count;
var over = false;

function setup() {
  bg = loadImage("images/background.png");
  createCanvas(400, 600);
  var reset = createButton("Start Over");
  reset.position(0,610);
  reset.mousePressed(reload);
  count = new count();
  bird = new Bird();
  pipes.push(new Pipe());
  endGame = new endGame();
}

function reload(){
  location.reload();
}

function draw() {
  background(bg)
  bird.update()
  bird.show()
  if( frameCount % 180 == 0 && over == false){
    pipes.push(new Pipe());
  }
  for(var i =pipes.length-1;i>=0;i--){
    if(pipes[i].hits(bird)){over= true;}
    pipes[i].show();
    pipes[i].update();
    if(pipes[i].x == -37){
      count.score ++;
    }
    count.show();
    if (pipes[i].x < -pipes[i].w){
      pipes.splice(i,1);
    }
  };
  if(over){
    frameRate(0)
    endGame.show()
  }
}

function keyPressed() {
  if (keyCode == 32){
    bird.up()
  }


}
