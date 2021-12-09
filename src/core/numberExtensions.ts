import React from "react";
declare global {
    interface Number {
        toFormat(): string;
        toYenOrNullValue(): string;
        toPercentOrNullValue(format?: string): string;
        toFormatOrNullValue(format?: string): string;
    }
}
Object.defineProperty(Number.prototype, "toFormatOrNullValue", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: number, format: string = "") {
        const me: number = Number(this);
        if (!me) return "";
        if (me === 0) return "";
        return `${me.toFormat()}${format}`;
    }
});

Object.defineProperty(Number.prototype, "toPercentOrNullValue", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: number, format: string = "％") {
        const me: number = this;
        if (!me) return "";
        return `${me * 100}${format}`;
    }
});
Object.defineProperty(Number.prototype, "toYenOrNullValue", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: number) {
        const me: number = this;
        if (!me) return "";
        return `${me.toFormat()}円`;
    }
});
Object.defineProperty(Number.prototype, "toFormat", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: number) {
        const me: number = this;
        return new Intl.NumberFormat("ja-JP", { style: 'decimal' }).format(me);
    }
});