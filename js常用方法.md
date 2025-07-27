## 一、JavaScript 数据类型及转换
### 数据类型
- 在 JavaScript 中有 6 种不同的数据类型：string, number, boolean,symbol, null, undefined
多种对象类型：Object, Array, Function, Date, RegExp, Map, Set
- typeof 返回数据类型。constructor 返回构造函数。
- 请注意：
  - NaN 的数据类型是 number
  - 数组(Array)，日期(Date)，null 的数据类型都是 object
  - 未定义变量的数据类型为 undefined
### JavaScript 类型转换
- 将数字**转换为字符串String()**
- 将日期转换为字符串Date()
- 将字符串**转换为数字Number()**
  - 字符串包含数字(如 "3.14") 转换为数字 (如 3.14).
  - 空字符串转换为 0。
  - 其他的字符串会转换为 NaN (不是个数字)。
## 二、js函数
### （一）字符串 string
1. localeCompare比较字典序
if(res==""||cur.localeCompare(res)<0){//cur比res小
  res = cur;
}
2. 返回字符串的Unicode编码
"HELLO WORLD".charCodeAt(0) -> H的Unicode值=72

### （二）数组 Array
```javascript
let res = new Array(nums.length);
let res = new Array(nums.length).map(() => new Array(nums.length));
```
1. 添加末位 push()；concat()不改变原数组**
* push：[1, [2, 3]]
  ```javascript
  res.push(preorderTraversal(root.left)); // 将数组作为单个元素添加
  ```
* concat：[1, 2, 3]
```javascript
  res = res.concat(preorderTraversal(root.left));
  ```
2. 移除首位shift()；添加首位unshift()
3. slice(begin, end)保留指定位数，不改变原数组
4. splice(start,deleteCount?,item?)
5. join(char)
6. sort()
7. reverse()
8. forEach(function(currentValue，index?,array?),thisValue?)
9. map(function(currentValue，index?,array?),thisValue?)
10. filter(function(currentValue,index,arr), thisValue)
11. every(function(currentValue,index,arr), thisValue)测试一个数组内的所有元素是否都能通过某个指定函数的测试。返回一个布尔值。
12. some(function(currentValue,index,arr), thisValue)
测试数组中是不是至少有1个元素通过了被提供的函数测试。
返回一个布尔值。
1.  find(function(currentValue,index,arr), thisValue)
返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined。
1.  flat(depth?)
递归提取数组，不改变原数组
```javascript
arr2 =  [0, 1, 2, [[[3, 4]]]]
console.log(arr2.flat(2));
// log: [0, 1, 2, [3, 4]]
```
1.  reduce(callbackFn, initialValue)**
每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
不改变数组，但是作为 callbackFn 提供的函数可能会改变数组。
### （三）映射 Map()
1. set(key, value)添加
2. get(key)寻找
3. has(key)确认是否存在
4. delete(key)删除
### （四）集合 Set()
1. add(value)添加
2. has(value)确认是否存在
3. delete(value)删除
4. clear()清除
### 函数声明:
使用 function 关键字。
可以在定义之前调用（函数提升）。
```javascript
function add(a, b) {
  return a + b;
}
```
### 函数表达式(常用):
使用 function 关键字。
函数作为表达式的一部分，赋值给变量。
不能在定义之前调用。
```javascript
const add = function(a, b) {
  return a + b;
};
```
### 箭头函数:
没有 function 关键字。
不绑定 this。
```javascript
const add = (a, b) => a + b;
```
### 方法定义:
用于对象字面量或类中定义的方法。
不使用 function 关键字。
```javascript
const obj = {
  add(a, b) {
    return a + b;
  }
};
```

## 不能这样写let fast, slow=0
在这种情况下，let fast, slow = 0; 并不会将 fast 初始化为 0。它实际上只初始化了 slow，而 fast 只是被声明了，但没有被赋值，因此其初始值是 undefined。
