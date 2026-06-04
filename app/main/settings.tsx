import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function SettingsScreen() {

  const router = useRouter();

  const [notifications, setNotifications] =
    useState(true);

  const [darkMode, setDarkMode] =
    useState(true);

  const [useMiles, setUseMiles] =
    useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {

      const savedTheme =
        await AsyncStorage.getItem("theme");

      const savedNotifications =
        await AsyncStorage.getItem("notifications");

      const savedUnits =
        await AsyncStorage.getItem("units");

      if (savedTheme === "light") {
        setDarkMode(false);
      }

      if (savedNotifications === "false") {
        setNotifications(false);
      }

      if (savedUnits === "miles") {
        setUseMiles(true);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const toggleDarkMode = async (
    value: boolean
  ) => {

    setDarkMode(value);

    await AsyncStorage.setItem(
      "theme",
      value ? "dark" : "light"
    );
  };

  const toggleNotifications = async (
    value: boolean
  ) => {

    setNotifications(value);

    await AsyncStorage.setItem(
      "notifications",
      value.toString()
    );
  };

  const toggleUnits = async (
    value: boolean
  ) => {

    setUseMiles(value);

    await AsyncStorage.setItem(
      "units",
      value ? "miles" : "km"
    );
  };

  const logout = async () => {

    await signOut(auth);

    router.replace("/auth/login");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 100,
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
          Settings
        </Text>

      </View>

      {/* Preferences */}

      <Text style={styles.section}>
        Preferences
      </Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>
            🔔 Notifications
          </Text>

          <Switch
            value={notifications}
            onValueChange={
              toggleNotifications
            }
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            🌙 Dark Mode
          </Text>

          <Switch
            value={darkMode}
            onValueChange={
              toggleDarkMode
            }
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            📏 Use Miles
          </Text>

          <Switch
            value={useMiles}
            onValueChange={
              toggleUnits
            }
          />
        </View>

      </View>

      {/* Account */}

      <Text style={styles.section}>
        Account
      </Text>

      <View style={styles.card}>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            router.push(
              "/main/profile-details"
            )
          }
        >
          <Text style={styles.menuText}>
            👤 Personal Information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Password update feature"
            )
          }
        >
          <Text style={styles.menuText}>
            🔑 Change Password
          </Text>
        </TouchableOpacity>

      </View>

      {/* About */}

      <Text style={styles.section}>
        About
      </Text>

      <View style={styles.card}>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            Alert.alert(
              "WalkWise AI",
              "Version 1.0.0\n\nAI-powered walking companion with activity tracking, posture monitoring, health insights and goal management."
            )
          }
        >
          <Text style={styles.menuText}>
            ℹ️ About WalkWise AI
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            Alert.alert(
              "Privacy Policy",
              "User data is securely stored using Firebase Authentication and Firestore."
            )
          }
        >
          <Text style={styles.menuText}>
            🔒 Privacy Policy
          </Text>
        </TouchableOpacity>

      </View>

      {/* Logout */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
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
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
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

  section: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  menuItem: {
    paddingVertical: 12,
  },

  menuText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 18,
    marginTop: 20,
  },

  logoutText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

});