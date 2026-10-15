import { useState } from "react";
import { Text, View, StyleSheet, Pressable, FlatList} from "react-native";
import MovieCard from "../components/MovieCard"; 

export default function MovieListScreen({ navigation }) {

  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.EXPO_PUBLIC_TMDB_API_KEY);
    const data = await response.json();
    
    setMovies(data.results);
  }

  return (
  <View style={styles.container}>
    <Text style={styles.container}>
      This is the MovieListScreen
    </Text>
     <Pressable style={styles.button}        
                onPress={() => loadMovies()}>
                      <Text>Load movies</Text>
                </Pressable>
    <Text style={styles.container}>These are all the movies:{movies.length}</Text>
    
    {/*När man trycker på ett kort körs onPress.
     Den säger åt navigation att gå till MovieDetail
    och skickar med en lapp med etiketten movie där filmen ligger.*/}
    <FlatList
      data={movies}
      keyExtractor={(item) =>String(item.id)}
      renderItem={({ item }) => (
        <Pressable
        onPress={() =>
          navigation.navigate("MovieDetail", { movie: item }
          )
        }
        >
          <MovieCard movie={item} />
          </Pressable>
      )}
      />
  </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
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