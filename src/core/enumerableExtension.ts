import React from "react";
declare global {
    interface Array<T> {
        Where(predicate: (value: T) => boolean): Array<T>;
        Select<U>(select: (value: T) => U): Array<U>;
        SelectMany<U>(select: (value: T) => Array<U>): Array<U>;
        Any(predicate?: (value: T) => boolean): boolean;
        OrderBy(selector: (value: T) => any): Array<T>;
        OrderByDecording(selector: (value: T) => any): Array<T>;
        FirstOrDefault(predicate?: (x: T) => boolean): T;
        LastOrDefault(predicate?: (x: T) => boolean): T;
        GroupBy(selector: (value: T) => any): Array<{ Key: any, Values: Array<T> }>;
        SequenceEqual(target: Array<T>, predicate?: (x1: T, x2: T) => boolean): boolean;
        Sum(selector: (value: T) => number): number;
        Chunk(size: number): Array<Array<T>>;
        IndexOf(predicate: (x: T) => boolean): { index: number, value: T };
        Max(selector?: (value: T) => number): number;
        Min(selector?: (value: T) => number): number;
    }
}
Object.defineProperty(Array.prototype, "IndexOf", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, predicate: (value: any) => boolean) {
        let me: Array<any> = this;
        const error = { index: -1 }
        if (!me) return error;
        for (let index = 0; index < me.length; index++) {
            const element = me[index];
            if (predicate(element)) {
                return { index: index, value: element };
            }
        }
        return error;
    }
});
Object.defineProperty(Array.prototype, "Where", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, predicate: (value: any) => boolean) {
        let me: Array<any> = this;
        return me.filter(value => predicate(value));
    }
});
Object.defineProperty(Array.prototype, "Select", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, select: (value: any) => any) {
        let me: Array<any> = this;
        return me.map(x => select(x));
    }
});
Object.defineProperty(Array.prototype, "SelectMany", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, select: (value: any) => any) {
        let me: Array<any> = this;
        let newArray = new Array<any>();
        me.forEach(x => {
            const arr = select(x) as Array<any>;
            if (arr) {
                newArray = [...newArray, ...arr];
            }
        });
        return newArray;
    }
})
Object.defineProperty(Array.prototype, "Any", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, predicate?: (value: any) => boolean) {
        let me: Array<any> = this;
        if (!predicate) {
            return me.length !== 0;
        }
        return me.some(x => predicate(x));
    }
});
Object.defineProperty(Array.prototype, "OrderBy", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, selector: (value: any) => any) {
        let me: Array<any> = this;
        return me.sort((x, y) => {
            let xx = selector(x);
            let yy = selector(y);

            if (typeof xx === 'string' &&
                typeof yy === 'string') {
                return yy === xx ? 0 : yy < xx ? 1 : -1;
            }
            return xx - yy;
        });
    }
});
Object.defineProperty(Array.prototype, "OrderByDecording", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, selector: (value: any) => any) {
        let me: Array<any> = this;
        return me.sort((x, y) => {
            let xx = selector(x);
            let yy = selector(y);

            if (typeof xx === 'string' &&
                typeof yy === 'string') {
                return yy === xx ? 0 : xx < yy ? 1 : -1;
            }
            return yy - xx;
        });
    }
});
Object.defineProperty(Array.prototype, "FirstOrDefault", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, predicate?: (x: any) => boolean) {
        let me: Array<any> = this;

        if (predicate) {
            me = me.filter(x => predicate(x));
        }
        return 0 < me.length ? me[0] : null;
    }
});
Object.defineProperty(Array.prototype, "LastOrDefault", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, predicate?: (x: any) => boolean) {
        let me: Array<any> = this;

        if (predicate) {
            me = me.filter(x => predicate(x));
        }
        return 0 < me.length ? me[me.length - 1] : null;
    }
});
Object.defineProperty(Array.prototype, "GroupBy", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, selector: (value: any) => any) {
        let me: Array<any> = this;
        let result = new Array<{ Key: any, Values: Array<any> }>()

        me.forEach((value, i) => {
            let groupKey = selector(value);

            if (!result.some(x => x.Key === groupKey)) {
                result.push({ Key: groupKey, Values: new Array<any>() });
            }
            let item = result.FirstOrDefault(x => x.Key === groupKey);
            item.Values.push(value);
        });
        return result;
    }
});
Object.defineProperty(Array.prototype, "SequenceEqual", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, target: Array<any>, predicate?: (x1: any, x2: any) => boolean) {
        let me: Array<any> = this;

        if (Object.IsNullOrUndefined(me) ||
            Object.IsNullOrUndefined(target)
        ) {
            return false;
        }

        if (me.length !== target.length) return false;

        let result = true;
        for (var i = 0; i < me.length; i++) {
            let x = me[i];
            let y = target[i];

            if (predicate) {
                if (!predicate(x, y)) {
                    result = false;
                    break;
                }
            } else {
                if (x !== y) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    }
});
Object.defineProperty(Array.prototype, "Max", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, selector?: (value: any) => number) {
        let me: Array<any> = this;
        let value: number = 0;
        me.forEach(x => {
            if (selector) {
                const each = selector(x);
                if (value < each) {
                    value = each;
                }
            } else {
                if (value < x) {
                    value = x;
                }
            }
        });
        return value;
    }
});
Object.defineProperty(Array.prototype, "Min", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, selector?: (value: any) => number) {
        let me: Array<any> = this;
        let value: number = 999999999;
        me.forEach(x => {
            if (selector) {
                const each = selector(x);
                if (value > each) {
                    value = each;
                }
            } else {
                if (value > x) {
                    value = x;
                }
            }
        });
        return value;
    }
});

Object.defineProperty(Array.prototype, "Sum", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, selector: (value: any) => number) {
        let me: Array<any> = this;
        let value: number = 0;
        me.forEach(x => {
            value += selector(x);
        });
        return value;
    }
});
Object.defineProperty(Array.prototype, "Chunk", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: Array<any>, size: number) {
        let arr: Array<any> = this;
        if (!size) {
            size = 1;
        }
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el])
            } else {
                chunks[chunks.length - 1].push(el)
            }
            return chunks
        }, [])
    }
});
