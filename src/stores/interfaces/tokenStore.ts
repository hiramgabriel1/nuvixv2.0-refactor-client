export interface TokenStore {
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
    isValid: () => Promise<boolean>;
}