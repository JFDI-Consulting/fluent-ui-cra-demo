export const firstKey = (o = {}) => Object.keys(o)[0];
export const dictionaryToObjectArray = (o = {}, fn) =>
    Object.entries(o).map(fn);
