let uniqueId = 1;

export const createItem = (name) => {
    return {
        id: uniqueId++,
        name
    }
}