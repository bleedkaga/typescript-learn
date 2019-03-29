// 混合类型
interface Counter {
    (start: number ): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number){};
    counter.interval = 123;
    counter.reset = () => {};
    return counter
}

let c = getCounter();
c(10)
c.reset();
c.interval = 5.0;
