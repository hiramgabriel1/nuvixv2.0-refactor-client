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

export const IsSuccess = (response: number) => {
  return (
    response === HTTP_STATUS.OK ||
    response === HTTP_STATUS.CREATED ||
    response === HTTP_STATUS.NO_CONTENT
  );
};

export const IsBadRequest = (response: number) => {
  return response === HTTP_STATUS.BAD_REQUEST;
};

export const IsUnauthorized = (response: number) => {
  return response === HTTP_STATUS.UNAUTHORIZED;
};

export const IsForbidden = (response: number) => {
  return response === HTTP_STATUS.FORBIDDEN;
};

export const IsNotFound = (response: number) => {
  return response === HTTP_STATUS.NOT_FOUND;
};

export default HttpClient;