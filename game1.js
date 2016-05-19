var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x330033});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var player = new PIXI.Sprite(PIXI.Texture.fromImage("player.png"));
var bubble = new PIXI.Sprite(PIXI.Texture.fromImage("bubble.png"));

//player.health = 100;
var counter = 0;

player.position.x = 200;
player.position.y = 200;

bubble.position.x = 300;
bubble.position.y = 200;

stage.addChild(player);

function keydownEventHandler(e) {
  if (e.keyCode == 87) { // W key
    player.position.y -= 20;
  }
  if (e.keyCode == 83) { // S key
    player.position.y += 20;
  }
  if (e.keyCode == 65) { // A key
    player.position.x -= 20;
  }
  if (e.keyCode == 68) { // D key
    player.position.x += 20;
  }
  if (player.position == bubble.position) {
    player
  }
}

document.addEventListener('keydown', keydownEventHandler);


function add() {
    return counter += 1;
}


function getRandomPos(x, y){
  return Math.floor(Math.random()*(y+1-x)) + x; 
    }

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}

animate();
