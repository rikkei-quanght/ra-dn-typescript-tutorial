export class Circle {
    private radius: number;

    private color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    public get getRadius(): number {
        return this.radius;
    }

    public get getColor(): string {
        return this.color;
    }

    public set setRadius(radius: number) {
        this.radius = radius;
    }

    public set setColor(color: string) {
        this.color = color;
    }

    public chuVi(): number {
        return 2 * Math.PI * this.radius;
    }

    public dienTich(): number {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    public inputData(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    public displayData(): void
    {
        console.log(this);
    }
}
