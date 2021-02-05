LR = function(lr) {
	// -1 : left; +1 : right
	if (lr == -1){w=1;x=0;y=1;z=0;} else if (lr == 1){w=0;x=1;y=2;z=2;}
	for ( i = 0; i <= 2; i++) {
		Grid[i].move(w, x);
	}
	display(Grid, classes1, classes2, classes3, inner1, inner2, inner3, wrapper1, wrapper2, wrapper3, y);
	link = check(Grid[1], Grid[z]);
	setTimeout(function() {gameContainer.style.background = link ? "#009900" : "#CC0000";}, 333);
	setTimeout(function() {
		if (link) {
			Score++;
			scoreManage(0, Score, scoreContainer, 1);
			Grid = change(1, Block);
			gameManager(2);
			display(Grid, classes1, classes2, classes3, inner1, inner2, inner3, wrapper1, wrapper2, wrapper3, 0);
		} else {
			Score = 0;
			scoreManage(0, Score, scoreContainer, -1);
			Grid = change(0, Block);
			gameManager(2);
			display(Grid, classes1, classes2, classes3, inner1, inner2, inner3, wrapper1, wrapper2, wrapper3, 0);
		}
		gameContainer.style.background = "#A0BBBB";
	}, 500);
}; 

