"use strict";
function getRealtimeData(value) {
    return value;
}
console.log(getRealtimeData('Fetch Data 100%=====').length);
console.log(getRealtimeData(123456789).length); // undefined, karena tidak bisa calculate length untuk tipe data number
function exampleGenericFunction(value) {
    return value;
}
console.log(exampleGenericFunction('Bilek').length);
// console.log(exampleGenericFunction(12345).length); // akan terdeteksi
const genericArrowFunction = (value) => {
    return value;
};
