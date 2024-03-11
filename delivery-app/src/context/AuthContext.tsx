import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { user } from "../data/user";

import * as SecureStore from "expo-secure-store";

export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type AuthContextType = {
  token: string | null;

  signUp: (user: User) => Promise<void>;
  logIn: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  signUp: async (user: User) => {},
  logIn: async (user: User) => {},
  signOut: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const signUp = async (user: User) => {
    try {
      const customToken = "customToken";
      setToken(customToken);
      await SecureStore.setItemAsync("token", customToken);


      console.log("User signed up successfully");
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  const logIn = async (user: User) => {
    try {
      const customToken = "customToken";
      setToken(customToken);
      await SecureStore.setItemAsync("token", customToken);
      console.log("User logged in successfully");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signOut = async () => {
    try {
      setToken(null);
      await SecureStore.deleteItemAsync("token");
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };


  useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync("token");
        console.log("token is:", storedToken);

        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Error while retrieving token from storage:", error);
      }
    };

    getToken();
  }, []);

  const contextValue = { token, signUp, logIn, signOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
