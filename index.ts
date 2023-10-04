import Admin from "./models/Admin";
import Customer from "./models/Customer";
import Product from "./models/Product";
import User from "./models/User";

function demoParams<K, V>(key: K, value: V): void {
    console.log('key type:', typeof key)
    console.log('value type:', typeof value)
}

demoParams<string, number>('name', 1);
demoParams<number, string>(1, 'abc');

function demoReturnType<R>(out: R): R {
    Number(out) + 1;
    return out;
}

const result: number = demoReturnType<number>(2);

function printObject<T extends object>(obj: T): void {
    console.log(obj);
}

const product: Product = {
    product_id: 1
};

const user: User = {
    user_id: 1,
    name: 'sonlq'
}

const admin: Admin = {
    user_id: 1,
    name: 'sonlq',
    isSystemAdmin: false
}

const customer: Customer = {
    user_id: 1,
    name: 'sonlq',
    isActive: true,
}

printObject<Product>(product);

function printUser<U extends User>(user: U): void {
    console.log(user);
}

printUser<User>(user);
printUser<Admin>(admin);
printUser<Customer>(customer);
// printUser<Product>(product);
