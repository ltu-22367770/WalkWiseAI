import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";

export default function SettingsScreen() {
  const [walkReminder, setWalkReminder] =
    useState(true);

  const [postureAlert, setPostureAlert] =
    useState(true);

  const [hydrationReminder, setHydrationReminder] =
    useState(true);

  const [aiCoach, setAiCoach] =
    useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        ⚙ Settings
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Notifications
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>
            Daily Walk Reminder
          </Text>

          <Switch
            value={walkReminder}
            onValueChange={setWalkReminder}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Posture Alerts
          </Text>

          <Switch
            value={postureAlert}
            onValueChange={setPostureAlert}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Hydration Reminder
          </Text>

          <Switch
            value={hydrationReminder}
            onValueChange={setHydrationReminder}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            AI Coach Notifications
          </Text>

          <Switch
            value={aiCoach}
            onValueChange={setAiCoach}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Tracking Preferences
        </Text>

        <Text style={styles.info}>
          • GPS Tracking Enabled
        </Text>

        <Text style={styles.info}>
          • Real-Time Posture Analysis
        </Text>

        <Text style={styles.info}>
          • Health Reports Enabled
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          About WalkWise AI
        </Text>

        <Text style={styles.info}>
          WalkWise AI helps users improve
          walking habits, monitor posture,
          track activity and receive
          intelligent health insights.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          App Version
        </Text>

        <Text style={styles.info}>
          WalkWise AI v1.0.0
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

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  label: {
    color: "#D6D8E6",
    fontSize: 16,
  },

  info: {
    color: "#D6D8E6",
    fontSize: 15,
    lineHeight: 24,
  },
});