function fibonacci(num, memo = {}) {
    if (num in memo) {
        return memo[num];
    }
    if (num === 0) return 0;
    if (num === 1) return 1;
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    return memo[num];
}

module.exports = fibonacci;