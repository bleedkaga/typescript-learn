// 继承接口
interface Shape {
    color: string;
}

interface Square extends Shape{
    sideLength: number;
}

let square = <Square>{}
square.color = 'blue';
square.sideLength = 10

//继承多个接口
// 一个接口可以继承多个就接口,创建出多个接口的合成接口
interface Shape2 {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square2 extends Shape, PenStroke{
    sideLength: number;
}

let square2 = <Square2>{};
square2.color = 'blue';
square2.sideLength = 10;
square2.penWidth = 5.0;
