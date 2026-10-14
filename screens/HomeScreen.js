import { Text, View, StyleSheet, Button } from "react-native";

export default function HomeScreen( { navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Catflix! *meow*</Text>
      <Button
        title="Log In"
        onPress={() => navigation.navigate("Account")}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Account", {screen: "Register"})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5858",
    alignItems: "center",
    justifyContent: "center",
  },
});