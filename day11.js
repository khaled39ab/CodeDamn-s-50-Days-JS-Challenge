// Problem
// Return the N-th value of the Fibonacci sequence
// Return the N-th value of the Fibonacci sequence
// function fibonacci(n) returns the N-th value of the Fibonacci sequence

function fibonacci(n) {
	// write your solution here
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib [i] = fib [i- 1] + fib [i - 2];
    }
	return fib.pop();
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)