import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen( { navigation }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>This is the LoginScreen</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="User name"
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
});