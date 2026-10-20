import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, FlatList} from "react-native";
import MovieCard from "../components/MovieCard"; 
import { colors } from "../constants/Colors";

export default function MovieListScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          process.env.EXPO_PUBLIC_TMDB_API_KEY,
      );
     
      const data = await response.json();
      setMovies(data.results);

      } catch (error) {
        setError("Couldn't fetch movies");
      } finally {
       setLoading(false); 
      }
    }
    getMovies();
  },
  []);

   if (loading) {
     return (
     <View>
       <Text>Loading...</Text>
     </View>
     )
   }

   if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    )
   }

   if (movies.length === 0) {
    return (
      <View>
        <Text>No movies found.</Text>
      </View>
    )
   }

  return (
  <View style={styles.container}>
    <Text style={styles.header}>
      This is the MovieListScreen
    </Text>
  
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
    backgroundColor: colors.background,
  },
  header: {
    color: "white",
    fontSize: 24,
    fontFamily: "Righteous_400Regular",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
});