
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Vibration } from "react-native";
import { Accelerometer } from "expo-sensors";
import { showNotification } from "../../src/notifications/notificationHelper";

export default function PostureScreen() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [posture, setPosture] =
    useState("Good");

  const [score, setScore] =
    useState(90);

  const [alertSent, setAlertSent] =
    useState(false);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);

    const subscription =
      Accelerometer.addListener(
        (accelerometerData) => {

          setData(accelerometerData);

          const tilt =
            Math.abs(
              accelerometerData.x
            ) +
            Math.abs(
              accelerometerData.y
            );

          if (tilt < 0.5) {

            setPosture("Excellent");
            setScore(98);
            setAlertSent(false);

          } else if (
            tilt < 1.0
          ) {

            setPosture("Good");
            setScore(85);
            setAlertSent(false);

          } else if (
            tilt < 1.5
          ) {

            setPosture("Average");
            setScore(70);
            setAlertSent(false);

          } else {

            setPosture("Poor");
            setScore(50);

            if (!alertSent) {

              Vibration.vibrate(500);

              showNotification(
                "🧍 Posture Alert",
                "Please straighten your back."
              );

              setAlertSent(true);
            }
          }
        }
      );

    return () =>
      subscription.remove();

  }, [alertSent]);

  const getRecommendation = () => {

    switch (posture) {

      case "Excellent":
        return "✅ Perfect posture detected. Keep it up!";

      case "Good":
        return "👍 Good posture. Minor improvements possible.";

      case "Average":
        return "⚠ Keep shoulders back and align your neck.";

      case "Poor":
        return "🚨 Please sit upright and straighten your back.";

      default:
        return "";
    }
  };

  const getColor = () => {

    switch (posture) {

      case "Excellent":
        return "#22C55E";

      case "Good":
        return "#4CAF50";

      case "Average":
        return "#F59E0B";

      case "Poor":
        return "#EF4444";

      default:
        return "#FFFFFF";
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        🧍 Posture Detection
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Current Posture
        </Text>

        <Text
          style={[
            styles.postureText,
            {
              color: getColor(),
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
          {getRecommendation()}
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
  fontSize: 42,
  fontWeight: "bold",
  textAlign: "center",
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