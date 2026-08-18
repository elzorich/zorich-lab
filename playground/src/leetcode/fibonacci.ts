function fib (n: number): number {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}


// Memoized fibonacci — O(n) time instead of O(φⁿ)
// Same recurrence, but check a cache before recomputing.

function fibMemo(n: number, memo = new Map<number, number>()): number {
  if(n <= 1) return n;


  if(memo.has(n)) {
    return memo.get(n)!;
  } else {
    let computed = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    memo.set(n, computed)
    return computed;
  }
}

console.time('memoized');
console.log(fibMemo(1000));
console.timeEnd('memoized');
