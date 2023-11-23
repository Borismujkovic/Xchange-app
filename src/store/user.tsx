import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { IUsers } from "../models/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Api from "../api/real-api";

interface UserContextProps {
  user: IUsers | null;
  token: string | null;
  setToken: (token: string | null) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  token: null,
  setToken: () => {},
  clearUser: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string>("");
  const queryClient = useQueryClient();

  const { data: user } = useQuery(["user"], Api.getUserData, {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: Api.hasToken(),
  });

  const clearUser = () => {
    queryClient.setQueryData(["user"], null);
    setToken("");
  };

  return (
    <UserContext.Provider value={{ user, token, setToken, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
