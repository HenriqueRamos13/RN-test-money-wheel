import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Recovery from "../screens/Recovery";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Recovery" component={Recovery} />
    </Navigator>
  );
}
