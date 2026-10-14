import { useState } from "react";
import { Text, View, StyleSheet, Pressable, FlatList} from "react-native";





export default function MovieListScreen({ navigation }) {

  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.EXPO_PUBLIC_TMDB_API_KEY);
    const data = await response.json();
    
    setMovies(data.results);
  }

  return (
  <View style={styles.container}>
    <Text>
      This is the MovieListScreen
    </Text>
     <Pressable style={styles.button}        
                onPress={() => loadMovies()}>
                      <Text>Load movies</Text>
                </Pressable>
    <Text>These are all the movies:{movies.length}</Text>
    <FlatList
      data={movies}
      keyExtractor={(item) =>String(item.id)}
      renderItem={({ item }) => (
        <Text>{ item.title}</Text>
      )}
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
  button: {
    justifyContent: "space-around",
    borderRadius: 28,
    padding: 18,
    borderColor: "black",
    backgroundColor: "white",
    margin: 10,
  },
});