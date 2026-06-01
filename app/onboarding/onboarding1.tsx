import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Onboarding1() {
  return (
    <View style={styles.container}>
      {/* Skip */}
      <TouchableOpacity
        style={styles.skipContainer}
        onPress={() => router.replace("/auth/login")}
      >
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>
        AI That Understands You
      </Text>

      {/* Description */}
      <Text style={styles.description}>
        Tracks your walks, posture{"\n"}
        and health in real-time{"\n"}
        using advanced AI.
      </Text>

      {/* Illustration */}
      <Image
        source={require("../../assets/images/onboarding1.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Push dots + button to bottom */}
      <View style={{ flex: 1 }} />

      {/* Dots */}
      <View style={styles.dots}>
        <View style={[styles.dot, styles.active]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() =>
          router.push("/onboarding/onboarding2")
        }
      >
        <LinearGradient
          colors={["#7B2FF7", "#4E7DFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },

  skipContainer: {
    position: "absolute",
    right: 25,
    top: 90,
    zIndex: 10,
  },

  skip: {
    color: "#B8C0D9",
    fontSize: 16,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 60,
  },

  description: {
    color: "#A7B3D0",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 28,
    marginTop: 15,
  },

  image: {
    width: 320,
    height: 380,
    marginTop: 20,
  },

  dots: {
    flexDirection: "row",
    marginBottom: 25,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4A4E69",
    marginHorizontal: 5,
  },

  active: {
    width: 24,
    backgroundColor: "#7B2FF7",
  },

  buttonWrapper: {
    width: "100%",
  },

  button: {
    height: 62,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});