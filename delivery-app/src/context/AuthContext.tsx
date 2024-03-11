import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { User } from "../interfaces";
import * as SecureStore from "expo-secure-store";

type AuthContextType = {
  users: User[];
  token: string | null;
  signUp: (user: User) => Promise<void>;
  logIn: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  users: [],
  token: null,
  signUp: async (user: User) => {},
  logIn: async (user: User) => {},
  signOut: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const signUp = async (user: User) => {
    try {
      const customToken = "customToken";
      setToken(customToken);
      await SecureStore.setItemAsync("token", `${user.id}`);

      setUsers((prev) => [...prev, user]);

      console.log("User signed up successfully");
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  const logIn = async (user: User) => {
    try {
      let existingUser = users.find(
        (existingUser) => user.email === existingUser.email
      );

      if (existingUser) {
        const customToken = "customToken";
        setToken(customToken);
        await SecureStore.setItemAsync("token", customToken);
        console.log("User logged in successfully");
      } else console.error("Error incorrect email:");
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

  useEffect(() => {
    //console.log("useeffect", users);
  }, [users]);

  const contextValue = { users, token, signUp, logIn, signOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
