export function createUniqueID() {
    return addNewId() + '-' + addNewId();
}

function addNewId() {
    return Math.random().toString(16).slice(2)
}