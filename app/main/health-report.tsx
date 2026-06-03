import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import { AnimatedCircularProgress }
from "react-native-circular-progress";

export default function HealthReportScreen() {

  const router = useRouter();

  const walkScore = 86;
  const postureScore = 82;
  const battery = 94;
  const distance = 5.6;
  const calories = 320;

  const overallScore =
    Math.round(
      (walkScore + postureScore) / 2
    );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >

      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <View style={styles.backCircle}>
            <Text style={styles.backText}>
              ←
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>
          Health Report
        </Text>
      </View>

      {/* Score Card */}

      <View style={styles.scoreCard}>

        <Text style={styles.scoreLabel}>
          Today's Health Score
        </Text>

        <AnimatedCircularProgress
          size={170}
          width={14}
          fill={overallScore}
          tintColor="#22C55E"
          backgroundColor="#1E293B"
          rotation={0}
        >
          {() => (
            <Text style={styles.scoreText}>
              {overallScore}%
            </Text>
          )}
        </AnimatedCircularProgress>

        <Text style={styles.excellent}>
          Excellent Progress
        </Text>

      </View>

      {/* Stats Row */}

      <View style={styles.statsRow}>

        <View style={styles.statCard}>
          <Text style={styles.icon}>
            🚶
          </Text>

          <Text style={styles.statValue}>
            {distance}
          </Text>

          <Text style={styles.statLabel}>
            KM Walked
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.icon}>
            🔥
          </Text>

          <Text style={styles.statValue}>
            {calories}
          </Text>

          <Text style={styles.statLabel}>
            Calories
          </Text>
        </View>

      </View>

      {/* Posture */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          🧍 Posture Analysis
        </Text>

        <Text style={styles.largeValue}>
          {postureScore}%
        </Text>

        <Text style={styles.good}>
          Good posture maintained
        </Text>

      </View>

      {/* Device */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          🔋 Device Readiness
        </Text>

        <Text style={styles.largeValue}>
          {battery}%
        </Text>

        <Text style={styles.good}>
          Ready for activity tracking
        </Text>

      </View>

      {/* AI Summary */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          🤖 AI Wellness Summary
        </Text>

        <Text style={styles.info}>
          You maintained good posture,
          completed most walking goals,
          and demonstrated healthy
          activity levels today.
          Continue this consistency for
          long-term health benefits.
        </Text>

      </View>

      {/* Improvement Plan */}

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          💡 Improvement Plan
        </Text>

        <Text style={styles.info}>
          ✓ Walk at least 8,000 steps daily
        </Text>

        <Text style={styles.info}>
          ✓ Take posture breaks every hour
        </Text>

        <Text style={styles.info}>
          ✓ Stay hydrated throughout the day
        </Text>

        <Text style={styles.info}>
          ✓ Maintain consistent walking habits
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  backCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#101A44",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  backText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },

  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
  },

  scoreCard: {
    backgroundColor: "#101A44",
    borderRadius: 28,
    padding: 25,
    alignItems: "center",
    marginBottom: 20,
  },

  scoreLabel: {
    color: "#94A3B8",
    marginBottom: 20,
  },

  scoreText: {
    color: "#FFF",
    fontSize: 38,
    fontWeight: "700",
  },

  excellent: {
    color: "#22C55E",
    fontWeight: "700",
    marginTop: 20,
    fontSize: 18,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  icon: {
    fontSize: 30,
  },

  statValue: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },

  statLabel: {
    color: "#94A3B8",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  largeValue: {
    color: "#6C63FF",
    fontSize: 34,
    fontWeight: "700",
  },

  good: {
    color: "#22C55E",
    marginTop: 8,
    fontWeight: "700",
  },

  info: {
    color: "#D6D8E6",
    lineHeight: 24,
  },

});