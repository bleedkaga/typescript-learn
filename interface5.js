/*
*   TypeScript 具有 ReadonlyArray<T> 类型，他与 Array<T> 类型相似，只是把所有可变方法去掉了，因此
*   可以确保数组创建后再也不能被修改
*
* */
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; //error
ro.push(5); // error
ro.length = 100; // error
a = ro; // error
a = ro;
