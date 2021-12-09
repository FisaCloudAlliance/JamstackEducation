import React from "react";

declare global {
    // @ts-ignore
    interface ObjectConstructor {
        IsNullOrUndefined(obj: any): boolean;
        NameOf(name: any): string;
    }
    interface Object {
        toPercentOrNullValue(format: string): string;
    }
}

Object.IsNullOrUndefined = (obj: any) => {
    if (obj == null) return true;
    if (obj === null) return true;
    if (typeof obj === 'undefined') return true;
    return false;
};

Object.defineProperty(Object.prototype, "toPercentOrNullValue", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: object, format: string = "％") {
        if (!this) return " - ";

        const me: number = Number(this);
        if (!me) return "";
        return `${me * 100}${format}`;
    }
});