import { load, remove, save } from "react-cookies";
/**
 * Check if the date is a Date object
 * @param date  Date to check
 * @returns True if the date is a Date object
 */
const isDate = (date: Date | number): date is Date => {
  return (date as Date).getDate !== undefined;
};
/**
 * Save cookie with expire date
 * @param name Name of the cookie
 * @param value Value of the cookie
 * @param expireDate  Date of expiration
 */
const saveCookieWithExpireDate = (
  name: string,
  value: string,
  expireDate: Date
): void => {
  save(name, value, {
    path: "/",
    expires: expireDate,
    httpOnly: false,
  });
};

/**
 * Save cookie with max age
 * @param name Name of the cookie
 * @param value Value of the cookie
 * @param maxAge Max age of the cookie
 */
const saveCookieWithMaxAge = (
  name: string,
  value: string,
  maxAge: number
): void => {
  save(name, value, {
    path: "/",
    maxAge: maxAge,
    httpOnly: false,
  });
};

/**
 * Save cookie
 * @param name  Name of the cookie
 * @param value  Value of the cookie
 * @param expireDate  Date of expiration
 */
export const saveCookie = (
  name: string,
  value: string,
  expireDate: Date | number
): void => {
  if (isDate(expireDate)) {
    saveCookieWithExpireDate(name, value, expireDate);
  } else {
    saveCookieWithMaxAge(name, value, expireDate);
  }
};
/**
 * Load cookie with optional parser
 * @param name Name of the cookie
 * @param parserCookie True if the cookie should be parsed
 * @returns Value of the cookie
 */
export const loadCookie = (name: string, parserCookie?: boolean): string => {
  const cookie = load(name, parserCookie);
  return cookie;
};
/**
 * Remove cookie by name
 * @param name Name of the cookie
 */
export const removeCookie = (name: string): void => {
  remove(name, {
    path: "/",
    httpOnly: false,
  });
};