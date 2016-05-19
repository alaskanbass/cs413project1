var gameport = document.getElementById("gameport");
var renderer = PIXI.autoDetectRenderer(950, 500, {backgroundColor: 0xeeeeee});

gameport.appendChild(renderer.view);
//var container = new PIXI.Container();
//container.addChild(player3);
function randomGridNumX() {
	return (Math.floor(Math.random() * 32)) * 25;
}
function randomGridNumY() {
	return (Math.floor(Math.random() * 16)) * 25;
}

var stage = new PIXI.Container();
var background = new PIXI.Sprite(PIXI.Texture.fromImage("background.png"));
var player = new PIXI.Sprite(PIXI.Texture.fromImage("player.png"));
var player1 = new PIXI.Sprite(PIXI.Texture.fromImage("player1.png"));
var player2 = new PIXI.Sprite(PIXI.Texture.fromImage("player2.png"));
var player3 = new PIXI.Sprite(PIXI.Texture.fromImage("player3.png"));

var counter = 0;

function randomPlayerPos(person) {
	person.position.x = randomGridNumX();
	person.position.y = randomGridNumY();
}

randomPlayerPos(player);
randomPlayerPos(player1);
randomPlayerPos(player2);
randomPlayerPos(player3);
background.position.x = 0;
background.position.y = 0;

stage.addChild(background);
stage.addChild(player);
stage.addChild(player1);
stage.addChild(player2);
stage.addChild(player3);



function clickEventHandler(e) {
	randomPlayerPos(this);
	counter += 1;
}

player.interactive = true;
player1.interactive = true;
player2.interactive = true;
player3.interactive = true;
player.on('mousedown', clickEventHandler);
player1.on('mousedown', clickEventHandler);
player2.on('mousedown', clickEventHandler);
player3.on('mousedown', clickEventHandler);

function finalscore() {
	alert("Time is up!  Your score was " + counter + " points!  Refresh the page to try again.")
}

function animate() {
	requestAnimationFrame(animate);
	//player.rotation += 0.02;
	renderer.render(stage);
	}
animate();