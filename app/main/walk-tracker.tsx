import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";

export default function WalkTrackerScreen() {
  const [tracking, setTracking] = useState(false);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (tracking) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [tracking]);

  const startTracking = async () => {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") return;

    setTracking(true);
  };

  const stopTracking = () => {
    setTracking(false);
  };

  const resetTracking = () => {
    setTracking(false);
    setDistance(0);
    setTime(0);
  };

  const formatTime = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚶 Walk Tracker</Text>

      <View style={styles.card}>
        <Text style={styles.score}>{distance.toFixed(2)} km</Text>
        <Text style={styles.label}>Distance Travelled</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.score}>{formatTime()}</Text>
        <Text style={styles.label}>Walk Duration</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.score}>
          {Math.round(distance * 60)}
        </Text>
        <Text style={styles.label}>Calories Burned</Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={startTracking}
      >
        <Text style={styles.btnText}>▶ Start Walk</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.stopBtn}
        onPress={stopTracking}
      >
        <Text style={styles.btnText}>⏸ Pause Walk</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resetBtn}
        onPress={resetTracking}
      >
        <Text style={styles.btnText}>⏹ Reset</Text>
      </TouchableOpacity>

      <View style={styles.statusCard}>
        <Text style={styles.status}>
          Status: {tracking ? "Tracking..." : "Stopped"}
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
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 25,
    marginBottom: 15,
  },

  score: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  label: {
    color: "#A8B0D3",
    marginTop: 5,
    fontSize: 16,
  },

  startBtn: {
    backgroundColor: "#6C63FF",
    padding: 18,
    borderRadius: 15,
    marginTop: 10,
  },

  stopBtn: {
    backgroundColor: "#FF9800",
    padding: 18,
    borderRadius: 15,
    marginTop: 10,
  },

  resetBtn: {
    backgroundColor: "#F44336",
    padding: 18,
    borderRadius: 15,
    marginTop: 10,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  statusCard: {
    backgroundColor: "#101A44",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },

  status: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});