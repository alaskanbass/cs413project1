var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(800, 500, {backgroundColor: 0xeeeeee});

gameport.appendChild(renderer.view);

function randomGridNumX() {
	return (Math.floor(Math.random() * 15)) * 50;
}
function randomGridNumY() {
	return (Math.floor(Math.random() * 9)) * 50;
}

var stage = new PIXI.Container();

var player = new PIXI.Sprite(PIXI.Texture.fromImage("player.png"));
var bubble = new PIXI.Sprite(PIXI.Texture.fromImage("bubble.png"));

var counter = 0;

function randomBubblePos() {
	bubble.position.x = randomGridNumX();
	bubble.position.y = randomGridNumY();
}

//player.hitArea = new PIXI.Rectangle(50, 50, 50 ,50);
//bubble.hitArea = new PIXI.Rectangle(200, 200, 50 ,50);

player.position.x = 300;
player.position.y = 300;

randomBubblePos();

stage.addChild(player);
stage.addChild(bubble);


function keydownEventHandler(e) {
  if (e.keyCode == 87) { // W key
    player.position.y -= 50;
  }
  if (e.keyCode == 83) { // S key
    player.position.y += 50;
  }
  if (e.keyCode == 65) { // A key
    player.position.x -= 50;
  }
  if (e.keyCode == 68) { // D key
    player.position.x += 50;
  }
}

function clickEventHandler(k) {
	randomBubblePos();
	counter += 1;
}

bubble.interactive = true;
bubble.on('mousedown', clickEventHandler);

document.addEventListener('keydown', keydownEventHandler);

function finalscore() {
	alert("Time is up!  Your score was " + counter + " points!  Refresh the page to try again.")
}

function animate() {
	requestAnimationFrame(animate);
	//player.rotation += 0.02;
	renderer.render(stage);
	if (player.position == bubble.position) {
    	randomBubblePos();
    	counter += 1;
  }
}
animate();