import React, { createContext, useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  user: any;
  isAuth: boolean;
  setUser: (obj: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: null,
  setUser: (obj) => null,
  logout: () => null,
});

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any | null>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        // const user = await AsyncStorage.getItem("user");
        // if (user) return setUser(JSON.parse(user));
        logout();
      } catch (error) {
        setUser(null);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    if (!user) return setIsAuth(false);

    const saveUser = async () => {
      try {
        await AsyncStorage.setItem("user", JSON.stringify(user));
        setIsAuth(true);
      } catch (error) {
        setUser(null);
      }
    };

    saveUser();
  }, [user]);

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("@lastSpinDate");
    } catch (error) {
    } finally {
      setUser(null);
      setIsAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
