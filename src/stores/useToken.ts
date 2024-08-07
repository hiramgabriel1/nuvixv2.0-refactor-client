import { create } from "zustand";
import { TokenStore } from "./interfaces/tokenStore";
import { loadCookie } from "../utils/CookieManager";

export const useToken = create<TokenStore>((set, get) => ({
  token: loadCookie("token") || null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  isValid: async () => {
    if(!get().token) return false;

    // Here you can add a logic to validate the token
    // For example, you can call an API to validate the token
    return true;
  },
}));
