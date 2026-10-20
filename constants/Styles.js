import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const sharedStyles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(15, 15, 35, 0.6)",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontFamily: "Righteous_400Regular",
    color: colors.text,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: colors.textMuted,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    color: colors.text,
    width: "100%",
  },
  shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  button: {
    borderRadius: 28,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(105, 34, 70, 0.75)",
    margin: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: colors.text,
    fontFamily: "Righteous_400Regular",
    textAlign: "center",
    fontSize: 16,
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
});
