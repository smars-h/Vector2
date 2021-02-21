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

# All Methods #
Add
```js
vec.add(x, y);
```

Subtract
```js
vec.sub(x, y);
```

Multiplcate
```js
vec.mult(x, y)
```

Divade
```js
vec.div(x, y)
```

Lenght
```js
vec.len()
```

Normalize
```js
vec.norm()
```

# License #
MIT 