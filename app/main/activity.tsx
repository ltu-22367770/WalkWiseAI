import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { auth, db } from "../firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

let MapView: any = null;
let Marker: any = null;

if (Platform.OS !== "web") {
  const Maps = require("react-native-maps");
  MapView = Maps.default;
  Marker = Maps.Marker;
}

export default function ActivityScreen() {
  const router = useRouter();

  const [activities, setActivities] =
  useState<any[]>([]);

useEffect(() => {
  loadActivities();
}, []);

const loadActivities = async () => {
  try {
    const user = auth.currentUser;

    if (!user) return;

    const snapshot =
      await getDocs(
        collection(
          db,
          "users",
          user.uid,
          "activities"
        )
      );

    const activityData =
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    setActivities(activityData);

  } catch (error) {
    console.log(
      "Load Activities Error:",
      error
    );
  }
};

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
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

      {/* MAP */}
      <View style={styles.mapContainer}>
        {Platform.OS !== "web" && MapView ? (
          <MapView
            style={styles.map}
            showsUserLocation
            initialRegion={{
              latitude: -37.8136,
              longitude: 144.9631,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              coordinate={{
                latitude: -37.8136,
                longitude: 144.9631,
              }}
              title="Current Location"
            />
          </MapView>
        ) : (
          <View style={styles.webMap}>
            <Text style={styles.webMapText}>
              Live GPS Map
            </Text>
          </View>
        )}
      </View>

      {/* STATS */}
      <View style={styles.statsCard}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>5.42</Text>
          <Text style={styles.statLabel}>
            Total Distance
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statValue}>
            00:52:16
          </Text>
          <Text style={styles.statLabel}>
            Total Duration
          </Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.statValue}>510</Text>
          <Text style={styles.statLabel}>
            Total Calories
          </Text>
        </View>
      </View>

      {/* ACTIVITIES */}
      <Text style={styles.sectionTitle}>
        Activities
      </Text>
        {activities.length > 0 ? (
          activities.map(
            (activity, index) => (
              <View
                  key={index}
                  style={styles.activityCard}
                >
        <View
          style={[
            styles.iconCircle,
            {
              backgroundColor:
                "#6C63FF",
            },
          ]}
        >
          <Text style={styles.icon}>
            🚶
          </Text>
        </View>

        <View
          style={styles.activityInfo}
        >
          <Text
            style={
              styles.activityTitle
            }
          >
            {activity.title}
          </Text>

          <Text
            style={
              styles.activityText
            }
          >
            {activity.distance} km •{" "}
            {activity.duration}
          </Text>

          <Text
            style={
              styles.activityText
            }
          >
            Goal: {activity.goal}
          </Text>
        </View>

        <TouchableOpacity
          style={
            styles.playButton
          }
        >
          <Text
            style={
              styles.playText
            }
          >
            ✓
          </Text>
        </TouchableOpacity>
      </View>
    )
  )
) : (
  <View
    style={styles.activityCard}
  >
    <Text
      style={{
        color: "#FFFFFF",
      }}
    >
      No activities yet.
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

  header: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

   title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
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

  mapContainer: {
    height: 280,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
  },

  map: {
    flex: 1,
  },

  webMap: {
    flex: 1,
    backgroundColor: "#101A44",
    justifyContent: "center",
    alignItems: "center",
  },

  webMapText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  statsCard: {
    backgroundColor: "#101A44",
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 18,
    marginBottom: 25,
  },

  stat: {
    alignItems: "center",
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  statLabel: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 5,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },

  activityCard: {
    backgroundColor: "#101A44",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  iconCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 22,
  },

  activityInfo: {
    flex: 1,
    marginLeft: 15,
  },

  activityTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  activityText: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 3,
  },

  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1A275E",
    justifyContent: "center",
    alignItems: "center",
  },

  playText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});