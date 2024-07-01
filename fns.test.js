import {capitalize} from './fns';
import {reverseString} from './fns';
import { calculator } from './fns';
import { caesarCipher } from './fns';
import { analyzeArray } from './fns';

//tests
test('capitalize first char of str',()=> {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('jest')).toBe('Jest');
})
test('reverse a string',()=> {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('jest')).toBe('tsej');
})
test('calculator',()=>{
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(8, 2)).toBe(4);
})
test('caesar cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
test('analyze array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
});