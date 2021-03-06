const Vector = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Vector.prototype.add = function (n, j = n) {
    if (n instanceof Vector) {
        return new Vector(this.x + n.x, this.y + n.y);
    } else {
        return new Vector(this.x + n, this.y + j);
    }
};

Vector.prototype.sub = function (n, j = n) {
    if (n instanceof Vector) {
        return new Vector(this.x - n.x, this.y - n.y);
    } else {
        return new Vector(this.x - n, this.y - j);
    }
};

Vector.prototype.mult = function (n, j = n) {
    if (n instanceof Vector) {
        return new Vector(this.x * n.x, this.y * n.y);
    } else {
        return new Vector(this.x * n, this.y * j);
    }
};

Vector.prototype.div = function (n, j = n) {
    if (n instanceof Vector) {
        return new Vector(this.x / n.x, this.y / n.y);
    } else {
        return new Vector(this.x / n, this.y / j);
    }
};

Vector.prototype.len = function () {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
};

Vector.prototype.norm = function () {
    return this.div(this.len());
};

module.exports = Vector;