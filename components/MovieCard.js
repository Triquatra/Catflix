import { View, Text } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View>
      <Text>{movie.title} </Text>
      <Text>{movie.release_date}</Text>
    </View>
  );
}
