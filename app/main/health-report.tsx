import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function HealthReportScreen() {
  const walkScore = 86;
  const postureScore = 82;
  const battery = 94;
  const distance = 5.6;
  const calories = 320;

  const overallScore = Math.round(
    (walkScore + postureScore) / 2
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        📊 Health Report
      </Text>

      {/* Overall Score */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>
          Overall Health Score
        </Text>

        <Text style={styles.bigScore}>
          {overallScore}/100
        </Text>

        <Text style={styles.good}>
          Excellent Progress
        </Text>
      </View>

      {/* Walk Analysis */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          🚶 Walking Analysis
        </Text>

        <Text style={styles.info}>
          Walk Score: {walkScore}/100
        </Text>

        <Text style={styles.info}>
          Distance: {distance} km
        </Text>

        <Text style={styles.info}>
          Calories Burned: {calories}
        </Text>
      </View>

      {/* Posture Analysis */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          🧍 Posture Analysis
        </Text>

        <Text style={styles.info}>
          Posture Score: {postureScore}/100
        </Text>

        <Text style={styles.good}>
          Good posture maintained.
        </Text>
      </View>

      {/* Battery */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          🔋 Device Health
        </Text>

        <Text style={styles.info}>
          Battery: {battery}%
        </Text>

        <Text style={styles.good}>
          Device ready for activity tracking.
        </Text>
      </View>

      {/* AI Summary */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          🤖 AI Coach Summary
        </Text>

        <Text style={styles.info}>
          You maintained good posture and
          completed most of your daily
          walking goals. Continue walking
          consistently and maintain an
          upright posture for improved
          health outcomes.
        </Text>
      </View>

      {/* Recommendations */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          💡 Recommendations
        </Text>

        <Text style={styles.info}>
          • Walk at least 8,000 steps daily
        </Text>

        <Text style={styles.info}>
          • Maintain straight shoulders
        </Text>

        <Text style={styles.info}>
          • Take posture breaks every hour
        </Text>

        <Text style={styles.info}>
          • Keep battery above 20% when
          using GPS tracking
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
    fontWeight: "700",
    marginBottom: 20,
  },

  scoreCard: {
    backgroundColor: "#101A44",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    marginBottom: 20,
  },

  scoreLabel: {
    color: "#D6D8E6",
    fontSize: 18,
  },

  bigScore: {
    color: "#6C63FF",
    fontSize: 60,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  info: {
    color: "#D6D8E6",
    fontSize: 16,
    lineHeight: 24,
  },

  good: {
    color: "#22C55E",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
});