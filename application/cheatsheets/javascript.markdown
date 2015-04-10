---
layout: cheatsheet
---

https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md
http://james.padolsey.com/javascript/js-adolescence/
http://ejohn.org/apps/learn/

Javascript Shorthand Coding Techniques
=====

> My (@pongstr) opinion about shorthand coding techniques
>
> Shorthand code is not really a replacement for normal coding
> but it is very handy and useful in some cases. There are tons
> of opinions and debates around this but, again it all comes down
> what is necessary for your codebase and using it responsibly.

Table of Contents
---

1. [If true … else Shorthand](#if-true--else-shorthand)
2. [Null, Undefined, Empty Checks Shorthand](#null-undefined-empty-checks-shorthand)
3. [Object Array Notation Shorthand](#object-array-notation-shorthand)
4. [Associative Array Notation Shorthand](#associative-array-notation-shorthand)
5. [Declaring variables Shorthand](#declaring-variables-shorthand)
6. [Assignment Operators Shorthand](#assignment-operators-shorthand)
7. [RegExp Object Shorthand](#regexp-object-shorthand)
8. [If Presence Shorthand](#if-presence-shorthand)
9. [Function Variable Arguments Shorthand](#function-variable-arguments-shorthand)
10. [JavaScript foreach Loop Shorthand](#javascript-foreach-loop-shorthand)
11. [CharAt Shorthand](#chartat-shorthand)
12. [Comparison Returns](#comparison-returns)
13. [Short Function Calling](#short-function-calling)
14. [Switch Nightmare](#switch-nightmare)
15. [Decimal base exponents](#decimal-base-exponents)
16. [Short IF'z](#short-if---z)
17. [Lookup Tables Shorthand](#lookup-tables-shorthand)
18. [Double Bitwise](#double-bitwise)
19. [Suggest One?](#suggest-one)

### If true … else Shorthand

This is a great code saver for when you want to do something if the test is true,
else do something else by using the ternary operator.

```javascript
// Longhand
var big;

if (x > 10) {
  big = true;
} else {
  big = false;
}

// Shorthand
var big = (x > 10) ? true : false;
```

If you rely on some of the weak typing characteristics of JavaScript, this can
also achieve more concise code. For example, you could reduce the preceding code
fragment to this:

```javascript
var big = (x > 10);

//further nested examples
var x = 3,
big = (x > 10) ? 'greater 10' : (x < 5) ? 'less 5' : 'between 5 and 10';

console.log(big); // "less 5"

var x = 20,
big = { true: x > 10, false : x< =10 };

console.log(big); // "Object {true=true, false=false}"
```

[&uarr; Back to top](#table-of-contents)

-----

### Null, Undefined, Empty Checks Shorthand

When creating new variables sometimes you want to check if the variable your
referencing for it’s value isn’t null or undefined. I would say this is a very
common check for JavaScript coders.

```javascript
// Longhand
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
  var variable2 = variable1;
}

// Shorthand
var variable2 = variable1  || '';

// Browser Test:
//null value example
var variable1 = null,
variable2 = variable1  || '';

console.log(variable2); // output: '' (an empty string)

//undefined value example
var variable1 = undefined,
variable2 = variable1  || '';

console.log(variable2); // output: '' (an empty string)

//normal value example
var variable1 = 'hi there',
variable2 = variable1  || '';

console.log(variable2); // output: 'hi there'
```

[&uarr; Back to top](#table-of-contents)

-----

### Object Array Notation Shorthand

Useful way of declaring small arrays on one line.

```javascript
// Longhand
var a    = new Array();
a[0] = 'myString1';
a[1] = 'myString2';
a[2] = 'myString3';

// Shorthand
var a = ['myString1', 'myString2', 'myString3'];
```

[&uarr; Back to top](#table-of-contents)

-----

### Associative Array Notation Shorthand

The old school way of setting up an array was to create a named array and then
add each named element one by one. A quicker and more readable way is to add
the elements at the same time using the object literal notation. Please note
that Associative Array are essentially JavaScript Objects with properties.

```javascript
// Longhand
var skillSet = new Array();
skillSet['Document language'] = 'HTML5';
skillSet['Styling language'] = 'CSS3';
skillSet['Javascript library'] = 'jQuery';
skillSet['Other'] = 'Usability and accessibility';

// Shorthand
// Don’t forget to omit the final comma otherwise certain
// browsers will complain (not naming any names, IE).
var skillSet = {
  'Document language': 'HTML5',
  'Styling language': 'CSS3',
  'Javascript library': 'jQuery',
  'Other': 'Usability and accessibility'
};
```

[&uarr; Back to top](#table-of-contents)

-----

### Declaring variables Shorthand

It is sometimes good practice to including variable assignments at the beginning
of your functions. This shorthand method can save you lots of time and space
when declaring multiple variables at the same time.

```javascript
// Longhand
var x;
var y;
var z = 3;

// Shorthand
var x, y, z = 3;

// or
var x,
    y,
    z = 3;
```

[&uarr; Back to top](#table-of-contents)

-----

### Assignment Operators Shorthand

Assignment operators are used to assign values to JavaScript variables and no
doubt you use arithmetic everyday without thinking (no matter what programming
language you use Java, PHP, C++ it’s essentially the same principle).

```javascript
// Longhand
x = x + 1;
minusCount = minusCount - 1;
y = y * 10;

// Shorthand
x++;
minusCount --;
y * = 10;
```

[&uarr; Back to top](#table-of-contents)

-----

### RegExp Object Shorthand

Example to avoid using the RegExp object.

```javascript
// Longhand
var regex  = new RegExp('\d+(.)+\d+','igm'),
    result = regex.exec('padding 01234 text text 56789 padding');

    console.log(result); // '01234 text text 56789'

// Shorthand
var result = /d+(.)+d+/igm.exec('padding 01234 text text 56789 padding');

  console.log(result); // '01234 text text 56789'
```

[&uarr; Back to top](#table-of-contents)

-----

### If Presence Shorthand

This might be trivial, but worth a mention. When doing “if checks” assignment
operators can sometimes be ommited.

```javascript
// Longhand
if (likeJavaScript === true)

// Shorthand
if (likeJavaScript)

// Other Examples:
// If 'a' is NOT equal to true, then do something.
// Longhand
var a;

  if (a !== true) {
    // do something...
  }

// Shorthand
var a;

  if (!a) {
    // do something...
  }
```

[&uarr; Back to top](#table-of-contents)

-----

### Function Variable Arguments Shorthand

Object literal shorthand can take a little getting used to, but seasoned developers
usually prefer it over a series of nested functions and variables. You can argue
which technique is shorter, but I enjoy using object literal notation as a clean
substitute to functions as constructors.

```javascript
// Longhand
function myFunction(myString, myNumber, myObject, myArray, myBoolean) {
  // do something...
}

myFunction('String', 1, [], {}, true);

// Shorthand

function myFunction() {
  for (i = 0; i < arguments.length; i++) {
    console.log( typeof arguments[i] ); // Returns string, number, object, object, boolean
  }
}

myFunction('String', 1, [], {}, true);
```

[&uarr; Back to top](#table-of-contents)

-----

### JavaScript foreach Loop Shorthand

This little tip is really useful if you want plain JavaScript and hence can’t
use jQuery `$.each` or `Array.forEach()`.

```javascript
// Longhand
for (var i = 0; i < allImgs.length; i++)

// Shorthand
for (var i in allImgs)

// Shorthand for Array.forEach
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

[2, 5, 9].forEach(logArrayElements);
// logs: a[0] = 2, a[1] = 5, a[2] = 9
```

### CharAt Shorthand

You can use the eval() function to do this but this bracket notation shorthand
technique is much cleaner than an evaluation, and you will win the praise of
colleagues who once scoffed at your amateur coding abilities!

```javascript
// Longhand
'myString'.charAt(0);

// Shorthand
'myString'[0]; // returns 'm'
```

[&uarr; Back to top](#table-of-contents)

-----

### Comparison Returns

We’re no longer relying on the less reliable == as !(ret == undefined) could be
rewritten as !(ret) to take advantage of the fact that in an or expression,
ret (if undefined or false) will skip to the next condition and use it instead.
This allows us to trim down our 5 lines of code into fewer characters and it’s
once again, a lot more readable.

```javascript
// Longhand
if (!(ret == undefined)) {
 return ret;
} else{
 return fum('g2g');
}

// Shorthand
return ret || fum('g2g');
```

[&uarr; Back to top](#table-of-contents)

-----

### Short Function Calling

Just like #1 you can use ternary operators to make function calling shorthand
based on a conditional.

```javascript
// Longhand
function x () {
  console.log('x');
};

function y () {
  console.log('y');
};

var z = 3;
if (z == 3) {
  x();
} else {
  y();
}

// Shorthand
(z === 3 ? x:y)();
```

[&uarr; Back to top](#table-of-contents)

-----

### Switch Nightmare

Everyone loves switch statements, *cough*. Here is how you might avoid switch
case syndrome.

```javascript
// Longhand
switch (something) {
  case 1:
    doX();
  break;

  case 2:
    doY();
  break;

  case 3:
    doN();
  break;
  // And so on...
}

// Shorthand
var cases = {
  1: doX,
  2: doY,
  3: doN
};

cases[something] && cases[something]();
```

[&uarr; Back to top](#table-of-contents)

-----

### Decimal base exponents

You may have seen this one around it’s essentially a fancy way to write without
the zeros. 1e7 essentially means 1 followed by 7 zeros – it represents a decimal
base (JS interprets as a float type) equal to 10,000,000.

```javascript
// Longhand
for (var i = 0; i < 10000; i++) { ... }

// Shorthand
for (var i = 0; i < 1e7; i++) {
```

You can use 1 and 0 to represent true and false. I’ve seen this used in
JavaScript game development in shorthand while loops. Note that if you use the
negative start your array may be in reverse. You can also use `while(i++ < 10)`
and you don’t have to add the `i++` later on inside the while.

```javascript
// Longhand
var i=0;
while (i&lt;9) {
  //do stuff
  i++; //say
}

// Shorthand
var i=9;

// goes until i=0
while(i--) { ... }
 
// or

var i = -9;
// goes until i=0
while (i++) { ... }
```

[&uarr; Back to top](#table-of-contents)

-----

### Short IF'z

If you have mutiple IF variable value comparisons you can simply ass them to
an array and check for presence. You could use $.inArray as an alternative.

```javascript
// Longhand
if(myvar == 1 || myvar == 5 || myvar == 7 || myvar == 22)  {
  console.log('ya');
}

// Shorthand
([1,5,7,22].indexOf(myvar) !=- 1) && alert('yeah baby!');
```

[&uarr; Back to top](#table-of-contents)

-----

### Lookup Tables Shorthand

If you have code that behaves differently based on the value of a property, it
can often result in conditional statements with multiple else ifs or a switch
cases. You may prefer to use a lookup table if there is more than two options
(even a switch statement looks ugly!).

```javascript
// Longhand
if (type === 'aligator') {
  aligatorBehavior();
}
else if (type === 'parrot') {
  parrotBehavior();
}
else if (type === 'dolphin') {
  dolphinBehavior();
}
else if (type === 'bulldog') {
  bulldogBehavior();
} else {
  throw new Error('Invalid animal ' + type);
}

// Shorthand
var types = {
  aligator: aligatorBehavior,
  parrot: parrotBehavior,
  dolphin: dolphinBehavior,
  bulldog: bulldogBehavior
};
 
var func = types[type];
(!func) && throw new Error('Invalid animal ' + type); func();
```

[&uarr; Back to top](#table-of-contents)

-----

### Double Bitwise

The double bitwise trick provides us with some pretty nifty shorthand tricks.
Read more about it here: [Double bitwise NOT (~~)](http://james.padolsey.com/javascript/double-bitwise-not/).

```javascript
// Longhand
Math.floor(4.9) === 4  // true

// Shorthand
~~4.9 === 4  // true
```

### Suggest one?

Suggest a JS coding technique maybe? Please add to the comments

- Code examples (longhand and shorthand)
- Little description when it's useful, cautions and stuff like that
- Link (if you got it from a website and author)

Thanks!
