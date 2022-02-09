function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
}


export default {
    loadFromStorage,
    saveToStorage,

}

// function _saveCHANGEToStorage(Arr) {
//     storageService.saveToStorage(STORAGE_KEY, Arr)
// }

// function _loadFromStorage() {
//     return storageService.loadFromStorage(STORAGE_KEY)
// }