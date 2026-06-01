
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Accelerometer } from "expo-sensors";

export default function PostureScreen() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [posture, setPosture] = useState("Good");
  const [score, setScore] = useState(90);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);

    const subscription = Accelerometer.addListener(
      (accelerometerData) => {
        setData(accelerometerData);

        const tilt =
          Math.abs(accelerometerData.x) +
          Math.abs(accelerometerData.y);

        if (tilt > 1.2) {
          setPosture("Bad");
          setScore(55);
        } else {
          setPosture("Good");
          setScore(90);
        }
      }
    );

    return () => subscription.remove();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🧍 Posture Detection</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Current Posture
        </Text>

        <Text
          style={[
            styles.postureText,
            {
              color:
                posture === "Good"
                  ? "#4CAF50"
                  : "#F44336",
            },
          ]}
        >
          {posture}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Posture Score
        </Text>

        <Text style={styles.score}>
          {score}/100
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Accelerometer Data
        </Text>

        <Text style={styles.info}>
          X: {data.x.toFixed(2)}
        </Text>

        <Text style={styles.info}>
          Y: {data.y.toFixed(2)}
        </Text>

        <Text style={styles.info}>
          Z: {data.z.toFixed(2)}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          AI Recommendation
        </Text>

        <Text style={styles.info}>
          {posture === "Good"
            ? "✅ Great posture! Keep it up."
            : "⚠ Sit upright and align your shoulders."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    padding: 20,
    paddingTop: 70,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  postureText: {
    fontSize: 40,
    fontWeight: "bold",
  },

  score: {
    color: "#6C63FF",
    fontSize: 40,
    fontWeight: "bold",
  },

  info: {
    color: "#D6D8E6",
    fontSize: 16,
    marginBottom: 8,
  },
});