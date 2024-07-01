export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function reverseString(str) {
    return str.split('').reverse().join('');
}
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
export function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { 
            // Uppercase letters
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { 
            // Lowercase letters
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
            // Non-alphabetical characters
            return char; 
        }
    }).join('');
}
export const analyzeArray = (arr) => {
    if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
    const sum = arr.reduce((a, b) => a + b, 0);
    const length = arr.length;
    const average = sum / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return { average, min, max, length };
};
  