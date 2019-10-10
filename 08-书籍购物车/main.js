/*
 * @Description: 
 * @version: 
 * @Author: henggao
 * @Date: 2019-10-09 17:41:39
 * @LastEditors: henggao
 * @LastEditTime: 2019-10-09 22:24:10
 */
const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《Java Web》',
                date: '2006-9',
                price: 59.00,
                count: 1
            },
            {
                id: 2,
                name: '《Spring Boot》',
                date: '2016-9',
                price: 69.00,
                count: 1
            },
            {
                id: 3,
                name: '《JavaScript》',
                date: '2010-9',
                price: 49.00,
                count: 1
            },
            {
                id: 4,
                name: '《Hadoop》',
                date: '2016-9',
                price: 99.00,
                count: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price){
        //     return '￥' + price.toFixed(2)
        // }
        increment(index) {
            // console.log('increment' + index);
            this.books[index].count++

        },
        decrement(index) {
            // console.log('decrement '+  index);
            this.books[index].count--

        },
        // 移除按钮
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {

            let totalPrice = 0
            
            // 1. 普通的for循环
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice +=this.books[i].price * this.books[i].count
            // }
            // return totalPrice

            // 2. for(let i in  this.books)
            // for(let i in this.books){
            //     // console.log(i);
            //     totalPrice +=this.books[i].price * this.books[i].count
            // }
            // return totalPrice

            // 3. for(let i of this.books)
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            // return totalPrice

            // 4. reduce 数组高阶函数
            return this.books.reduce(function(preValue, book){
                return preValue + book.price * book.count
            },0)

        }
    },
    filters: { //过滤器
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
})



// 编程范式：命令式编程/声明式编程
// 编程范式： 面向对象编程(第一公民；对象)/函数式编程(第一公民:函数)
// 数组高阶函数例子 filter/map/reduce
const nums = [20,40,23,80,100,156,188]
// 1.filter函数
// filter中的回调函数有一个要求：必须返回一个boolean值
// true: 当返回值为true时，函数内部会自动将这次回调的n加入新的数组
// false:当返回值为false时，函数内部会过滤掉这次的n
let newNums =  nums.filter(function(n){
return n < 100
})
console.log(newNums); //20, 40, 23, 80

// 2.map函数
let new2Nums = newNums.map(function(n){
    return n * 2
})
console.log(new2Nums) //40, 80, 46, 160

// 3.reduce函数
// reduce作用多数组中所有的内容进行汇总
let total= new2Nums.reduce(function(preValue, n ){
    return preValue + n
},0)
console.log(total)
// 第一次: preValue 0  n 40
// 第一次: preValue 40  n 80
// 第一次: preValue 120  n 46
// 第一次: preValue 166  n 160
// 326

// filter/map/reduce结合起来
let total1 = nums.filter(function(n){
    return n <100
}).map(function(n){
    return n * 2
}).reduce(function(preValue ,n){
    return preValue + n
},0)
console.log(total1)

// 换一种方法(箭头函数)
let total2 = nums.filter(n => n < 100).map(n => n *2).reduce((pre,n) => pre + n );
console.log(total2)