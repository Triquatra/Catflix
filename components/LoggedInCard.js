import { useContext } from "react";
import { Text, View, StyleSheet, Pressable} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { sharedStyles } from "../constants/Styles";

export default function LoggedInCard () {

  const { username, logout } = useContext(AuthContext);

    return <View style={sharedStyles.card}>
      <Text style={sharedStyles.title}>Welcome {username}</Text>
    <Pressable style={styles.button}
         onPress={() => logout()}>
         <Text style={sharedStyles.buttonText}>Logout</Text>
         </Pressable>
    </View>
  }

  const styles = StyleSheet.create({
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
  }
  });