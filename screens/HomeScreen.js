import { Text, View, StyleSheet, Pressable } from "react-native";

export default function HomeScreen( { navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>
        Welcome to Catflix purr-fect movies, every time... *meow*
      </Text>
       <Text style={styles.description}>
       Search movies, write reviews, and see what other cats are watching.
       </Text>

      <Pressable style={styles.button}
      onPress={() => navigation.navigate("Account", {screen: "Login"})}>
      <Text>Login</Text>
      </Pressable>

      <Pressable style={styles.button}
        onPress={() => navigation.navigate("Account", { screen: "Register" })}>
        <Text>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5858",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 60,
  },
  headline: {
    fontSize: 20,
    fontFamily: "Righteous_400Regular",
   
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginTop: 6,
    marginBottom: 20,
  },
  button: {
    justifyContent: "space-around",
    borderRadius: 28,
    padding: 18,
    borderColor: "black",
    backgroundColor: "white",
    margin: 10,
  }
});