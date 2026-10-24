import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sharedStyles } from "../constants/Styles";
import { colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function MovieDetailScreen({ route, navigation }) {
  const { movie } = route.params;
  const { token, username } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch(
          process.env.EXPO_PUBLIC_API_URL + "/api/reviews?movieId=" + movie.id,
        );
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.log("Could not fetch reviews");
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, []);

  async function deleteReview(reviewId) {
    try {
      const response = await fetch(
        process.env.EXPO_PUBLIC_API_URL + "/api/reviews/" + reviewId,
        {
          method: "DELETE",
          headers: { Authorization: token },
        },
      );
      setReviews(reviews.filter((r) => r.id !== reviewId));
    } catch (error) {
      console.log("Could not delete review");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/paw_print.png")}
      style={styles.container}
    >
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
            }}
          />
          <LinearGradient
            colors={["transparent", colors.background]}
            style={styles.gradient}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={sharedStyles.title}> {movie.title} </Text>
          <Text style={[sharedStyles.subtitle, sharedStyles.shadow]}>
            {movie.overview}
          </Text>

          {token ? (
            <Pressable
              style={sharedStyles.button}
              onPress={() =>
                navigation.navigate("Review", { movieId: movie.id })
              }
            >
              <Text style={sharedStyles.buttonText}>Write a review</Text>
            </Pressable>
          ) : (
            <Text style={sharedStyles.subtitle}>Log in to write a review</Text>
          )}

          {reviews.map((review) => (
            <View key={review.id}>
              <Text style={sharedStyles.title}>{review.userName}</Text>
              <Text style={sharedStyles.subtitle}>{review.reviewText}</Text>
              <Pressable
                style={sharedStyles.button}
                onPress={() => deleteReview(review.id)}>
                <Text>Delete</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
});
