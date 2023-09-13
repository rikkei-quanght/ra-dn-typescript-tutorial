const username : string = "tintt";
const age : number = 29;
const isActived : boolean = true;

console.log('username', username);
console.log('age', age);
console.log('isActive', isActived);

// Array
const numbers: number[] = [1, 2, 3];
const names : string[] = ["tintt", "thailq", "huynq"];
const mixed: any[] = [1, "a", true, {}];

// Function trả về number
const calculatePriceWithTax = (price : number) : number => {
    const rate : number = 7; // Thuế giả định: 7%
    const tax = (price * rate / 100);

    return price + tax;
}

const showName = (name: string) : void => {
    console.log(name)
}

showName("Giang")

const priceWithTax : number = calculatePriceWithTax(1000);
console.log(priceWithTax)
