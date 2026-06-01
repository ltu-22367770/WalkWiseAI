import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function WalkTrackerScreen() {
  const { title, goal } = useLocalSearchParams();

  const [tracking, setTracking] = useState(false);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (tracking) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);

        setDistance((prev) =>
          Number((prev + 0.01).toFixed(2))
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [tracking]);

  const formatTime = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;

    return `${mins
      .toString()
      .padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const calories = Math.round(distance * 60);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        🚶 Walk Tracker
      </Text>

      <View style={styles.activityCard}>
        <Text style={styles.activityTitle}>
          {title || "Activity"}
        </Text>

        <Text style={styles.goal}>
          Goal: {goal || "2.5 km"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Distance
        </Text>

        <Text style={styles.big}>
          {distance.toFixed(2)} km
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Time
        </Text>

        <Text style={styles.big}>
          {formatTime()}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Calories
        </Text>

        <Text style={styles.big}>
          {calories}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => setTracking(true)}
        >
          <Text style={styles.buttonText}>
            Start
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pauseButton}
          onPress={() => setTracking(false)}
        >
          <Text style={styles.buttonText}>
            Pause
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          setTracking(false);
          setDistance(0);
          setTime(0);
        }}
      >
        <Text style={styles.buttonText}>
          Reset Activity
        </Text>
      </TouchableOpacity>
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
    fontWeight: "700",
    marginBottom: 20,
  },

  activityCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  activityTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  goal: {
    color: "#94A3B8",
    marginTop: 8,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },

  label: {
    color: "#94A3B8",
    marginBottom: 10,
  },

  big: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  startButton: {
    flex: 1,
    backgroundColor: "#22C55E",
    padding: 16,
    borderRadius: 15,
    marginRight: 10,
  },

  pauseButton: {
    flex: 1,
    backgroundColor: "#F59E0B",
    padding: 16,
    borderRadius: 15,
  },

  resetButton: {
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 15,
    marginTop: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
  },
});