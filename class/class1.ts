//类 （Class）
/* intro: 传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，以为他们使用的是基于类的继承并且对象是由类构建出来的。
从ECMAScript 2015， 也就是ECMAScript 6开始，JavaScript 程序员能够使用基于类的面向对象方式。使用TypeScript， 我们允许开发者现在就使用这些特性，并且编译过后的JavaScript可以在所有的主流浏览器中运行
，而不需要等到下个JavaScript版本
*/

// class example 1:
class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return `hello, ${this.greeting}`
    }
}

let greeter = new Greeter("world");
