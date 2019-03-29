// 公有，私有与受保护的修饰符
/**
 *       默认为public
 *
 */

class Animal {
    private names: string;
    public name: string;
    public constructor(theName: string){ this.name = theName; }
    public move(distanceInMeters: number){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

new Animal('Cat');

