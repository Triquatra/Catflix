import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen( { navigation }) {

 const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { register } = useContext(AuthContext);

   return (
  <View style={styles.container}>
    <Text>
      This is the RegisterScreen
    </Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button title="Register" onPress={ async () => {
           await register(username, password);
           navigation.navigate("Login");
            }}
            />
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