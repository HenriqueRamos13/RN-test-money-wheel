import React, { createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  user: any;
  isAuth: boolean;
  setUser: (obj: any) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: null,
  setUser: () => null,
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<any | null>(null);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        setUser(JSON.parse(user));
        setIsAuth(true);
      } catch (error) {
        setUser(null);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    if (!user) return setIsAuth(false);

    setIsAuth(true);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
