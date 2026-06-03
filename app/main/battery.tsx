import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import * as Battery from "expo-battery";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useRouter } from "expo-router";

export default function BatteryScreen() {
  const router = useRouter();

  const [batteryLevel, setBatteryLevel] =
    useState<number | null>(null);

  const [batteryState, setBatteryState] =
    useState<Battery.BatteryState | null>(null);

  const [batterySaver, setBatterySaver] =
    useState(false);

  useEffect(() => {
    loadBatteryInfo();

    const levelSubscription =
      Battery.addBatteryLevelListener(
        ({ batteryLevel }) => {
          setBatteryLevel(batteryLevel);
        }
      );

    const stateSubscription =
      Battery.addBatteryStateListener(
        ({ batteryState }) => {
          setBatteryState(batteryState);
        }
      );

    return () => {
      levelSubscription.remove();
      stateSubscription.remove();
    };
  }, []);

  const loadBatteryInfo = async () => {
    const level =
      await Battery.getBatteryLevelAsync();

    const state =
      await Battery.getBatteryStateAsync();

    setBatteryLevel(level);
    setBatteryState(state);
  };

  const getBatteryStatus = () => {
    switch (batteryState) {
      case Battery.BatteryState.CHARGING:
        return "Charging";

      case Battery.BatteryState.FULL:
        return "Fully Charged";

      case Battery.BatteryState.UNPLUGGED:
        return "On Battery";

      default:
        return "Unknown";
    }
  };

  const batteryPercent =
    batteryLevel !== null
      ? Math.round(batteryLevel * 100)
      : 0;

  if (batteryLevel === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#6C63FF"
        />

        <Text style={styles.loadingText}>
          Loading Battery Information...
        </Text>
      </View>
    );
  }

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
          Battery & Usage
        </Text>
      </View>

      {/* Battery Level */}

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Battery Level
        </Text>

        <View style={styles.batteryRow}>
          <View>
            <Text style={styles.bigBattery}>
              {batteryPercent}%
            </Text>

            <Text style={styles.status}>
              {getBatteryStatus()}
            </Text>
          </View>

          <AnimatedCircularProgress
            size={120}
            width={10}
            fill={batteryPercent}
            tintColor="#22C55E"
            backgroundColor="#1E293B"
            rotation={0}
          >
            {() => (
              <Text style={styles.circleText}>
                {batteryPercent}%
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>

      {/* Battery Impact */}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Battery Impact
        </Text>

        <View style={styles.impactRow}>
          <Text style={styles.impactLabel}>
            GPS Tracking
          </Text>

          <Text style={styles.high}>
            High
          </Text>
        </View>

        <View style={styles.impactRow}>
          <Text style={styles.impactLabel}>
            Posture Sensors
          </Text>

          <Text style={styles.medium}>
            Medium
          </Text>
        </View>

        <View style={styles.impactRow}>
          <Text style={styles.impactLabel}>
            Screen
          </Text>

          <Text style={styles.medium}>
            Medium
          </Text>
        </View>

        <View style={styles.impactRow}>
          <Text style={styles.impactLabel}>
            Background Sync
          </Text>

          <Text style={styles.low}>
            Low
          </Text>
        </View>
      </View>

      {/* Battery Saver */}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Battery Saver Mode
        </Text>

        <Text style={styles.info}>
          Reduce background activity
          to save battery life.
        </Text>

        <TouchableOpacity
          style={[
            styles.saverButton,
            {
              backgroundColor:
                batterySaver
                  ? "#22C55E"
                  : "#6C63FF",
            },
          ]}
          onPress={() =>
            setBatterySaver(
              !batterySaver
            )
          }
        >
          <Text style={styles.saverText}>
            {batterySaver
              ? "Enabled"
              : "Enable"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* AI Insight */}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          🤖 AI Battery Insight
        </Text>

        <Text style={styles.info}>
          GPS tracking currently has
          the highest battery impact.
          Enable Battery Saver Mode
          during long walks to extend
          battery life.
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

  loadingContainer: {
    flex: 1,
    backgroundColor: "#050B2C",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#FFFFFF",
    marginTop: 15,
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
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },

  sectionTitle: {
    color: "#94A3B8",
    fontSize: 15,
    marginBottom: 15,
  },

  batteryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bigBattery: {
    color: "#FFFFFF",
    fontSize: 44,
    fontWeight: "700",
  },

  status: {
    color: "#22C55E",
    marginTop: 6,
    fontSize: 14,
  },

  circleText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  impactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  impactLabel: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  high: {
    color: "#EF4444",
    fontWeight: "700",
  },

  medium: {
    color: "#F59E0B",
    fontWeight: "700",
  },

  low: {
    color: "#22C55E",
    fontWeight: "700",
  },

  info: {
    color: "#CBD5E1",
    lineHeight: 24,
  },

  saverButton: {
    marginTop: 15,
    padding: 14,
    borderRadius: 14,
  },

  saverText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
  },
});