// 额外的属性检查
interface SquareConfig {
    color? : string;
    width? : number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area: number}{
    return null;
}

let mySquare = createSquare({colour: 'red', width: 100} as SquareConfig);
let squaresOptions = { colour: 'red', width: 100};
let mySquare2 = createSquare(squaresOptions)
