import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function AnalyticsScreen() {
  const [selectedTab, setSelectedTab] =
    useState("Overview");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      {/* Header */}
      <Text style={styles.title}>
        📊 Insights
      </Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Overview" &&
              styles.activeTab,
          ]}
          onPress={() =>
            setSelectedTab("Overview")
          }
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Overview" &&
                styles.activeTabText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Steps" &&
              styles.activeTab,
          ]}
          onPress={() =>
            setSelectedTab("Steps")
          }
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Steps" &&
                styles.activeTabText,
            ]}
          >
            Steps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Posture" &&
              styles.activeTab,
          ]}
          onPress={() =>
            setSelectedTab("Posture")
          }
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Posture" &&
                styles.activeTabText,
            ]}
          >
            Posture
          </Text>
        </TouchableOpacity>
      </View>

      {/* Filter */}
      <Text style={styles.weekText}>
        This Week ▼
      </Text>

      {/* Stats Grid */}
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>
            Best Day
          </Text>

          <Text style={styles.cardValue}>
            12,345
          </Text>

          <Text style={styles.cardSub}>
            steps
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>
            Longest Walk
          </Text>

          <Text style={styles.cardValue}>
            6.2 km
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>
            Calories Burned
          </Text>

          <Text style={styles.cardValue}>
            2,450
          </Text>

          <Text style={styles.redText}>
            +15%
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>
            Active Time
          </Text>

          <Text style={styles.cardValue}>
            5h 30m
          </Text>

          <Text style={styles.greenText}>
            +10%
          </Text>
        </View>
      </View>

      {/* Weekly Progress */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>
          Weekly Progress
        </Text>

        <View style={styles.chartArea}>
          <View
            style={[
              styles.point,
              { left: "5%", top: 90 },
            ]}
          />
          <View
            style={[
              styles.point,
              { left: "20%", top: 70 },
            ]}
          />
          <View
            style={[
              styles.point,
              { left: "35%", top: 30 },
            ]}
          />
          <View
            style={[
              styles.point,
              { left: "50%", top: 55 },
            ]}
          />
          <View
            style={[
              styles.point,
              { left: "65%", top: 20 },
            ]}
          />
          <View
            style={[
              styles.point,
              { left: "80%", top: 40 },
            ]}
          />
          <View
            style={[
              styles.point,
              { left: "92%", top: 15 },
            ]}
          />
        </View>

        <View style={styles.daysRow}>
          <Text style={styles.day}>
            Mon
          </Text>
          <Text style={styles.day}>
            Tue
          </Text>
          <Text style={styles.day}>
            Wed
          </Text>
          <Text style={styles.day}>
            Thu
          </Text>
          <Text style={styles.day}>
            Fri
          </Text>
          <Text style={styles.day}>
            Sat
          </Text>
          <Text style={styles.day}>
            Sun
          </Text>
        </View>
      </View>

      {/* Dynamic Content */}
      {selectedTab === "Steps" && (
        <View style={styles.extraCard}>
          <Text style={styles.extraTitle}>
            🚶 Step Analysis
          </Text>

          <Text style={styles.extraText}>
            Average Daily Steps: 8,750
          </Text>

          <Text style={styles.extraText}>
            Goal Completion: 87%
          </Text>
        </View>
      )}

      {selectedTab === "Posture" && (
        <View style={styles.extraCard}>
          <Text style={styles.extraTitle}>
            🧍 Posture Analysis
          </Text>

          <Text style={styles.extraText}>
            Current Score: 82/100
          </Text>

          <Text style={styles.extraText}>
            Improvement: +8%
          </Text>

          <Text style={styles.extraText}>
            AI Recommendation:
            Maintain shoulder alignment.
          </Text>
        </View>
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

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#101A44",
    borderRadius: 15,
    padding: 4,
    marginBottom: 20,
  },

  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
  },

  activeTab: {
    backgroundColor: "#6C63FF",
  },

  tabText: {
    textAlign: "center",
    color: "#94A3B8",
    fontWeight: "600",
  },

  activeTabText: {
    color: "#FFFFFF",
  },

  weekText: {
    color: "#FFFFFF",
    marginBottom: 15,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#101A44",
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
  },

  cardLabel: {
    color: "#94A3B8",
    fontSize: 13,
  },

  cardValue: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
  },

  cardSub: {
    color: "#94A3B8",
    marginTop: 4,
  },

  greenText: {
    color: "#22C55E",
    marginTop: 8,
    fontWeight: "700",
  },

  redText: {
    color: "#EF4444",
    marginTop: 8,
    fontWeight: "700",
  },

  chartCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },

  chartTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },

  chartArea: {
    height: 120,
    position: "relative",
  },

  point: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C2FF",
  },

  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  day: {
    color: "#94A3B8",
    fontSize: 12,
  },

  extraCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  extraTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  extraText: {
    color: "#D6D8E6",
    marginBottom: 8,
    lineHeight: 22,
  },
});