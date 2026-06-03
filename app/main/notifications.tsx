import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useRouter } from "expo-router";

import { auth, db } from "../firebase";

import {
  collection,
  getDocs,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

export default function NotificationsScreen() {
  const router = useRouter();

  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const q = query(
        collection(
          db,
          "users",
          user.uid,
          "notifications"
        ),
        orderBy("createdAt", "desc")
      );

      const snapshot =
        await getDocs(q);

      const notificationData: any[] = [];

      snapshot.forEach((item) => {
        notificationData.push({
          id: item.id,
          ...item.data(),
        });
      });

      setNotifications(
        notificationData
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearAllNotifications =
    async () => {
      try {
        const user =
          auth.currentUser;

        if (!user) return;

        const snapshot =
          await getDocs(
            collection(
              db,
              "users",
              user.uid,
              "notifications"
            )
          );

        await Promise.all(
          snapshot.docs.map((doc) =>
            deleteDoc(doc.ref)
          )
        );

        setNotifications([]);

        Alert.alert(
          "Success",
          "All notifications cleared."
        );
      } catch (error) {
        console.log(error);
      }
    };

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
          <View
            style={styles.backCircle}
          >
            <Text
              style={styles.backText}
            >
              ←
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>
          Notifications
        </Text>
      </View>

      {/* Clear All */}

      {notifications.length >
        0 && (
        <TouchableOpacity
          style={
            styles.clearButton
          }
          onPress={
            clearAllNotifications
          }
        >
          <Text
            style={
              styles.clearButtonText
            }
          >
            Clear All
          </Text>
        </TouchableOpacity>
      )}

      {/* Empty State */}

      {notifications.length ===
      0 ? (
        <View
          style={
            styles.emptyCard
          }
        >
          <Text
            style={
              styles.emptyIcon
            }
          >
            🔔
          </Text>

          <Text
            style={
              styles.emptyTitle
            }
          >
            No Notifications
          </Text>

          <Text
            style={
              styles.emptyText
            }
          >
            Your notifications
            will appear here.
          </Text>
        </View>
      ) : (
        notifications.map(
          (
            item,
            index
          ) => (
            <View
              key={index}
              style={
                styles.notificationCard
              }
            >
              <View
                style={
                  styles.iconContainer
                }
              >
                <Text
                  style={
                    styles.icon
                  }
                >
                  {item.icon}
                </Text>
              </View>

              <View
                style={
                  styles.content
                }
              >
                <Text
                  style={
                    styles.notificationTitle
                  }
                >
                  {item.title}
                </Text>

                <Text
                  style={
                    styles.notificationText
                  }
                >
                  {item.message}
                </Text>
              </View>
            </View>
          )
        )
      )}
    </ScrollView>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#050B2C",
      paddingTop: 70,
      paddingHorizontal: 20,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },

    backCircle: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor:
        "#101A44",
      justifyContent:
        "center",
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
      fontSize: 28,
      fontWeight: "700",
    },

    clearButton: {
      backgroundColor:
        "#EF4444",
      padding: 14,
      borderRadius: 14,
      marginBottom: 20,
    },

    clearButtonText: {
      color: "#FFF",
      textAlign: "center",
      fontWeight: "700",
    },

    notificationCard: {
      backgroundColor:
        "#101A44",
      borderRadius: 20,
      padding: 18,
      marginBottom: 15,
      flexDirection: "row",
      alignItems: "center",
    },

    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor:
        "#6C63FF",
      justifyContent:
        "center",
      alignItems: "center",
    },

    icon: {
      fontSize: 22,
    },

    content: {
      flex: 1,
      marginLeft: 14,
    },

    notificationTitle: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "700",
    },

    notificationText: {
      color: "#94A3B8",
      marginTop: 4,
      lineHeight: 20,
    },

    emptyCard: {
      backgroundColor:
        "#101A44",
      borderRadius: 20,
      padding: 40,
      alignItems: "center",
      marginTop: 50,
    },

    emptyIcon: {
      fontSize: 50,
    },

    emptyTitle: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: "700",
      marginTop: 15,
    },

    emptyText: {
      color: "#94A3B8",
      marginTop: 10,
      textAlign: "center",
    },
  });