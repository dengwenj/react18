// setTimeout(() => {
//   console.log(1)
// }, 1000)
// console.log(2)

// process.nextTick(() => {
//   console.log(3)
// })

// new Promise((resolve, reject) => {
//   resolve()
// }).then(() => {
//   console.log(4)
// })
let baseArray = [1, 2, 3, 4, 5, 6, 7, 8];
let len = baseArray.length;
let n = 4; //假设每行显示4个
let lineNum = len % n === 0 ? len / n : Math.floor( (len / n) + 1 );
let res = [];
for (let i = 0; i < lineNum; i++) {
  // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
  let temp = baseArray.slice(i*n, i*n+n);
  res.push(temp);
}
console.log(res);
