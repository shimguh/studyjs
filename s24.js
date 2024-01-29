// 항상 배열로 반환
function f(a, b, ...rest) {
	console.log(a, b, rest);
}
f(1, 2, 3);
