function Min(length: number) {
    return function (constructor: Object, propertyName: string) {
        let value: string;

        const getValue = function () {
            let now = new Date().toLocaleString('vi');
            console.log(`Lấy ${propertyName} lúc ${now}`);
            return value;
        };

        const setValue = function (newVal: string) {
            value = newVal;
            if (newVal.length < length) {
                console.error(`${propertyName} ${newVal} ngắn quá, > ${length} ký tự`);
            }
        };

        // Khai báo 2 method setter getter để kiểm soát 
        Object.defineProperty(constructor, propertyName, {
            get: getValue,
            set: setValue
        });
    }
}

class User {
    @Min(4)
    public username: string;

    @Min(8)
    public password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

let user1 = new User('tin', '123456');
let user2 = new User('thailq', '12345678');
