function Vector(var _x, var _y){
	this.x = _x;
	this.y = _y;
}

Vector.prototype.plus = function(vector){
	return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector){
	return new Vector(this.x - vector.x, this.y - vector.y);
}

// Test
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// => Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// => Vector{x: -1, y: -1}
