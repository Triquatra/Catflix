import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, FlatList, ImageBackground} from "react-native";
import MovieCard from "../components/MovieCard"; 
import { colors } from "../constants/Colors";
import { sharedStyles } from "../constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <View style={styles.container}>
        <Text style={sharedStyles.title}>No movies found.</Text>
      </View>
    );
   }

  return (
    <ImageBackground
      source={require("../assets/clouds.png")}
      style={styles.container}
    >
      <SafeAreaView style={sharedStyles.safeArea}>
       
        <View>
          <Text style={sharedStyles.title}>This is the MovieListScreen</Text>

          {/*När man trycker på ett kort körs onPress.
     Den säger åt navigation att gå till MovieDetail
    och skickar med en lapp med etiketten movie där filmen ligger.*/}
          <FlatList
            data={movies}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("MovieDetail", { movie: item })
                }
              >
                <MovieCard movie={item} />
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  centered: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  }
});