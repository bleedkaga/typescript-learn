// 类类型
//  与C# 或java里接口的作用基本一样，TypeScript 也能够用他来明确的强制一个类去符合某种契约

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements  ClockInterface{
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number){

    }
}
