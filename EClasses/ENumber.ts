import { Comparable } from "../Interfaces/Comparable";

import { EString } from "./EString";
import { EBool } from "./EBool";
import { EFloat } from "./EFloat";
import { EInteger } from "./EInteger";
import { EList } from "./EList";

export class ENumber implements Comparable {
    private value: number;

    static pi: ENumber = ENumber.from(Math.PI);
    static e: ENumber = ENumber.from(Math.E);
    static tau: ENumber = ENumber.from(2 * Math.PI);
    static ln10: ENumber = ENumber.from(Math.LN10);
    static log10e: ENumber = ENumber.from(Math.LOG10E);
    static log2e: ENumber = ENumber.from(Math.LOG2E);
    static sqrt1_2: ENumber = ENumber.from(Math.SQRT1_2);
    static sqrt2: ENumber = ENumber.from(Math.SQRT2);
    static zero: ENumber = ENumber.from(0);
    static one: ENumber = ENumber.from(1);
    static two: ENumber = ENumber.from(2);

    constructor(value: number | ENumber) {
        this.value = typeof value === "number" ? value : value.unwrap();
    }

    static from(value: ConstructorParameters<typeof ENumber>[0]): ENumber {
        return new ENumber(value);
    }

    static hypot(
        args: (ENumber | number)[] | EList<ENumber | number> | EList<ENumber> | EList<number>,
    ): EFloat {
        return EList.from(args)
            .map((item: ENumber | number): ENumber => ENumber.from(item).square())
            .sum()
            .asFloat();
    }

    static getRandomInt(max: ENumber | number): EInteger {
        return EInteger.from(Math.floor(Math.random() * ENumber.from(max).unwrap()));
    }

    static random(): EFloat {
        return new EFloat(Math.random());
    }

    // exclusive max
    static getRandomArbitrary(min: ENumber | number, max: ENumber | number): EFloat {
        return ENumber.random().mult(ENumber.from(min).sub(max)).add(min).asFloat();
    }

    clone(): ENumber {
        return new ENumber(this.value);
    }

    unwrap(): number {
        return this.value;
    }

    add(other: ENumber | number): ENumber {
        return new ENumber(this.unwrap() + ENumber.from(other).unwrap());
    }

    subtract(other: ENumber | number): ENumber {
        return new ENumber(this.unwrap() - ENumber.from(other).unwrap());
    }

    sub(other: Parameters<typeof this.subtract>[0]): ENumber {
        return this.subtract(other);
    }

    multiply(other: ENumber | number): ENumber {
        return new ENumber(this.unwrap() * ENumber.from(other).unwrap());
    }

    mult(other: Parameters<typeof this.multiply>[0]): ENumber {
        return this.multiply(other);
    }

    times(other: Parameters<typeof this.mult>[0]): ENumber {
        return this.mult(other);
    }

    divide(other: ENumber | number): ENumber {
        return new ENumber(this.unwrap() / ENumber.from(other).unwrap());
    }

    div(other: Parameters<typeof this.divide>[0]): ENumber {
        return new ENumber(this.divide(other));
    }

    pow(exponent: ENumber | number): ENumber {
        return new ENumber(Math.pow(this.unwrap(), ENumber.from(exponent).unwrap()));
    }

    abs(): ENumber {
        return new ENumber(Math.abs(this.unwrap()));
    }

    square(): ENumber {
        return this.pow(2);
    }

    sqrt(): EFloat {
        if (this.unwrap() < 0) {
            throw new Error("Cannot take square root of negative number");
        }

        return new EFloat(Math.sqrt(this.unwrap()));
    }

    getRandomUpTo(): EFloat {
        return EFloat.from(Math.random() * this.unwrap());
    }

    log(base1: ENumber | number): EFloat {
        if (this.unwrap() < 0) {
            throw new Error("Cannot take logarithm of negative number");
        }

        const base: number = ENumber.from(base1).unwrap();
        if (base <= 0 || base === 1) {
            throw new Error("Base must be a positive number not equal to 1");
        }

        return new EFloat(Math.log(this.unwrap()) / Math.log(base));
    }

    ln(): EFloat {
        return this.log(ENumber.e);
    }

    max(other: ENumber | number): ENumber {
        return new ENumber(Math.max(this.unwrap(), ENumber.from(other).unwrap()));
    }

