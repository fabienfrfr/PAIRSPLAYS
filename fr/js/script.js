// ---- Algorithme (initialisation): 
var a,b,A,B,C,link;
var file1,file2,F1c,F1a,F2c;
var Score, Best, B1,B2,B3 ;

// Affichage :
var tileContainer = document.querySelector(".tile-container");
var scoreContainer = document.querySelector(".score-container");
var bestContainer    = document.querySelector(".best-container");
var messageContainer = document.querySelector(".game-message");

var gameContainer = document.getElementsByClassName("game-container")[0];

var wrapper1 = document.createElement("div");
var wrapper2 = document.createElement("div");
var wrapper3 = document.createElement("div");

var inner1 = document.createElement("div");
var inner2 = document.createElement("div");
var inner3 = document.createElement("div");

var addition = document.createElement("div");

var classes1,classes2,classes3;

inner1.classList.add("tile-inner");
inner2.classList.add("tile-inner");
inner3.classList.add("tile-inner");

// Parametre de lancement + Read and Dispose : 
if (window.localStorage.getItem("gameState") == null){ // new
	gameManager(0);
	scoreManage(1,0,scoreContainer);
}
else { // read storage
	gameManager(1);
	scoreManage(1,0,scoreContainer);
}

// ---- Algorithme (traitement): 
var LEFT= 37;
var RIGHT= 39;
var touchStartClientX, touchStartClientY;

function Evenement(){
	var listen1 = function (event) {
		if (event.targetTouches > 1) {return;}// Ignore if touching with more than 1 finger
		touchStartClientX = event.touches[0].clientX;
		touchStartClientY = event.touches[0].clientY;
		event.preventDefault();
	};
	var listen2 = function (event) {event.preventDefault();};
	var listen3 = function (event) {
    	if (event.targetTouches > 0) {return;} // Ignore if still touching with one or more fingers
    	var touchEndClientX, touchEndClientY;
    	touchEndClientX = event.changedTouches[0].clientX;
    	touchEndClientY = event.changedTouches[0].clientY;

    	var dx = touchEndClientX - touchStartClientX;var absDx = Math.abs(dx);
    	var dy = touchEndClientY - touchStartClientY;var absDy = Math.abs(dy);

    	if (Math.max(absDx, absDy) > 10) {
      	// (right : left) : (down : up) --> horloge !
      	touch = absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0);
      	if (touch == 1){LR(1);}
      	if (touch == 3){LR(-1);}
    	}
 	};
	var listenk = function(e) {
		var event = e.which;
		if (event == RIGHT) {
			e.preventDefault();
			LR(1);
		}
		if (event == LEFT) {
			e.preventDefault();
			LR(-1);
		}
    };   
	this.start = function() {
		document.addEventListener('keydown', listenk); 
		gameContainer.addEventListener("touchstart", listen1);
		gameContainer.addEventListener("touchmove", listen2);
		gameContainer.addEventListener("touchend", listen3);
 	};
 	this.stop = function() {
 		document.removeEventListener('keydown', listenk); 
		gameContainer.removeEventListener("touchstart", listen1);
		gameContainer.removeEventListener("touchmove", listen2);
		gameContainer.removeEventListener("touchend", listen3);
 	};
};

evenement = new Evenement();
evenement.start();
