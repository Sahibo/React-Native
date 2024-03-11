import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { User, Card, Favorite, Address, Cart } from "../interfaces";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "../context/AuthContext";

interface UserContextType {
  user: User;
  //   cart?: Cart[];
  //   addresses?: Address[];
  //   favorites?: Favorite[];
  //   cards?: Card[];
  addAddress: (data: Address) => void;
}

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContext = createContext<UserContextType>({
  user: {} as User,
  //   cart: [] as Cart[],
  //   addresses: [] as Address[],
  //   favorites: [] as Favorite[],
  //   cards: [] as Card[],

  addAddress: (data: Address) => {},
});

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  const addAddress = (data: Address) => {
    if (user.addresses)
    {
        user.addresses.push(data);

    }
  };

  const { users } = useAuth();
  useEffect(() => {
    const getUser = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync("token");
        console.log("token is:", storedToken);

        let user = users.find((user) => storedToken === `${user.id}`);
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.error("Error while retrieving token from storage:", error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    console.log("useffect", user.addresses);
  }, [user.addresses]);

  const contextValue = { user, addAddress };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
