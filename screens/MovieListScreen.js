import { Text, View, StyleSheet, Button} from "react-native";

export default function MovieListScreen({ navigation }) {
  return (
  <View style={styles.container}>
    <Text>
      This is the MovieListScreen
    </Text>
     <Button
                title="Show movies"
                onPress={() =>
                    navigation.navigate("MovieDetail")
                }
                />
  </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6ba763",
    alignItems: "center",
    justifyContent: "center",
  },
});