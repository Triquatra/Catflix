import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { ImageBackground } from "react-native";
import { colors } from "../constants/Colors";
import { sharedStyles } from "../constants/Styles";

export default function HomeScreen( { navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Catflix_background_1.png")}
      style={styles.container}
    >
      <Image
        source={require("../assets/Catflix_logo1.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[sharedStyles.title, styles.shadow]}>
        Purr-fectly honest reviews
      </Text>
      <Text style={[sharedStyles.subtitle, sharedStyles.shadow]}>
        Search, review and see what other cats are watching
      </Text>

      <View style={styles.buttonArea}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Account", { screen: "Profile" })}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Account", { screen: "Register" })}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff5858",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  button: {
    justifyContent: "space-around",
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    margin: 10,
    width: 140,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor:"rgba(105, 34, 70, 0.75)",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonArea: {
    marginTop: "auto",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonText: {
    color: "white",
    fontFamily: "Righteous_400Regular",
    textAlign: "center",
  },
  logo: {
    width: "80%",
    maxWidth: 400,
    height: 100,
  },
});