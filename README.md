# vector2 # 
vector2 is vector calculator

# Usage / Installation #
You can install vector2 using npm 
```
npm i @smarsh1/vector2
```

# Example #
```js
const Vector = require('@smarsh1/vector2');

let vec = new Vector(2, 3);

console.log(vec.add(5, 6));

// expected output: 7, 9 
```

# Documentation #

Constructor
```js
const Vector = new Vector2(x, y) 
```

Add
```js
add(x, y);
// 
add(otherVector);
```

Subtract
```js
sub(x, y);
//
sub(otherVector);
```

Multiplcate
```js
multi(x, y);
//
multi(otherVector);
```

Divade
```js
div(x, y)
//
div(otherVector)
```

Lenght
```js
len()
```

Normalize
```js
norm()
```

# License #
MIT 