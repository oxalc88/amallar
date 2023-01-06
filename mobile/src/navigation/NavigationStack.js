import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreens from "../screens/SettingsScreens";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreens} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
