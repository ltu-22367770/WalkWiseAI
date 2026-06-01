import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    {
      icon: "👤",
      title: "Personal Information",
      route: "/main/profile-details",
    },
    {
      icon: "🎯",
      title: "Goals",
      route: "/main/goals",
    },
    {
      icon: "🔔",
      title: "Reminders",
      route: "/main/reminders",
    },
    {
      icon: "⌚",
      title: "Connected Devices",
      route: "/main/devices",
    },
    {
      icon: "❤️",
      title: "Health Data",
      route: "/main/health-report",
    },
    {
      icon: "🏆",
      title: "Achievements",
      route: "/main/achievements",
    },
    {
      icon: "⚙️",
      title: "Settings",
      route: "/main/settings",
    },
    {
      icon: "❓",
      title: "Help & Support",
      route: "/main/support",
    },
    {
      icon: "ℹ️",
      title: "About WalkWise AI",
      route: "/main/about",
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
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>V</Text>
        </View>

        <Text style={styles.name}>
          Vihar Patel
        </Text>

        <Text style={styles.email}>
          vihar@email.com
        </Text>
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() =>
              router.push(item.route as any)
            }
          >
            <View style={styles.leftSection}>
              <Text style={styles.icon}>
                {item.icon}
              </Text>

              <Text style={styles.menuText}>
                {item.title}
              </Text>
            </View>

            <Text style={styles.arrow}>
              ›
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "700",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  email: {
    color: "#94A3B8",
    marginTop: 4,
    fontSize: 14,
  },

  menuContainer: {
    backgroundColor: "#101A44",
    borderRadius: 22,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#1A275E",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 18,
    marginRight: 12,
  },

  menuText: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  arrow: {
    color: "#94A3B8",
    fontSize: 24,
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 18,
    marginTop: 25,
  },

  logoutText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});