import { Text, View, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
  <View style={styles.container}>
    <Text>
      This is the LoginScreen
    </Text>
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