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
        <Text style={sharedStyles.title}>Log in</Text>
        <Text style={sharedStyles.subtitle}>Welcome back to Catflix</Text>
        <TextInput
          style={sharedStyles.input}
          value={inputUsername}
          onChangeText={setInputUsername}
          placeholder="Username"
          placeholderTextColor={colors.textMuted}
          autoCapitalize="none"
        />
        <TextInput
          style={sharedStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={colors.textMuted}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Pressable
          style={sharedStyles.button}
          onPress={async () => {
            await login(inputUsername, password);
            setPassword("");
          }}
        >
          <Text style={sharedStyles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable
          style={sharedStyles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={sharedStyles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(110, 26, 82, 0.85)",
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