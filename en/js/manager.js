// Retry with new question (-10 points!)
restart = document.querySelectorAll('.restart-button');
confirm = document.querySelectorAll('.confirm-button');
cancel = document.querySelectorAll('.cancel-button');
keepGoing = document.querySelectorAll('.keep-playing-button');
tryretry = document.querySelectorAll('.retry-button');

gameManager = function(arg) {
	/*
	 * arg = 0 : First party initialisation.
	 * arg = 1 : Restart the app (return to the previous config).
	 * arg = 2 : Storage the data.
	 * arg = 3 : Second chance.
	 */
	var setStorage = function(A,B,C,a,b){
		window.localStorage.setItem("A", A);
		window.localStorage.setItem("B", B);
		window.localStorage.setItem("C", C);
		window.localStorage.setItem("a", a);
		window.localStorage.setItem("b", b);
	};
	var getStorage = function(){
		A = window.localStorage.getItem("A");
		B = window.localStorage.getItem("B"); 
		C = window.localStorage.getItem("C");
		a = window.localStorage.getItem("a");
		b = window.localStorage.getItem("b");
		return A,B,C,a,b;
	};
	if (arg == 0){
		Score = 0;
		F1c,F1a,F2c = readgenerator(file1,file2);
		A,B,C,a,b = dispose(F1c,F1a,F2c);
		Grid = [new Block(1, A, a), new Block(2, B, 1), new Block(3, C, b)]; // Initialisation
		display(Grid,classes1,classes2,classes3, inner1,inner2,inner3, wrapper1,wrapper2,wrapper3,0);
		setStorage(A,B,C,a,b);
	}
	else if (arg == 1){
		Score = window.localStorage.getItem("gameState");
		A,B,C,a,b = getStorage();
		Grid = [new Block(1, A, a), new Block(2, B, 1), new Block(3, C, b)]; // Initialisation
		display(Grid,classes1,classes2,classes3, inner1,inner2,inner3, wrapper1,wrapper2,wrapper3,0);
	}
	else if (arg == 2){
		setStorage(A,B,C,a,b);
	}
	else if (arg == 3){
		Score = Score - 10; if (Score -10 < 0){Score=0;}
		F1c,F1a,F2c = readgenerator(file1,file2);
		A,B,C,a,b = dispose(F1c,F1a,F2c);
		Grid = [new Block(1, A, a), new Block(2, B, 1), new Block(3, C, b)]; // Initialisation
		display(Grid,classes1,classes2,classes3, inner1,inner2,inner3, wrapper1,wrapper2,wrapper3,0);
		setStorage(A,B,C,a,b);
	}
};

scoreManage = function(refresh,score,sC,signe){
	/*
	 * refresh = 1 : First party and Pause.
	 * Signe = 1   : Choix correct.
	 * Signe = -1  : Choix incorrect.
	 * Signe = -10 : Nouvel essai.
	 */
	best = window.localStorage.getItem("bestScore");
	sC.textContent = score;

	if (refresh == 1){
		score = window.localStorage.getItem("gameState");
		if (score == null){window.localStorage.setItem("gameState", 0);}
		if (score!= null){sC.textContent = score;}
		if (best == null){window.localStorage.setItem("bestScore", 0);}
		else {bestContainer.textContent = window.localStorage.getItem("bestScore");}
	}
	else if (signe == 1 || signe == -1 || signe == -10) {
		addition.classList.add("score-addition");
		if (signe == 1) {addition.textContent = "+" + 1;}
		else if (signe == -1) {addition.textContent = "-" + window.localStorage.getItem("gameState");}
		else if (signe == -10) {addition.textContent = "-" + 10;}
		sC.appendChild(addition);
		window.localStorage.setItem("gameState", score);
	}
	
	if (score > best){window.localStorage.setItem("bestScore", score);}
	if (score == 256){winM();}	

	bestContainer.textContent = window.localStorage.getItem("bestScore");
};

screenM = function(){
	evenement.stop();
	var message = "-10 points?";
  	messageContainer.classList.add("restart-game");
  	messageContainer.getElementsByTagName("p")[0].textContent = message;
  	};
retryM = function(){
	evenement.start();
	messageContainer.classList.remove("restart-game");
	gameManager(3);scoreManage(0,Score,scoreContainer,-10);
};
cancelM = function(){evenement.start();messageContainer.classList.remove("restart-game");};
winM = function(){
	evenement.stop();
	messageContainer.classList.add("game-won");
	messageContainer.getElementsByTagName("p")[0].textContent = "You win!";
	};
continueM = function(){evenement.start();messageContainer.classList.remove("game-won");};
tryAgainM = function(){
	evenement.start();
	messageContainer.classList.remove("game-won");
	gameManager(0);scoreManage(0,Score,scoreContainer,-1);
	};


[].forEach.call(restart, function(el) {el.addEventListener('click', screenM , false);});
[].forEach.call(confirm, function(el) {el.addEventListener('click', retryM , false);});
[].forEach.call(cancel, function(el) {el.addEventListener('click', cancelM , false);});
[].forEach.call(keepGoing, function(el) {el.addEventListener('click', continueM , false);});
[].forEach.call(tryretry, function(el) {el.addEventListener('click', tryAgainM , false);});