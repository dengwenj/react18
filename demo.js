setTimeout(() => {
  console.log(1)
}, 1000)
console.log(2)

process.nextTick(() => {
  console.log(3)
})

new Promise((resolve, reject) => {
  resolve()
}).then(() => {
  console.log(4)
})
