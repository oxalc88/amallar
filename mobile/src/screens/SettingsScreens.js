import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

const SettingsScreens = ({ navigation }) => {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>Estamos en SettingsScreens</Text>
      <Text>Estamos en SettingsScreens</Text>
      <Text>Estamos en SettingsScreens</Text>
      <Text>Estamos en SettingsScreens</Text>
      <Button onPress={() => goToPage("Home")} title={"Ir a Home"} />
    </SafeAreaView>
  );
};

export default SettingsScreens;
