import { Text, View, StyleSheet } from "react-native";

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;
  console.log(route);
  
  return (
  <View style={styles.container}>
    <Text>
      This is the MovieDetailScreen
    </Text>
    <Text> {movie.title} </Text>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5aa6fd",
    alignItems: "center",
    justifyContent: "center",
  },
});