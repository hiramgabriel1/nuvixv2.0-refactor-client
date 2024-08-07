import axios from "axios";
import { HTTP_STATUS } from "./enums/HttpHelper";
import { API_URL } from "./Contants";
/**
 * Axios instance for making HTTP requests
 */
const HttpClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * Check if the response is a success
 * @param response The response status
 * @returns True if the response is a success
 */
export const IsSuccess = (response: number) => {
  return (
    response === HTTP_STATUS.OK ||
    response === HTTP_STATUS.CREATED ||
    response === HTTP_STATUS.NO_CONTENT
  );
};
/**
 * Check if the response is a bad request
 * @param response The response status
 * @returns True if the response is a bad request
 */
export const IsBadRequest = (response: number) => {
  return response === HTTP_STATUS.BAD_REQUEST;
};
/**
 * Check if the response is unauthorized
 * @param response The response status
 * @returns True if the response is unauthorized
 */
export const IsUnauthorized = (response: number) => {
  return response === HTTP_STATUS.UNAUTHORIZED;
};
/**
 *  Check if the response is forbidden
 * @param response The response status
 * @returns True if the response is forbidden
 */
export const IsForbidden = (response: number) => {
  return response === HTTP_STATUS.FORBIDDEN;
};
/**
 * Check if the response is not found
 * @param response The response status
 * @returns True if the response is not found
 */
export const IsNotFound = (response: number) => {
  return response === HTTP_STATUS.NOT_FOUND;
};

export default HttpClient;