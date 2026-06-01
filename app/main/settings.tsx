import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";

export default function SettingsScreen() {
  const [autoStart, setAutoStart] = useState(true);
  const [postureAlerts, setPostureAlerts] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      {/* Header */}
      <Text style={styles.title}>
        ⚙ Settings
      </Text>

      {/* General */}
      <Text style={styles.sectionTitle}>
        General
      </Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>
            📏 Units
          </Text>

          <View style={styles.rightSection}>
            <Text style={styles.value}>
              Metric (km)
            </Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.label}>
            🌙 Theme
          </Text>

          <View style={styles.rightSection}>
            <Text style={styles.value}>
              Dark
            </Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowNoBorder}>
          <Text style={styles.label}>
            🌍 Language
          </Text>

          <View style={styles.rightSection}>
            <Text style={styles.value}>
              English
            </Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>
        Preferences
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>
            🚶 Auto Start Tracking
          </Text>

          <Switch
            value={autoStart}
            onValueChange={setAutoStart}
            trackColor={{
              false: "#374151",
              true: "#22C55E",
            }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            🧍 Posture Alerts
          </Text>

          <Switch
            value={postureAlerts}
            onValueChange={setPostureAlerts}
            trackColor={{
              false: "#374151",
              true: "#22C55E",
            }}
          />
        </View>

        <View style={styles.rowNoBorder}>
          <Text style={styles.label}>
            📳 Vibration
          </Text>

          <Switch
            value={vibration}
            onValueChange={setVibration}
            trackColor={{
              false: "#374151",
              true: "#22C55E",
            }}
          />
        </View>
      </View>

      {/* Data & Storage */}
      <Text style={styles.sectionTitle}>
        Data & Storage
      </Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.rowNoBorder}>
          <Text style={styles.label}>
            🔄 Sync Now
          </Text>

          <Text style={styles.arrow}>
            ›
          </Text>
        </TouchableOpacity>
      </View>

      {/* App Info */}
      <Text style={styles.sectionTitle}>
        App Information
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Version
          </Text>

          <Text style={styles.value}>
            1.0.0
          </Text>
        </View>

        <View style={styles.rowNoBorder}>
          <Text style={styles.label}>
            WalkWise AI
          </Text>

          <Text style={styles.value}>
            Premium
          </Text>
        </View>
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

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 25,
  },

  sectionTitle: {
    color: "#94A3B8",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 18,
    marginBottom: 20,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2B59",
  },

  rowNoBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  value: {
    color: "#94A3B8",
    fontSize: 14,
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  arrow: {
    color: "#94A3B8",
    fontSize: 22,
    marginLeft: 10,
  },
});