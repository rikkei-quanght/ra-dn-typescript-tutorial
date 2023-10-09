function Imutable(constructor: Function) {
    console.log('this is Imutable decorator');
    console.log(constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@Imutable
class User {
    id: number;

    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const user: User = new User(1, 'TinTT');
Object.seal(user);
user.name = 'a';
delete user.name;

console.log(user.name);

// Example 2:
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
// bug.reportingURL;
console.log(bug);
