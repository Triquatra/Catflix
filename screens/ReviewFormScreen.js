// Ska enbart ses av inloggad användare

import { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, ImageBackground, Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { sharedStyles } from "../constants/Styles";
import { colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ReviewFormScreen( { route, navigation} ) {

  const { movieId, review : existingReview } = route.params;
  const [review, setReview] = useState(existingReview ? existingReview.reviewText : "");
  const [rating, setRating] = useState(existingReview ? existingReview.rating : 0);
  const { token } = useContext(AuthContext);


  async function saveReview () {

    if (review.trim()=== "") {
            Alert.alert ("Oops", "Write something first!");
              return;
          }

          if (rating === 0) {
            Alert.alert ("Paws!", "You have to rate the movie first")
            return;
          }

    const method = existingReview ? "PATCH" : "POST";
    const url = existingReview
      ? process.env.EXPO_PUBLIC_API_URL + "/api/reviews/" + existingReview.id
      : process.env.EXPO_PUBLIC_API_URL + "/api/reviews";
w
    const response = await fetch(
        url,
        {
          method: method,
          headers: { "Content-type": "application/json", "Authorization": token },
          body: JSON.stringify({
            movieId: movieId, reviewText: review, rating: rating,
          })

        },
      );
      navigation.goBack();
    }

  return (
    <ImageBackground source={require("../assets/review.png")}
        style={styles.container}>
    <SafeAreaView style={styles.container}>
        <View style={sharedStyles.card}>
        <Text style={[sharedStyles.title, styles.heading]}>Write a review</Text>
        <TextInput
          style={[sharedStyles.input, styles.textArea]}
          value={review}
          onChangeText={setReview}
          placeholder="What did you think? Purrfect or .."
          placeholderTextColor={colors.textMuted}
          multiline
          numberOfLines={4}
        />
        
        <View style={styles.pawRow}>
          {[1, 2, 3, 4, 5].map((paw) => (
            <Pressable key={paw} onPress={() => setRating(paw)}>
              <Ionicons
                name={rating >= paw ? "paw" : "paw-outline"}
                size={32}
                color={colors.accentAlt}
              />
            </Pressable>
          ))}
          </View>
          <Pressable style={sharedStyles.button} onPress={() => saveReview()}>
        <Text style={sharedStyles.buttonText}>Submit</Text> 
        </Pressable>     
      </View>
    </SafeAreaView> 
    </ImageBackground> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  pawRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  textArea: {
    minHeight: 120,
    maxHeight: 200,
    textAlignVertical: "top",
  },
  heading: {
    marginBottom: 20,
  }
});