import { addMonths, format } from "date-fns";
declare global {
    // @ts-ignore
    interface Date {
        addMonth(amount: number): Date;
        toFormat(format: string): string;
    }
}

Object.defineProperty(Date.prototype, "addMonth", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Date, amount: number) {
        return addMonths(this, amount);
    }
});

Object.defineProperty(Date.prototype, "toFormat", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Date, f: string) {
        return format(this, f);
    }
});