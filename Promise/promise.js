/**
 *
 * 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 * 
 * new Promise(executor);
 * new Promise(function(resolve, reject) { ... });
 * 	executor
 *  	带有 resolve 、reject两个参数的一个函数。
 *   	这个函数在创建Promise对象的时候会立即得到执行（在Promise构造函数返回Promise对象之前就会被执行），
 *   	并把成功回调函数（resolve）和失败回调函数（reject）作为参数传递进来。
 *    	调用成功回调函数（resolve）和失败回调函数（reject）会分别触发promise的成功或失败。
 *    	这个函数通常被用来执行一些异步操作，操作完成以后可以选择调用成功回调函数（resolve）来触发promise的成功状态，
 *    	或者，在出现错误的时候调用失败回调函数（reject）来触发promise的失败。

 */