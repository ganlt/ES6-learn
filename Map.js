/**
 * Map数据结构，类似于对象，也是键值对的集合。不同的是键名可以是任意类型。
 * Map 的键实际上是跟内存地址绑定的，内存地址不同，则视为不同的键
 * 1. set方法：(key, value)向Map增加值，两个参数key，value，返回当前Map，因此可链式调用
 *    若对同一个key多次赋值，后面的值将会覆盖前面的值
 * 2. get方法：(key)获取Map的值，一个参数key
 *    若get一个未知的键，返回undefined
 *    只有对同一个对象的引用，Map 结构才将其视为同一个键
 * 3. has方法：(key)返回一个布尔值，表示该Map中是否含有该键名
 * 4. delete方法：(key)删除该Map中该键值对，返回一个布尔值，表示是否删除成功
 * 5. clear方法：()清空Map，没有返回值
 * 6. size属性：返回Map成员总数
 * 7. 初始化：可以接收一个数组作为参数，数组成员为一个个表示键值对的数组
 *    任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
 * 8. 遍历方法（Map的遍历顺序就是插入顺序）
 *    keys()：返回键名的遍历器
 *    values()：返回键值的遍历器
 *    entries()：返回所有成员的遍历器（默认遍历接口，Symbol.iterator属性）
 *    forEach()：遍历Map所有成员，forEach方法第一个参数为回调函数，实现遍历，还可以接受第二个参数，用来绑定this
 *    结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）
 * 9. Map转化为数组：扩展运算符(...)
 * 10. 数组转化为Map：将数组作为参数传给new Map()
 * 11. Map转化为对象：遍历再各个放入Object中，如果所有 Map 的键都是字符串，它可以无损地转为对象；如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。
 * 12. 对象转化为Map：遍历对象再set进Map
 * 13. Map转化为JSON：Map 的键名都是字符串则转为对象JSON：先转化为对象，再JSON.stringfy()；Map的键名有非字符串则转为数组JSON：JSON.stringfy([...map])
 * 14. JSON转化为Map：所有键名为字符串：JSON.parse();整个JSON就是一个数组，且每个数组成员本身，又是一个有两个成员的数组：Map转为数组JSON的逆操作
 */

const m = new Map();
const o = {
  p: 'Hello World'
};
m.set(o, 'content');
console.log(m.get(o)); // 'content'

console.log(m.has(o)); // true
m.delete(o);
console.log(m.has(o)); // false
m.set(['a'], 'sss')
console.log(m.get(['a'])) // undefined, 表面是针对同一个键，但这是两个不同的引用，内存地址是不同的

/**
 * WeakMap
 * 与Map类似，区别为
 * 1. 只接受对象作为键名，null除外
 * 2. WeakMap的键名指向的对象，不计入垃圾回收机制
 * 使用场景：如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap
 * 典型场合：DOM 节点作为键名；部署私有属性
 * 3. 没有遍历操作，没有size属性
 */