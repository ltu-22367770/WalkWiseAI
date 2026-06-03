import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function WalkingScoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Walking Score
      </Text>

      <Text style={styles.subtitle}>
        Coming Soon 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
  },

  subtitle: {
    color: "#94A3B8",
    marginTop: 10,
  },
});