export default class DataStorage<T> {
    rows: T[] = [];

    addRow(row: T): void {
        this.rows.push(row);
    }

    getAll(): T[] {
        return this.rows;
    }

    display(): void {
        console.log(this.rows);
    }
}
