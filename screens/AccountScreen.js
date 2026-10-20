import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sharedStyles } from "../constants/Styles";
import { colors } from "../constants/Colors";
import LoggedInCard from "../components/LoggedInCard";

export default function AccountScreen( { navigation }) {
   const [inputUsername, setInputUsername] = useState("");
   const [password, setPassword] = useState("");
   const { login, token, logout, username } = useContext(AuthContext);

   if (token) {
    return (
     <View style={styles.container}>
      <LoggedInCard />
    </View>
    );
   }

  return (
    <View style={styles.container}>
      <View style={sharedStyles.card}>
        <Text style={sharedStyles.title}>This is the LoginScreen in AccountScreen</Text>
        <TextInput style={sharedStyles.input}
          value={inputUsername}
          onChangeText={setInputUsername}
          placeholder="Username"
        />
        <TextInput style={sharedStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Pressable 
        style={styles.button} 
        onPress={async () => {
           await login(inputUsername, password);
          setPassword("");
          }}>
        <Text style={sharedStyles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => navigation.navigate("Register")}>
          <Text style={sharedStyles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "space-around",
    borderRadius: 28,
    padding: 18,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "rgba(105, 34, 70, 0.75)",
    margin: 10,
  },
});