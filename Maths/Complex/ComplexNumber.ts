export class ComplexNumber {
    protected real: number;
    protected imaginary: number;

    public constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    public getReal(): number {
        return this.real;
    }

    public getImaginary(): number {
        return this.imaginary;
    }

    public multiply(x: number | ComplexNumber): ComplexNumber {
        return typeof x === "number"
            ? new ComplexNumber(x * this.real, x * this.imaginary)
            : new ComplexNumber(
                  this.real * x.real - this.imaginary * x.imaginary,
                  this.real * x.imaginary + this.imaginary * x.real,
              );
    }

    public add(x: number | ComplexNumber): ComplexNumber {
        return typeof x === "number"
            ? new ComplexNumber(this.real + x, this.imaginary)
            : new ComplexNumber(this.real + x.real, this.imaginary + x.imaginary);
    }

    public subtract(x: number | ComplexNumber): ComplexNumber {
        return typeof x === "number"
            ? new ComplexNumber(this.real - x, this.imaginary)
            : new ComplexNumber(this.real - x.real, this.imaginary - x.imaginary);
    }

    public divide(x: number | ComplexNumber): ComplexNumber {
        if (typeof x === "number") {
            return new ComplexNumber(this.real / x, this.imaginary / x);
        } else {
            const denom = x.real * x.real + x.imaginary * x.imaginary;
            return new ComplexNumber(
                (this.real * x.real + this.imaginary * x.imaginary) / denom,
                (this.imaginary * x.real - this.real * x.imaginary) / denom,
            );
        }
    }

    public toString(): string {
        return `${this.real} + ${this.imaginary}i`;
    }
}
