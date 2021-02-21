const Vector = function (x, y) {
    this.x = x || 0
    this.y = y || 0
}

Vector.prototype.add = function (n, j) {
    if (n instanceof Vector) {
        return new Vector(this.x + n.x, this.y + n.y);
    } else {
        return new Vector(this.x + n, this.y + j);
    }
}

Vector.prototype.sub = function (n, j) {
    if (n instanceof Vector) {
        return new Vector(this.x - n.x, this.y - n.y);
    } else {
        return new Vector(this.y - n, this.y - j);
    }
}

Vector.prototype.mult = function (n, j) {
    if (n instanceof Vector) {
        return new Vector(this.x * n.x, this.y * n.y);
    } else {
        return new Vector(this.y * n, this.y * j);
    }
}

Vector.prototype.div = function (n, j) {
    if (n instanceof Vector) {
        return new Vector(this.x / n.x, this.y / n.y);
    } else {
        return new Vector(this.y / n, this.y / j); 
    }
}
