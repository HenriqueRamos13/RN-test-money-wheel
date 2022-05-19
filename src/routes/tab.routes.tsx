import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Ranking from "../screens/Ranking";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Ranking" component={Ranking} />
    </Tab.Navigator>
  );
}
