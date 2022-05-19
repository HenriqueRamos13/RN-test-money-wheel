import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../utils/contexts/auth.context";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export function Routes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuth ? <StackRoutes /> : <TabRoutes />}
    </NavigationContainer>
  );
}
