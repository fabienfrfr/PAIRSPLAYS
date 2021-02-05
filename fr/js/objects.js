// ---- Objets :
function Block(position, value, match) {
	this.position = position;
	this.value = value;
	this.match = match;

	// Methodes :
	this.move = function(left, right) {
		if (left == 1 && right == 0) {
			if (this.position == 1) {
				this.position = position;
			} else {
				this.position = position - 1;
			}
		} else if (right == 1 && left == 0) {
			if (this.position == 3) {
				this.position = position;
			} else {
				this.position = position + 1;
			}
		}
	};
}