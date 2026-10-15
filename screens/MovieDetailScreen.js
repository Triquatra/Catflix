import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function MovieDetailScreen({ route }) {
  const { movie } = route.params;

  return (
  <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
   
    <Image style={styles.image}
             source={{
        uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
             }}/>
    <View style={styles.textContainer}>
    <Text style={styles.title}> {movie.title} </Text>
    <Text>{movie.overview}</Text>
    </View>
  </ScrollView>
  );
}


const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#5aa6fd",
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: "Righteous_400Regular",
    marginBottom: 8,
  },
});