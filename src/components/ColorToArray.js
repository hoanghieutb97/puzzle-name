export const ColorToArray = (arrayHex, length) => {
    let arrConvert = [];
    while (arrConvert.length < length) {
        arrConvert = [...arrConvert, ...arrayHex]
    }
    while (arrConvert.length > length) {
        arrConvert.pop();
    }
    return arrConvert;
}

export const keyToColorHex = (arrayHex, key) => {
    let keyArrayKex = key % (arrayHex.length);
    return arrayHex[keyArrayKex]
}