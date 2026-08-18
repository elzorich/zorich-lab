function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }

}

const log = (msg) => console.log(`[${new Date().toISOString().slice(11, 23)}] ${msg}`);

const debouncedLog = debounce(log, 300);

debouncedLog('call 1');
debouncedLog('call 2');
debouncedLog('call 3');