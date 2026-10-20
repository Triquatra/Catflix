import { Text, View, StyleSheet, Button, TextInput, Pressable } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AccountScreen( { navigation }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { login, token, logout } = useContext(AuthContext);

   if (token) {
    return <View styles={styles.container}>
      <Text>You are logged in.</Text>
    <Pressable style={styles.button}
         onPress={() => logout()}>
         <Text>Logout</Text>
         </Pressable>
    </View>
     
   }

  return (
    <View style={styles.container}>
      <Text>This is the LoginScreen in AccountScreen</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={() => login(username, password) } />
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
  button: {
    justifyContent: "space-around",
    borderRadius: 28,
    padding: 18,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#fc1e1e",
    margin: 10,
  },
});