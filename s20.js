// 나머지 매개변수
function f (x, y, ...a) {
	return (x + y) * a.lenth;
}
console.log(f(1, 2)); // 0
console.log(f(1, 2, "hello", true, 7)); // 9
