import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";

import React, {
  useEffect,
  useState,
} from "react";

import {
  doc,
  getDoc,
} from "firebase/firestore";

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

  const [fullName, setFullName] =
    useState("User");

  const [email, setEmail] =
    useState("");

  const [initial, setInitial] =
    useState("U");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const user =
        auth.currentUser;

      if (!user) return;

      setEmail(
        user.email || ""
      );

      const userDoc =
        await getDoc(
          doc(
            db,
            "users",
            user.uid
          )
        );

      if (
        userDoc.exists()
      ) {

        const data =
          userDoc.data();

        const name =
          data.fullName ||
          "User";

        setFullName(
          name
        );

        setInitial(
          name
            .charAt(0)
            .toUpperCase()
        );
      }

    } catch (error) {

      console.log(error);

    }
  };

  const handleLogout = async () => {

    await signOut(auth);

    router.replace(
      "/auth/login"
    );
  };

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

       <View style={styles.header}>

          <TouchableOpacity
            onPress={() =>
              router.replace("/main/dashboard")
            }
          >
            <View style={styles.backCircle}>
              <Text style={styles.backText}>
                ←
              </Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>
            
          </Text>

        </View>

      <View style={styles.profileSection}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {initial}
          </Text>
        </View>

        <Text style={styles.name}>
          {fullName}
        </Text>

        <Text style={styles.email}>
          {email}
        </Text>

      </View>

      <View style={styles.menuContainer}>

        {menuItems.map(
          (item, index) => (

            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() =>
                router.push(
                  item.route as any
                )
              }
            >

              <View
                style={
                  styles.leftSection
                }
              >

                <Text
                  style={styles.icon}
                >
                  {item.icon}
                </Text>

                <Text
                  style={
                    styles.menuText
                  }
                >
                  {item.title}
                </Text>

              </View>

              <Text
                style={styles.arrow}
              >
                ›
              </Text>

            </TouchableOpacity>

          )
        )}

      </View>

      <TouchableOpacity
        onPress={handleLogout}
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
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
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