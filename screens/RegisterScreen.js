import { Text, View, StyleSheet } from "react-native";

export default function RegisterScreen() {
  return(
  <View style={styles.container}>
    <Text>
      This is the RegisterScreen
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2b3f0",
    alignItems: "center",
    justifyContent: "center",
  },
});