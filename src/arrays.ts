/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let arr: number[];
    if (numbers.length === 0) {
        arr = [];
    } else if (numbers.length === 1) {
        arr = [numbers[0]];
        arr.splice(2, 0, numbers[0]);
    } else {
        arr = [numbers[0]];
        arr.splice(2, 0, numbers[numbers.length - 1]);
    }
    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const trip = numbers.map((numbers: number): number => numbers * 3);
    return trip;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int_list = numbers.map((numbers: string): number =>
        parseInt(numbers)
    );
    const int_return = int_list.map((int_list: number): number =>
        Number.isNaN(int_list) ? (int_list = 0) : int_list
    );
    return int_return;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDoll = amounts.map((amounts: string): string =>
        amounts.charAt(0) === "$" ? (amounts = amounts.slice(1)) : amounts
    );
    const ints = noDoll.map((amounts: string): number => parseInt(amounts));
    const intsRet = ints.map((ints: number): number =>
        Number.isNaN(ints) ? (ints = 0) : ints
    );
    return intsRet;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestion = messages.filter(
        (messages: string): boolean => messages[messages.length - 1] != "?"
    );
    const exclamation = removeQuestion.map((removeQuestion: string): string =>
        removeQuestion[removeQuestion.length - 1] === "!"
            ? removeQuestion.toUpperCase()
            : removeQuestion
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((words: string): boolean => words.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let toReturn: boolean;
    if (colors.length === 0) {
        toReturn = true;
    } else {
        const noRGB = colors.filter(
            (colors: string): boolean =>
                colors != "red" && colors != "green" && colors != "blue"
        );
        if (noRGB.length > 0) {
            toReturn = false;
        } else {
            toReturn = true;
        }
    }
    return toReturn;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
