var arr = []
for (var i = 0; i < 2; i++) {
  arr[i] = () => {
    console.log(i);
  }
}
// 两个函数在被调用的时候输出的都是全局变量i的值
// 这时候i已经是不满足循环条件而跳出循环的值 所以是2
arr[0]() // 2
arr[1]() // 2

let arr2 = []
for (let i = 0; i < 2; i++) {
  arr2[i] = () => {
    console.log(i);
  }
}
// 每次循环都会产生一个块级作用域的i
// 每个块级作用域的i的值都是不同的
arr2[0]() // 0
arr2[1]() // 1
