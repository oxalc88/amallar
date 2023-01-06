import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreens from "../screens/SettingsScreens";

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreens} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
