// Ska enbart ses av inloggad användare

import { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { sharedStyles } from "../constants/Styles";
import { colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ReviewFormScreen( { route} ) {

  const [review, setReview] = useState ("");
  const [rating, setRating] = useState(0);
  const { movieId } = route.params;
  const { token } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={sharedStyles.card}>
        <Text style={sharedStyles.title}>Write a review</Text>
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
          {[1,2,3,4,5].map((paw) => (
          <Pressable key={paw} onPress={() => setRating(paw)}>
            <Ionicons
              name={rating >= paw ? "paw" : "paw-outline"}
              size={32}
              color={colors.accent}
            />
          </Pressable>
          ))}
           <Pressable
                style={sharedStyles.button}
                onPress={() => {} }>
             <Text style={sharedStyles.buttonText}>Submit</Text>
          </Pressable>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
  
  },
  pawRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
});