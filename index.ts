const numbers: number[] = [1, 2, 3];
const numbersWithGeneric: Array<number> = [1, 2, 3];

const characters: string[] = ['a', 'b', 'c'];
const charactersWithGeneric: Array<string> = ['a', 'b', 'c'];

const promise: Promise<string> = new Promise<string>((resolve, reject) => {
    resolve('123');
});
