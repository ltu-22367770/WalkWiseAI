import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

export default function AchievementsScreen() {
  const router = useRouter();

  const completedAchievements = [
    {
      icon: "🏆",
      title: "Goal Setter",
      description: "Created your first goal",
    },
    {
      icon: "🚶",
      title: "First Walk",
      description: "Completed your first walk",
    },
    {
      icon: "🔥",
      title: "7 Day Streak",
      description: "Walked for 7 consecutive days",
    },
  ];

  const lockedAchievements = [
    {
      icon: "🔒",
      title: "Walk 100 km",
      description:
        "Reach a total distance of 100 km",
    },
    {
      icon: "🔒",
      title: "Burn 5000 Calories",
      description:
        "Burn 5000 calories in total",
    },
    {
      icon: "🔒",
      title: "Complete 50 Activities",
      description:
        "Finish 50 tracked activities",
    },
    {
      icon: "🔒",
      title: "Posture Master",
      description:
        "Maintain excellent posture consistently",
    },
  ];

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
          onPress={() =>
            router.back()
          }
        >
          <View style={styles.backCircle}>
            <Text style={styles.backText}>
              ←
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>
          Achievements
        </Text>
      </View>

      {/* Summary Card */}

      <View style={styles.summaryCard}>
        <Text style={styles.summaryNumber}>
          {completedAchievements.length}
        </Text>

        <Text style={styles.summaryText}>
          Achievements Unlocked
        </Text>
      </View>

      {/* Completed */}

      <Text style={styles.sectionTitle}>
        Completed
      </Text>

      {completedAchievements.map(
        (item, index) => (
          <View
            key={index}
            style={styles.completedCard}
          >
            <Text style={styles.icon}>
              {item.icon}
            </Text>

            <View style={styles.content}>
              <Text
                style={styles.cardTitle}
              >
                {item.title}
              </Text>

              <Text
                style={styles.cardText}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )
      )}

      {/* Locked */}

      <Text style={styles.sectionTitle}>
        Locked
      </Text>

      {lockedAchievements.map(
        (item, index) => (
          <View
            key={index}
            style={styles.lockedCard}
          >
            <Text style={styles.icon}>
              {item.icon}
            </Text>

            <View style={styles.content}>
              <Text
                style={styles.cardTitle}
              >
                {item.title}
              </Text>

              <Text
                style={styles.cardText}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )
      )}
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
    fontSize: 24,
    fontWeight: "700",
  },

  summaryCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginBottom: 25,
  },

  summaryNumber: {
    color: "#22C55E",
    fontSize: 42,
    fontWeight: "700",
  },

  summaryText: {
    color: "#94A3B8",
    marginTop: 6,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 10,
  },

  completedCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#22C55E",
  },

  lockedCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    opacity: 0.75,
  },

  icon: {
    fontSize: 30,
    marginRight: 15,
  },

  content: {
    flex: 1,
  },

  cardTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },

  cardText: {
    color: "#94A3B8",
    marginTop: 4,
  },
});