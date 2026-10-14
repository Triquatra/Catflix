import { Text, View, StyleSheet, Button } from "react-native";

export default function LoginScreen( { navigation }) {
  return (
  <View style={styles.container}>
    <Text>
      This is the LoginScreen
    </Text>
    <Button
      title="Log in"
      onPress={() => {}}
      />
    <Button
      title="Register new account"
      onPress={() => navigation.navigate("Register")}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb570",
    alignItems: "center",
    justifyContent: "center",
  },
});