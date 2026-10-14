import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
  <View style={styles.container}>
    <Text>
      Welcome to Catflix! *meow*
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5858",
    alignItems: "center",
    justifyContent: "center",
  },
});