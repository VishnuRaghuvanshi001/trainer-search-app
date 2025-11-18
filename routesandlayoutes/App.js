import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <LinearGradient colors={["#141E30", "#243B55"]} style={styles.container}>
      <LottieView
        source={{ uri: "https://assets10.lottiefiles.com/packages/lf20_q5pk6p1k.json" }}
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.title}>Welcome, Explorer 👋</Text>

      <Text style={styles.subtitle}>
        This is your first real modern React Native screen.
      </Text>

      <TouchableOpacity style={styles.glassButton}>
        <Text style={styles.buttonText}>Start Journey</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  animation: {
    width: 220,
    height: 220,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "#00E6FF",
    textShadowRadius: 15,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: "#D6E4FF",
    textAlign: "center",
    marginBottom: 30,
  },
  glassButton: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(10px)",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});

