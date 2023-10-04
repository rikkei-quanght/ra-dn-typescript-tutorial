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
