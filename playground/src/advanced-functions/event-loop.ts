async function run() {
  console.log('A')
  await Promise.resolve()
  console.log('B')
}

console.log('1')
run()
console.log('2')




