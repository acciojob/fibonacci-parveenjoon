
function fibonacci(num) {
// your code here 
	let fib = [];
	fib[1] = 0;
	fib[2] = 1;
	
	if(num > 2){

		for(let i=2; i<num; i++)
		{
			fib[i+1] = fib[i] + fib[i-1];
		}
		
	}

	return fib[num];
	
}
console.log(fibonacci(4));

module.exports = fibonacci;
