import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Recovery from "../screens/Recovery";

const { Screen, Navigator } = createNativeStackNavigator();

const defaultOptions = {
  headerShown: false,
};

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ ...defaultOptions }} />
      <Screen
        name="Recovery"
        component={Recovery}
        options={{ ...defaultOptions }}
      />
    </Navigator>
  );
}
