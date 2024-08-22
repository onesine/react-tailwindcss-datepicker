export function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(" ");
}

export function generateArrayNumber(start = 0, end = 0) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

export function shortString(value: string, limit = 3) {
    return value.slice(0, limit);
}

export function ucFirst(value: string) {
    return `${(value[0] || "").toUpperCase()}${(value || "").slice(1, value.length)}`;
}
