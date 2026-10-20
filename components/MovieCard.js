import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../constants/Colors";

export default function MovieCard({ movie }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
         source={{
    uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
         }}/>
      <Text style={styles.titel}>{movie.title} </Text>
      <Text style={styles.date}>{movie.release_date}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
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
    color: "#1A1A1A",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  date: {
    color: "#666666",
  }
});