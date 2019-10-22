/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {replace, length, compose, test, lt, gt, allPass, anyPass, __} from 'ramda';

const replaceNumbers = replace(/[^0-9]/g, '');

const getNumbersCount = compose(length, replaceNumbers);

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);

const gt1 = gt(__, 1);
const gt2 = gt(__, 2);
const gt3 = gt(__, 3);
const gt4 = gt(__, 4);
const gt5 = gt(__, 5);
const gt8 = gt(__, 8);

const lt2  = lt(__, 2);
const lt4  = lt(__, 4);
const lt5  = lt(__, 5);
const lt8  = lt(__, 8);
const lt10 = lt(__, 10);


/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */

const numbersCountGreaterThanOne   = compose(gt1, getNumbersCount);
const numbersCountGreaterThanTwo   = compose(gt2, getNumbersCount);
const numbersCountGreaterThanThree = compose(gt3, getNumbersCount);
const numbersCountGreaterThanFour  = compose(gt4, getNumbersCount);

const numbersCountLessThanTwo  = compose(lt2, getNumbersCount);
const numbersCountLessThanFive = compose(lt5, getNumbersCount);

/**
 * Функции для проверки выполнения условий с длиной строки
 */

const lengthLessThanFour  = compose(lt4, length);
const lengthLessThanFive  = compose(lt5, length);
const lengthLessThanEight = compose(lt8, length);
const lengthLessThanTen   = compose(lt10, length);

const lengthGreaterThanFive  = compose(gt5, length);
const lengthGreaterThanEight = compose(gt8, length);


/**
 * Функции для проверки наличия конкретного символа в строке
 */

const contains4 = test(/4/);
const contains7 = test(/7/);

const without4 = x => !contains4(x);


// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = (val) => allPass([lengthLessThanFive, numbersCountGreaterThanTwo])(val);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = (val) => allPass([lengthLessThanFive, numbersCountLessThanTwo])(val);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = (val) => allPass([lengthGreaterThanFive, numbersCountGreaterThanOne])(val);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = (val) => allPass([lengthLessThanTen, numbersCountGreaterThanTwo, contains4])(val);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = (val) => allPass([lengthLessThanTen, numbersCountGreaterThanOne, without4])(val);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = (val) => anyPass([lengthGreaterThanFive, contains7])(val);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = (val) => allPass([lengthLessThanEight, numbersCountGreaterThanThree, containsOnlyEng])(val);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = (val) => anyPass([numbersCountLessThanFive, containsOnlyEng, contains7])(val);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = (val) => allPass([lengthLessThanEight, numbersCountGreaterThanFour, containsOnlyEng])(val);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = (val) => anyPass([lengthLessThanFour, numbersCountGreaterThanTwo, containsOnlyEng])(val);
