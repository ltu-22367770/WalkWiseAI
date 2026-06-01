import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

let MapView: any = null;
let Marker: any = null;

if (Platform.OS !== "web") {
  const Maps = require("react-native-maps");
  MapView = Maps.default;
  Marker = Maps.Marker;
}

export default function ActivityScreen() {
  const router = useRouter();

  const activities = [
    {
      title: "Morning Walk",
      distance: "2.5 km",
      duration: "00:28:15",
      time: "Today, 7:30 AM",
      icon: "🌅",
      routeColor: "#8B5CF6",
      goal: "2.5 km",
    },
    {
      title: "Evening Walk",
      distance: "3.2 km",
      duration: "00:35:40",
      time: "Today, 6:15 PM",
      icon: "🌙",
      routeColor: "#22C55E",
      goal: "3.2 km",
    },
    {
      title: "Park Loop",
      distance: "4.0 km",
      duration: "00:48:20",
      time: "May 10, 2025",
      icon: "🌳",
      routeColor: "#F59E0B",
      goal: "4.0 km",
    },
    {
      title: "Weekend Hike",
      distance: "6.0 km",
      duration: "01:12:05",
      time: "May 8, 2025",
      icon: "🥾",
      routeColor: "#3B82F6",
      goal: "6.0 km",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Text style={styles.header}>🗺 Activities & GPS</Text>

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

      {activities.map((activity, index) => (
        <View
          key={index}
          style={styles.activityCard}
        >
          <View
            style={[
              styles.iconCircle,
              {
                backgroundColor:
                  activity.routeColor,
              },
            ]}
          >
            <Text style={styles.icon}>
              {activity.icon}
            </Text>
          </View>

          <View style={styles.activityInfo}>
            <Text style={styles.activityTitle}>
              {activity.title}
            </Text>

            <Text style={styles.activityText}>
              {activity.distance} •{" "}
              {activity.duration}
            </Text>

            <Text style={styles.activityText}>
              {activity.time}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() =>
              router.push({
                pathname:
                  "/main/walk-tracker",
                params: {
                  title: activity.title,
                  goal: activity.goal,
                },
              })
            }
          >
            <Text style={styles.playText}>
              ▶
            </Text>
          </TouchableOpacity>
        </View>
      ))}
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