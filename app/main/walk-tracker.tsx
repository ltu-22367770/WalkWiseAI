import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import * as Location from "expo-location";

import MapView, {
  Marker,
  Polyline,
} from "react-native-maps";

import {
  useRouter,
  useLocalSearchParams,
} from "expo-router";

import { auth, db } from "../firebase";

import {
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

export default function WalkTrackerScreen() {
  const { title, goal } =
    useLocalSearchParams();

  const router = useRouter();

  const [tracking, setTracking] =
    useState(false);

  const [time, setTime] =
    useState(0);

  const [distance, setDistance] =
    useState(0);

  const [location, setLocation] =
    useState<any>(null);

  const [routeCoordinates,
    setRouteCoordinates] =
    useState<any[]>([]);

  const [locationSubscription,
    setLocationSubscription] =
    useState<any>(null);

  useEffect(() => {
    let interval:
      ReturnType<typeof setInterval>;

    if (tracking) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [tracking]);

  useEffect(() => {
    const getLocation =
      async () => {
        try {
          const current =
            await Location.getCurrentPositionAsync(
              {}
            );

          setLocation({
            latitude:
              current.coords.latitude,
            longitude:
              current.coords.longitude,
          });
        } catch (error) {
          console.log(error);
        }
      };

    getLocation();
  }, []);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371;

    const dLat =
      ((lat2 - lat1) *
        Math.PI) /
      180;

    const dLon =
      ((lon2 - lon1) *
        Math.PI) /
      180;

    const a =
      Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +
      Math.cos(
        (lat1 * Math.PI) / 180
      ) *
        Math.cos(
          (lat2 * Math.PI) / 180
        ) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    return R * c;
  };

  const formatTime = () => {
    const mins = Math.floor(
      time / 60
    );

    const secs = time % 60;

    return `${mins
      .toString()
      .padStart(
        2,
        "0"
      )}:${secs
      .toString()
      .padStart(
        2,
        "0"
      )}`;
  };

  const calories =
    Math.round(distance * 60);

  const startTracking =
    async () => {
      if (tracking) return;

      try {
        setTracking(true);

        const sub =
          await Location.watchPositionAsync(
            {
              accuracy:
                Location.Accuracy.High,
              distanceInterval: 5,
            },

            (loc) => {
              const coords = {
                latitude:
                  loc.coords.latitude,
                longitude:
                  loc.coords.longitude,
              };

              setLocation(
                coords
              );

              setRouteCoordinates(
                (prev) => {
                  if (
                    prev.length > 0
                  ) {
                    const last =
                      prev[
                        prev.length -
                          1
                      ];

                    const extraDistance =
                      calculateDistance(
                        last.latitude,
                        last.longitude,
                        coords.latitude,
                        coords.longitude
                      );

                    setDistance(
                      (d) =>
                        Number(
                          (
                            d +
                            extraDistance
                          ).toFixed(
                            2
                          )
                        )
                    );
                  }

                  return [
                    ...prev,
                    coords,
                  ];
                }
              );
            }
          );

        setLocationSubscription(
          sub
        );
      } catch (error) {
        console.log(error);
      }
    };

  const pauseTracking = () => {
    setTracking(false);

    if (
      locationSubscription
    ) {
      locationSubscription.remove();
    }
  };

  const resetTracking = () => {
    setTracking(false);

    setTime(0);

    setDistance(0);

    setRouteCoordinates([]);

    if (
      locationSubscription
    ) {
      locationSubscription.remove();
    }
  };

  const finishActivity =
    async () => {
      try {
        const user =
          auth.currentUser;

        if (!user) {
          Alert.alert(
            "Login Required",
            "Please login first."
          );
          return;
        }

        await addDoc(
          collection(
            db,
            "users",
            user.uid,
            "activities"
          ),
          {
            title:
              String(
                title ||
                  "Walking"
              ),

            distance,

            duration:
              formatTime(),

            calories,

            goal:
              String(
                goal ||
                  "2.5 km"
              ),

            createdAt:
              Timestamp.now(),
          }
        );

        Alert.alert(
          "Success",
          "Activity saved successfully."
        );

        resetTracking();

        router.back();
      } catch (error) {
        console.log(
          "Save Activity Error:",
          error
        );

        Alert.alert(
          "Error",
          "Failed to save activity."
        );
      }
    };

  return (
    <ScrollView
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <TouchableOpacity
          onPress={() =>
            router.back()
          }
        >
          <View
            style={
              styles.backCircle
            }
          >
            <Text
              style={
                styles.backText
              }
            >
              ←
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={styles.title}
        >
          Walk Tracker
        </Text>
      </View>

      <View
        style={
          styles.activityCard
        }
      >
        <Text
          style={
            styles.activityTitle
          }
        >
          {title ||
            "Walking"}
        </Text>

        <Text
          style={styles.goal}
        >
          Goal:{" "}
          {goal ||
            "2.5 km"}
        </Text>
      </View>

      <View
        style={
          styles.mapContainer
        }
      >
        {location && (
          <MapView
            style={styles.map}
            region={{
              latitude:
                location.latitude,
              longitude:
                location.longitude,
              latitudeDelta:
                0.005,
              longitudeDelta:
                0.005,
            }}
          >
            <Marker
              coordinate={
                location
              }
            />

            <Polyline
              coordinates={
                routeCoordinates
              }
              strokeWidth={
                5
              }
            />
          </MapView>
        )}
      </View>

      <View style={styles.card}>
        <Text
          style={styles.label}
        >
          Distance
        </Text>

        <Text
          style={styles.big}
        >
          {distance.toFixed(
            2
          )}{" "}
          km
        </Text>
      </View>

      <View style={styles.card}>
        <Text
          style={styles.label}
        >
          Time
        </Text>

        <Text
          style={styles.big}
        >
          {formatTime()}
        </Text>
      </View>

      <View style={styles.card}>
        <Text
          style={styles.label}
        >
          Calories
        </Text>

        <Text
          style={styles.big}
        >
          {calories}
        </Text>
      </View>

      <View
        style={
          styles.buttonRow
        }
      >
        <TouchableOpacity
          style={
            styles.startButton
          }
          onPress={
            startTracking
          }
        >
          <Text
            style={
              styles.buttonText
            }
          >
            Start
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.pauseButton
          }
          onPress={
            pauseTracking
          }
        >
          <Text
            style={
              styles.buttonText
            }
          >
            Pause
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={
          styles.resetButton
        }
        onPress={
          resetTracking
        }
      >
        <Text
          style={
            styles.buttonText
          }
        >
          Reset Activity
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          styles.finishButton
        }
        onPress={
          finishActivity
        }
      >
        <Text
          style={
            styles.buttonText
          }
        >
          Finish Activity
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#050B2C",
      padding: 20,
      paddingTop: 70,
    },

    header: {
      flexDirection:
        "row",
      alignItems:
        "center",
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
      alignItems:
        "center",
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

    activityCard: {
      backgroundColor:
        "#101A44",
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
    },

    activityTitle: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: "700",
    },

    goal: {
      color: "#94A3B8",
      marginTop: 8,
    },

    mapContainer: {
      height: 250,
      borderRadius: 20,
      overflow: "hidden",
      marginBottom: 20,
    },

    map: {
      flex: 1,
    },

    card: {
      backgroundColor:
        "#101A44",
      borderRadius: 20,
      padding: 20,
      marginBottom: 15,
      alignItems:
        "center",
    },

    label: {
      color: "#94A3B8",
      marginBottom: 10,
    },

    big: {
      color: "#FFF",
      fontSize: 32,
      fontWeight: "700",
    },

    buttonRow: {
      flexDirection:
        "row",
      justifyContent:
        "space-between",
      marginTop: 20,
    },

    startButton: {
      flex: 1,
      backgroundColor:
        "#22C55E",
      padding: 16,
      borderRadius: 15,
      marginRight: 10,
    },

    pauseButton: {
      flex: 1,
      backgroundColor:
        "#F59E0B",
      padding: 16,
      borderRadius: 15,
    },

    resetButton: {
      backgroundColor:
        "#EF4444",
      padding: 16,
      borderRadius: 15,
      marginTop: 15,
    },

    finishButton: {
      backgroundColor:
        "#6C63FF",
      padding: 16,
      borderRadius: 15,
      marginTop: 15,
      marginBottom: 40,
    },

    buttonText: {
      color: "#FFF",
      textAlign:
        "center",
      fontWeight: "700",
    },
  });