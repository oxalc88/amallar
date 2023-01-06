import { View, Text, Button, SafeAreaView } from "react-native";

const HomeScreen = (props) => {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToPage} title={"Ir a Ajustes"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
