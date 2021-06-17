export function getTypeName(type) {
    const list = type.split('_');

    if(list.length === 2) {
        return `${list[0]} ${list[1]}`;
    }

    return type;
}