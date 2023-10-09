function required() {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    }
}

class User {
    public username: string;

    public password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    display(@required() name: string, @required() name2: string) {
        console.log(name)
    }
}

let user1 = new User('tin', '123456');
let user2 = new User('thailq', '12345678');
