// Rest parameters 와 arguments 객체 차이
// rest는 직접정의한 매개변수를 제외한 매개 변수들을 포함하고 arg는 함수에 전달되는 모든 매개변수 포함
function fun1() {
	console.log(arguments);
}
function fun2(...theArgs) {
	console.log(theArgs);
	console.log(theArgs.sort());
}
fun1(2, 6, 4);
fun2(2, 6, 4);
