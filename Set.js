/**
 * Set数据结构，类似于数组。成员的值是唯一的，没有重复的值。
 * 1. add方法：向Set结构加入成员，返回Set成员本身;
 *    向set加入值时，不会发生类型转换；
 *    使用===判断是否相等，NaN会被判断为等于自身，两个对象总不相等（即使为空）。
 * 2. new Set([])初始化：可以接受一个数组（或者具有iterable接口的其他数据结构）作为参数
 * 3. size：Set实例的成员总数，即Set返回的数组长度
 * 4. delete方法：删除某个值，返回一个布尔值，表示是否删除成功
 * 5. has方法：返回一个布尔值，表示该值是否为Set的成员。
 * 6. clear方法：清除所有成员，没有返回值
 * 7. 使用Array.from方法可以将Set结构转为数组
 * 8. keys()：返回键名的遍历器
 * 9. values()：返回键值的遍历器，由于Set没有键名，只有键值，和keys方法行为一致
 * 10. entries()：返回键值对的遍历器
 * 11. forEach()：使用回调函数遍历每个成员，回调函数的参数value，key即为键名和键值，因此一致；还可以有一个参数，表示绑定函数内部的this对象。
 * 12. 循环遍历Set：直接用for ... of 方法
 */
// 数组去重：
// 1. 使用let s = new Set(), 调用add方法，返回[...s]
// 2. 使用Array.from(new Set())
const arr = [2, 3, 5, 6, 2, 4, 5];
const s = new Set();

arr.forEach(num => {
  s.add(num)
})
for (let x of s) {
  console.log(x)
}

s.delete(3) // true
s.has(3) // false
console.log(s) // Set { 2, 3, 5, 6, 4 }
console.log([...s]) // [ 2, 3, 5, 6, 4 ]
console.log(s.size) // 5
s.clear()
console.log(s) // Set {}
console.log([...s]) // []
console.log(s.size) // 0

/**
 * WeakSet
 * 与Set结构类似，也是不能重复的值，但是成员只能是对象，不能是其他类型
 * WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息
 * 与Set不同的是，没有clear方法，没有size属性不能遍历
 */
