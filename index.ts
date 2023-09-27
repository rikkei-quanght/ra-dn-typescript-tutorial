// const payment: Payment = new Payment('', 1); => Lỗi: không thể khởi tạo đối tượng từ 1 abstract class

import { MomoQRPayment } from "./models/MomoQRPayment";

const momoPayment: MomoQRPayment = new MomoQRPayment(1);
console.log('momoPayment', momoPayment);
momoPayment.showTotal();
momoPayment.transfer();
momoPayment.pay();
