import { Admin } from "./models/Admin";
import { Product } from "./models/Product";
import { User } from "./models/User";

const user: User = new User();
user.user_id = 2;
user.email = 'sanglq@gmail.com';
// user.username = 'sanglq';  => Lỗi do thuộc tính username là protected
// user.password = 'pwd@123';  => Lỗi do thuộc tính username là private
// console.log('user.username', user.username); => Lỗi do thuộc tính username là protected
// console.log('user.password', user.password); => Lỗi do thuộc tính username là private
console.log('user.user_id', user.user_id);
console.log('user.email', user.email);
console.log('user', user);

user.login('pwd123');
// user.sendMessage('Thông báo'); => Lỗi do sendMessage() là protected
// user.hashPassword(); => Lỗi do hashPassword() là private

const admin: Admin = new Admin();
// admin.username = 'abc'; // Lỗi do thuộc tính username là protected 
admin.changeProps();
console.log('admin', admin);

console.log('getters & setters')

const product: Product = new Product(3, 'Candy', 12);
console.log('product', product);
product.setProductId = 10;
product.setName = 'Table';
product.setUnitPrice = 1000;
console.log('product.product_id: ', product.getProductId);
console.log('product.name: ', product.getName);
console.log('product.unit_price: ', product.getUnitPrice);
