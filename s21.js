// s.20 ES5 방식
function f (x, y) {
	var a = Array.prototype.slice.call(arguments, 2);
	return (x + y) * a.lenth;
};
console.log(f(1, 2, "hello", true, 7))
