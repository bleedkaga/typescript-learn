// 函数类型
interface searchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: searchFunc;
mySearch = function(source: string, substring: string){
    let result = source.search(substring);
    return result > -1
};
