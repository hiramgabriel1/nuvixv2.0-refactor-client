import HttpClient, {
  IsSuccess,
  IsUnauthorized,
} from "../../../utils/HttpManager";
import { isStringEmpty } from "../../../utils/StringsManager";
import { IAuthResponse, IAuthServices } from "../interfaces/IAuthServices";
/**
 * Login a user with email and password
 * @param AuthModel The model with the email and password
 * @returns The user data
 */
export const AuthLogin = async (AuthModel: IAuthServices): Promise<IAuthResponse> => {
  const { email, password } = AuthModel;

  if (isStringEmpty(email))
    throw new Error("Email is required");
  
  if (isStringEmpty(password)) 
    throw new Error("Password is required");

  const response = await HttpClient.post("/users/auth-login", {
    email,
    password,
  });

  if (!IsSuccess(response.status))
    throw new Error("Failed to login");

  if (IsUnauthorized(response.status))
    throw new Error("Unauthorized");

  return response.data as IAuthResponse;
};
/**
 * Logout a user with a token
 * @param token The token of the user
 * @returns The user data
 */
export const AuthLogout = async (token: string) => {
  const response = await HttpClient.post("/user/auth-logout", {
    Authorization: `Bearer ${token}`,
  });

  if (!IsSuccess(response.status)) 
    throw new Error("Failed to logout");

  return response.data as IAuthResponse;
};
