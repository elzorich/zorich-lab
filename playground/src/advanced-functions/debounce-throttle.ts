// Debounce — fires only after the user stops calling it for `delay` ms
// Use case: search input — wait until user stops typing before sending a request
//
// How it works:
// - each call resets the timer
// - the function only runs if no new call comes in within `delay` ms

function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timer)
    timer = setTimeout(() => func.call(this, ...args), delay)
  }
}

// Throttle — fires at most once per `limit` ms, no matter how many calls come in
// Use case: scroll or resize handler — run max once per 200ms
//
// How it works:
// - first call fires immediately
// - subsequent calls within `limit` ms are ignored
// - after `limit` ms, the next call fires again
//
// TODO: implement
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  // hint: you need a boolean flag here

}


// --- Usage examples (open browser console to see output) ---

const log = (msg: string) => console.log(`[${new Date().toISOString().slice(11, 23)}] ${msg}`)

// Debounce test — simulate user typing: 5 rapid calls, only last one should fire
const debouncedLog = debounce(log, 300)
debouncedLog('typing a')
debouncedLog('typing ab')
debouncedLog('typing abc')
debouncedLog('typing abcd')
debouncedLog('typing wwwww')
// expected: only "typing abcde" logs, after 300ms pause

// Throttle test — uncomment after implementing throttle
// const throttledLog = throttle(log, 300)
// throttledLog('scroll 1')
// throttledLog('scroll 2')
// throttledLog('scroll 3')
// throttledLog('scroll 4')
// throttledLog('scroll 5')
// expected: only "scroll 1" logs immediately, rest are dropped within the 300ms window

export { debounce, throttle }
