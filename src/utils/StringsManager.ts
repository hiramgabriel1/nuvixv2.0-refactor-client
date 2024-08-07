/**
 * Check if a string is empty
 * @param text The string to check
 * @returns True if the string is empty, false otherwise
 */
export const isStringEmpty = (text: string) => {
    return text === null || text === undefined || text === '';
}
/**
 * Check if a string is not empty
 * @param text The string to check
 * @returns 
 */
export const isStringNotEmpty = (text: string) => {
    return !isStringEmpty(text);
}
/**
 * Check if a string is equal to another string
 * @param text The first string to compare
 * @param secondText The second string to compare
 * @returns True if the strings are equal, false otherwise
 */
export const isStringEqual = (text: string, secondText: string) => {
    return text === secondText;
}
/**
 * Check if a string is not equal to another string
 * @param text The first string to compare
 * @param secondText The second string to compare
 * @returns True if the strings are not equal, false otherwise
 */
export const isStringNotEqual = (text: string, secondText: string) => {
    return !isStringEqual(text, secondText);
}