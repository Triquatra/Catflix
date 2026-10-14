import { View, Text, StyleSheet } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titel}>{movie.title} </Text>
      <Text>{movie.release_date}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#82dadd",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    margin: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  titel: {
    fontSize: 16,
    fontFamily: "Righteous_400Regular",
  }
});