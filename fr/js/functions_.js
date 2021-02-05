// Sous fonctions :
readgenerator = function(fa,fb) {
	// Paliers
	alea = Math.random();
	if (Score < 10){
		LVL = alea > 0.05 ? 0 : 1;
		N = alea > 0.05 ? 128 : 835;}
	else if (Score >= 10 && Score < 20 ) {
		LVL = alea > 0.1 ? 0 : 1;
		N = alea > 0.1 ? 128 : 835;}
	else if (Score >= 20 && Score < 30 ) {
		LVL = alea > 0.2 ? 0 : 1;
		N = alea > 0.2 ? 128 : 835;}
	else if (Score >= 30 && Score < 40 ) {
		LVL = alea > 0.3 ? 0 : 1;
		N = alea > 0.3 ? 128 : 835;}
	else if (Score >= 40 && Score < 50 ) {
		LVL = alea > 0.4 ? 0 : 1;
		N = alea > 0.4 ? 128 : 835;}
	else if (Score >= 50 && Score < 60 ) {
		LVL = alea > 0.5 ? 0 : 1;
		N = alea > 0.5 ? 128 : 835;}
	else if (Score >= 60 && Score < 70 ) {
		LVL = alea > 0.6 ? 0 : 1;
		N = alea > 0.6 ? 128 : 835;}
	else if (Score >= 70 && Score < 80 ) {
		LVL = alea > 0.7 ? 0 : 1;
		N = alea > 0.7 ? 128 : 835;}
	else if (Score >= 80 && Score < 90 ) {
		LVL = alea > 0.8 ? 0 : 1;
		N = alea > 0.8 ? 128 : 835;}
	else if (Score >= 90 && Score < 100 ) {
		LVL = alea > 0.9 ? 0 : 1;
		N = alea > 0.9 ? 128 : 835;}
	else{
		LVL = 1;
		N = 835;}
	fa = ajax(LVL,Math.floor((Math.random() * N)+1),Math.floor((Math.random() * 256))); fa = fa.split(";");
	fb = ajax(LVL,Math.floor((Math.random() * N)+1),Math.floor((Math.random() * 256))); fb = fb.split(";");
	F1c = fa[0];
	F1a = fa[1];
	F2c = fb[0];
	return F1c,F1a,F2c;
};

dispose = function(v1,v2,f3){
	a = Math.random() < 0.5 ? 0 : 1;
	b = 1 - a ;
	if(a==1){
		A= v1;
		B= v2;
		C= f3;
	}
	else if(a==0){
		A= f3;
		B= v2;
		C= v1;
	}
	return A,B,C,a,b;
};
