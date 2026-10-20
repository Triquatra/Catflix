import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { colors } from "../constants/Colors";
import { sharedStyles } from "../constants/Styles"; 

export default function RegisterScreen( { navigation }) {

 const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { register } = useContext(AuthContext);

   return (
  <View style={styles.container}>
    <View style={sharedStyles.card}>
    <Text style={sharedStyles.title}>
      Create account
    </Text>
    <Text style={sharedStyles.subtitle}>Become a part of Catflix</Text>
        <TextInput style={sharedStyles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          autoCapitalize="none"
        />
        <TextInput style={sharedStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Pressable style={styles.button}
                onPress={ async () => {
                  await register (username, password);
                  navigation.navigate("Profile");
                }}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>
            </View>
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
    backgroundColor: "rgba(105, 34, 70, 0.75)",
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
});