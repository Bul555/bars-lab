/**
 * Результатом выполнения этих заданий будет набор некоторых математических функций.
 */


/**
 * Задание 0. Создать функцию multiply, перемножающаю два числа, 
 * переданных в качестве аргументов. Если переданные аргументы не являются
 * конечными числами, выбрасывать ошибку "Invalid arguments" 
 * (используйте throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 * 
 * @param {Number} a
 * Первое число для перемножения.
 * 
 * @param {Number} b
 * Второе число для перемножения (необязательный параметр).
 * 
 * @return {Number} Факториал числа.
 */

 function multiply(a, b){
 	
 	function isNumber(x){
 		return (typeof x === "number") && !isNaN(x) && isFinite(x);
 	}

 	if(arguments.length < 2){
 		throw new Error("Invalid arguments");
 	}

 	if(!isNumber(a) || !isNumber(b)){
 		throw new Error("Invalid arguments");
 	}

 	return a*b;
 }


/**
 * Задание 1. Создать функцию factorial для подсчета факториала. Функция в качестве параметра
 * принимает целое чило. Результатом выполнения будет факториал (произведение всех чисел,
 * начиная с 1 до самого числа включительно) этого числа.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * Число, для которого считается факториал.
 * 
 * @return {Number} факториал числа.
 */
 function factorial(n) {	
 	function isNumber(n){
 		return (typeof n === "number")
	}
	 
    if(!isNumber(n)){
 		throw new Error("Invalid arguments");
	}
 	return n? factorial(n-1)*n :1;
}
/**
 * Задание 2. Создать функцию nfib для подсчета n-го числа Фибоначчи
 * (http://ru.wikipedia.org/wiki/Числа_Фибоначчи)
 * Функция в качестве параметра принимает целое число n.
 * Результатом выполнения будет число Фибоначчи, порядковый номер которого равен n.
 *
 * @example
 * var fith = nfib(5); // 3 (числа Фибоначчи - 0 1 1 2 3 5...)
 *
 * @param {Number} n
 * Порядковый номер.
 *
 * @return {Number} Число Фибоначчи.
 */
function nfib(n) {
    var i, a = 0, b = 1;
    function isNumber(t){
 		return (typeof n === "number")
	}
	 
    if(!isNumber(n)){
 		throw new Error("Invalid arguments");
    }
	
    for (i = 1; i < n; i++) {
        b = a + (a = b);
    }
    return a;
}
