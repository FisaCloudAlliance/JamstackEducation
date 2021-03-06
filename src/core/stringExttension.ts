import { format, parse } from "date-fns";
import { ja } from "date-fns/locale";
import {
    toHiraganaCase, toZenkakuCase, toZenkakuSpace, toZenkanaCase
} from "encoding-japanese";
declare global {
    interface StringConstructor {
        IsNullOrEmpty(str: string | undefined): boolean;
        IsNullOrWhiteSpace(str: string | undefined): boolean;
        Split(value: string, separator: string): string[];
        ToBoolean(value: string, defaultValue?: boolean): boolean;
    }
    interface String {
        toYmd(format?: string): string;
        toDateObject(format?: string): { year: string, month: string, day: string, valid: boolean };
        toKana(): string;
        toDate(format: string): Date;
    }
}
String.IsNullOrEmpty = (str: string) => !str;
String.IsNullOrWhiteSpace = (s: string) => String.IsNullOrEmpty(s) || s.replace(/\s/g, '').length < 1;
String.Split = function (s: string, sep: string) {
    return s.split(sep);
};
String.ToBoolean = function (s, defaultValue = false) {
    if (Object.IsNullOrUndefined(s)) return defaultValue;
    s = s.toLowerCase();

    if (s === 'true') return true;
    if (s === 'false') return false;

    return defaultValue;
}

Object.defineProperty(String.prototype, "toDate", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: string, format: string) {
        if (!this) return null;
        try {
            const dt = parse(this, format, new Date());
            if (!dt) return null;
            return dt;
        } catch (error) {
            console.warn(error);
            return null;
        }
    }
});

Object.defineProperty(String.prototype, "toKana", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: string) {
        const me: string = this;
        if (String.IsNullOrWhiteSpace(me)) return "";
        let newValue = toZenkakuCase(me);
        newValue = toZenkanaCase(newValue);
        newValue = toZenkakuSpace(newValue);
        newValue = toHiraganaCase(newValue);
        newValue = newValue.replace(/\s/g, '');

        let kana = "";
        for (let i = 0; i < newValue.length; i++) {
            const s = newValue[i];
            if (hiragana.some(x => x === s)) {
                kana = kana + s;
            }
        }
        return kana;
    }
});
const hiragana = [
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???", "???",
    "???", "???", "???", "???"
];
Object.defineProperty(String.prototype, "toYmd", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: string, f: string = "yyyy.MM.dd") {
        let me: string = this;
        if (String.IsNullOrWhiteSpace(me)) return "";
        // 7???(yyyy/MM)???????????????????????????
        if (me.length === 7) {
            me = me + "/01";
        }
        return format(new Date(me), f, { locale: ja });
    }
});

Object.defineProperty(String.prototype, "toDateObject", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function (this: string, format: string = 'yyyy/MM/dd') {
        const me: string = this;
        const errorResult = { year: "-", month: "-", day: "-", valid: false };
        if (String.IsNullOrWhiteSpace(me)) return errorResult;
        try {
            const dt = parse(me, format, new Date());
            if (!dt) return errorResult;
            return {
                year: dt.getFullYear().toString(),
                month: (dt.getMonth() + 1).toString(),
                day: dt.getDate().toString(),
                valid: true
            };
        } catch (error) {
            console.warn(error);
            return errorResult;
        }
    }
});