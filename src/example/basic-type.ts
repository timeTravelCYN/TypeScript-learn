// 布尔类型
// let bool: boolean = false;
let bool: boolean
bool = true
// bool = 123 不可以改变类型

// 数值类型 js、ts 所有的数字类型都是浮点类型，没有 int
let num: number = 123
num = 0b1111011 // 二进制
num = 0o173 // 八进制
num = 0x7b // 十六进制

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
console.log(str)

// 数组类型
// [1, 2, 3]
// 写法1
let arr: number[]
arr = [ 5 ]
// 写法2
let arr2: Array<number>
let arr3: (string | number )[]
arr3 = [1, '2']
let arr4: Array<string | number>
arr4 = [1, '2']

// 元祖类型
let tuple: [string, number, boolean]
tuple = ['1', 2, true]
// tuple = [2, '1', false] 必须按照顺序来，且个数相同

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN = 3,
  USER
}
/**
 * 编译后
 * https://www.typescriptlang.org/play/index.html
var Roles;
(function (Roles) {
    Roles[Roles["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Roles[Roles["ADMIN"] = 3] = "ADMIN";
    Roles[Roles["USER"] = 4] = "USER";
})(Roles || (Roles = {}));
 */
console.log(Roles)
console.log(Roles.SUPER_ADMIN)
console.log(Roles.ADMIN)
// if (roles === Roles.SUPER_ADMIN) {} 当角色是超级管理员的时候，do。。。

// any 类型 不用，少用
let value: any
value = 'abc'
value = 123
value = false
const arr5: any[] = [1, '2', true, [1, 2, 3]]

// void 类型
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
// v = null 
console.log(consoleText("123"));

// null 和 undefined
let u: undefined
u = undefined
// u = 123
let n: null
n = null
// n = 'abc'

// never 类型 
/**
 * 抛错、不可能有返回值(死循环) 返回值类型就是 never
 * never 是任意类型的子类型，没有任何类型是 never 的子类型
 */
const errorFunc = (message: string): never => {
  throw new Error(message)
}

const infiniteFunc = (): never => {
  while(true) {}
}

// let neverVariable = (() => {
//   while(true) {}
// })()

// object
let obj = {
  name: 'cyn'
}
let obj2 = obj
obj2.name = 'lbb'

function getObject(obj: object): void {
  console.log(obj)
}
getObject({name: 'cyn'})

// 类型断言
const getLength = target => {
  if (target.length || target.length === 0) {
    return target.length
  }
}