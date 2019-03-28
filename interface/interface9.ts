class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

// 错误： 使用 'string' 索引， 有时候会得到 Animal
interface NotKey {
    [x: number]: Animal;
    [x: string]: Dog;
}
