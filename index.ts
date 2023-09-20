// Tupple
let a : [number, string, boolean];
// a = [10, '20'];
a = [10, '20', true];
// a = ['a', '20', true];
console.log(a);


// Enum
enum UserRole {
    ADMIN,
    CUSTOMER
}

enum ProductCategory {
    RING = 1,
    NECK = 2
}

console.log('UserRole.ADMIN', UserRole.ADMIN);
console.log('ProductCategory.NECK', ProductCategory.NECK);

// Union type
let count : number | string | boolean;

count = 10;
count = 'Zero';
count = false;
let c : [number | string, string, boolean];


// Type alias
type combineInputType = number | string | number;

let b : combineInputType;

b = 10;
b = 'abc';

let d : [combineInputType, string, boolean];
