// ---- Fonctions :
check = function(block_middle,block_ext){
	if (block_middle.match == block_ext.match){return true;}
	else {return false;}
};
change = function(result,block) {
	// result = 1 (vrai), 0 (faux)
	if (result == 1) {
			F1c,F1a,F2c,F2a = readgenerator(file1,file2);
			A,B,C,a,b = dispose(F1c,F1a,F2c,F2a);
		return [new block(1, A, a), new block(2, B, 1), new block(3, C, b)];
	}
	else if (result == 0) {
		return [new block(1, A, a), new block(2, B, 1), new block(3, C, b)];
	}
};
display = function(grid,c1,c2,c3, i1,i2,i3, w1,w2,w3, style) {
	color = [2,4,8,16,32,64,128];
	i = color[Math.floor(Math.random()*7)];
	j = color[Math.floor(Math.random()*7)];
	k = color[Math.floor(Math.random()*7)];
	c1 = ["tile", "tile-" + i, "tile-position-" + grid[0].position + "-" + 1];
	c2 = ["tile", "tile-" + j, "tile-position-" + grid[1].position + "-" + 1];
	c3 = ["tile", "tile-" + k, "tile-position-" + grid[2].position + "-" + 1];
	if (style == 0){
		c1.push("tile-new");
		c2.push("tile-new");
		c3.push("tile-new");
	}
	else if (style == 1){
		c1.push("tile-merged");
	}
	else if (style == 2){
		c3.push("tile-merged");
	}
	i1.textContent = grid[0].value;
	i2.textContent = grid[1].value;
	i3.textContent = grid[2].value;

	w1.setAttribute("class", c1.join(" "));
	w2.setAttribute("class", c2.join(" "));
	w3.setAttribute("class", c3.join(" "));
	w1.appendChild(i1);
	w2.appendChild(i2);
	w3.appendChild(i3);
	tileContainer.appendChild(w1);
	tileContainer.appendChild(w2);
	tileContainer.appendChild(w3);

}; 