    min(other: ENumber | number): ENumber {
        return new ENumber(Math.min(this.unwrap(), ENumber.from(other).unwrap()));
    }

    inc(): ENumber {
        return new ENumber(this.unwrap() + 1);
    }

    dec(): ENumber {
        return new ENumber(this.unwrap() - 1);
    }

    isNaN(): EBool {
        return EBool.from(Number.isNaN(this.unwrap()));
    }

    isInt(): EBool {
        return EBool.from(Number.isInteger(this.unwrap()));
    }

    isFloat(): EBool {
        return EBool.from(!Number.isInteger(this.unwrap()));
    }

    equals(other: ENumber | number): EBool {
        return EBool.from(this.unwrap() === ENumber.from(other).unwrap());
    }

    greaterThan(other: ENumber | number): EBool {
        return EBool.from(this.unwrap() > ENumber.from(other).unwrap());
    }

    lessThan(other: ENumber | number): EBool {
        return EBool.from(this.unwrap() < ENumber.from(other).unwrap());
    }

    toFloat(): EFloat {
        return new EFloat(this.unwrap());
    }

    asFloat(): EFloat {
        return this.toFloat();
    }

    inv(): EFloat {
        return this.mult(-1).toFloat();
    }

    toInt(): EInteger {
        return new EInteger(this.unwrap());
    }

    asInt(): EInteger {
        return this.toInt();
    }

    neg(): ENumber {
        return new ENumber(-this.unwrap());
    }

    sin(): EFloat {
        return new EFloat(Math.sin(this.unwrap()));
    }

    cos(): EFloat {
        return new EFloat(Math.cos(this.unwrap()));
    }

    tan(): EFloat {
        return new EFloat(Math.tan(this.unwrap()));
    }

    csc(): EFloat {
        return this.sin().divide(1).toFloat();
    }

    sec(): EFloat {
        return this.cos().divide(1).toFloat();
    }

    cot(): EFloat {
        return this.tan().divide(1).toFloat();
    }

    asin(): EFloat {
        return new EFloat(Math.asin(this.unwrap()));
    }

    acos(): EFloat {
        return new EFloat(Math.acos(this.unwrap()));
    }

    atan(): EFloat {
        return new EFloat(Math.atan(this.unwrap()));
    }

    acsc(): EFloat {
        return this.asin().divide(1).toFloat();
    }

    asec(): EFloat {
        return this.acos().divide(1).toFloat();
    }

    acot(): EFloat {
        return this.atan().divide(1).toFloat();
    }

    sinh(): EFloat {
        return ENumber.e.pow(this).sub(ENumber.e.pow(this.neg())).div(2).asFloat();
    }

    cosh(): EFloat {
        return ENumber.e.pow(this).add(ENumber.e.pow(this.neg())).div(2).asFloat();
    }

    tanh(): EFloat {
        return this.sinh().div(this.cosh()).asFloat();
    }

    csch(): EFloat {
        return this.cosh().inv();
    }

    sech(): EFloat {
        return this.sinh().inv();
    }

    coth(): EFloat {
        return this.tanh().inv();
    }

    asinh(): EFloat {
        return EFloat.from(Math.asinh(this.unwrap()));
    }

    acosh(): EFloat {
        return EFloat.from(Math.acosh(this.unwrap()));
    }

    atanh(): EFloat {
        return EFloat.from(Math.atanh(this.unwrap()));
    }

    acsch(): EFloat {
        return this.asinh().inv();
    }

    asech(): EFloat {
        return this.acosh().inv();
    }

    acoth(): EFloat {
        return this.atanh().inv();
    }

    exp(): EFloat {
        return EFloat.from(Math.exp(this.unwrap()));
    }

    expm1(): EFloat {
        return this.exp().dec().asFloat();
    }

    e(n: ENumber | number): EFloat {
        return this.times(10 ** ENumber.from(n).unwrap()).asFloat();
    }

    compareTo(other: ENumber): -1 | 0 | 1 {
        if (this.unwrap() < other.unwrap()) {
            return -1;
        }
        if (this.unwrap() > other.unwrap()) {
            return 1;
        }
        return 0;
    }

    toString(): EString {
        return EString.from(this.unwrap().toString());
    }
}
