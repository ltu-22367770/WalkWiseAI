import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function NotificationsScreen() {
  const notifications = [
    {
      icon: "🧍",
      title: "Posture Alert",
      message: "You were slouching for too long.",
      time: "2m ago",
      color: "#EF4444",
    },
    {
      icon: "🚶",
      title: "Time to Move",
      message: "You've been inactive for 1 hour.",
      time: "30m ago",
      color: "#F59E0B",
    },
    {
      icon: "🎯",
      title: "Daily Goal Achieved",
      message: "Great job! You reached your daily step goal.",
      time: "1h ago",
      color: "#22C55E",
    },
    {
      icon: "💧",
      title: "Hydration Reminder",
      message: "Don't forget to drink water.",
      time: "2h ago",
      color: "#3B82F6",
    },
    {
      icon: "🤖",
      title: "AI Coach Insight",
      message: "Your posture improved by 12% today.",
      time: "Today",
      color: "#8B5CF6",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Notifications
      </Text>

      {notifications.map((item, index) => (
        <View
          key={index}
          style={styles.notificationCard}
        >
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: item.color,
              },
            ]}
          >
            <Text style={styles.icon}>
              {item.icon}
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.notificationTitle}>
              {item.title}
            </Text>

            <Text style={styles.notificationText}>
              {item.message}
            </Text>
          </View>

          <Text style={styles.time}>
            {item.time}
          </Text>
        </View>
      ))}

      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.viewAllText}>
          View All
        </Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 25,
  },

  notificationCard: {
    backgroundColor: "#101A44",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 20,
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  notificationTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  notificationText: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 3,
  },

  time: {
    color: "#64748B",
    fontSize: 12,
  },

  viewAll: {
    backgroundColor: "#101A44",
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
    marginBottom: 40,
  },

  viewAllText: {
    color: "#8B5CF6",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});