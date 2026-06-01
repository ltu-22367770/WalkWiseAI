import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as Battery from "expo-battery";

export default function BatteryScreen() {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [batteryState, setBatteryState] =
    useState<Battery.BatteryState | null>(null);

  useEffect(() => {
    loadBatteryInfo();

    const levelSubscription =
      Battery.addBatteryLevelListener(({ batteryLevel }) => {
        setBatteryLevel(batteryLevel);
      });

    const stateSubscription =
      Battery.addBatteryStateListener(({ batteryState }) => {
        setBatteryState(batteryState);
      });

    return () => {
      levelSubscription.remove();
      stateSubscription.remove();
    };
  }, []);

  const loadBatteryInfo = async () => {
    const level = await Battery.getBatteryLevelAsync();
    const state = await Battery.getBatteryStateAsync();

    setBatteryLevel(level);
    setBatteryState(state);
  };

  const getBatteryStatus = () => {
    switch (batteryState) {
      case Battery.BatteryState.CHARGING:
        return "⚡ Charging";
      case Battery.BatteryState.FULL:
        return "✅ Fully Charged";
      case Battery.BatteryState.UNPLUGGED:
        return "🔋 On Battery";
      default:
        return "Unknown";
    }
  };

  const batteryPercent = batteryLevel
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        🔋 Battery Analytics
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Current Battery
        </Text>

        <Text style={styles.bigNumber}>
          {batteryPercent}%
        </Text>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${batteryPercent}%`,
                backgroundColor:
                  batteryPercent > 50
                    ? "#22C55E"
                    : batteryPercent > 20
                    ? "#F59E0B"
                    : "#EF4444",
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Battery Status
        </Text>

        <Text style={styles.info}>
          {getBatteryStatus()}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Battery Health Insights
        </Text>

        {batteryPercent > 50 ? (
          <Text style={styles.good}>
            ✅ Battery level is healthy.
          </Text>
        ) : batteryPercent > 20 ? (
          <Text style={styles.warning}>
            ⚠ Consider charging soon.
          </Text>
        ) : (
          <Text style={styles.danger}>
            🚨 Low Battery Warning!
          </Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          AI Recommendation
        </Text>

        <Text style={styles.info}>
          Keep battery above 20% while
          using GPS and posture tracking
          for the best WalkWise AI
          experience.
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

  loadingContainer: {
    flex: 1,
    backgroundColor: "#050B2C",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 16,
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

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  bigNumber: {
    color: "#6C63FF",
    fontSize: 50,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
  },

  progressBackground: {
    height: 14,
    backgroundColor: "#1E293B",
    borderRadius: 10,
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
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
  },

  warning: {
    color: "#F59E0B",
    fontSize: 18,
    fontWeight: "700",
  },

  danger: {
    color: "#EF4444",
    fontSize: 18,
    fontWeight: "700",
  },
});