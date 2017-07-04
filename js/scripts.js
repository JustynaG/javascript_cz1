var name = prompt('Enter your name');

// komentarz liniowy
alert('Hello, ' + name);

/*
komentarz 
blokowy 
*/
console.log('Hello, ' + name);

var a = 5;
var b = 7;
var	triangleArea = a * b / 2;

console.log('Triangle field with base a: ' + a + ' and height h: ' + b + ' is equal to: ' + triangleArea);

alert(triangleArea);


var value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value == 0) {
	console.log('Wartość = 0');
} else { 
	console.log((value > 0) ? 'Wartość dodatnia' : 'Wartość ujemna');
}