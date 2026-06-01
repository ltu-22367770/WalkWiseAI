import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";

export default function MapsScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Platform.OS === "web") {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const { status } =
          await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setLoading(false);
          return;
        }

        const currentLocation =
          await Location.getCurrentPositionAsync({});

        setLocation(currentLocation);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // WEB VERSION
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🗺 Maps & GPS</Text>
        <Text style={styles.message}>
          Maps are available on Android & iPhone only.
        </Text>
      </View>
    );
  }

  // LOADING
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>🗺 Maps & GPS</Text>

    {location && (
      <MapView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="You are here"
          description="Current Location"
        />
      </MapView>
    )}

    <View style={styles.card}>
      <Text style={styles.cardTitle}>Current Location</Text>

      <Text style={styles.info}>
        📍 Latitude: {location?.coords.latitude.toFixed(6)}
      </Text>

      <Text style={styles.info}>
        📍 Longitude: {location?.coords.longitude.toFixed(6)}
      </Text>

      <Text style={styles.info}>
        🎯 Accuracy: {Math.round(location?.coords.accuracy ?? 0)} m
      </Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    padding: 20,
    paddingTop: 70,
  },

  map: {
  height: 300,
  borderRadius: 20,
  overflow: "hidden",
  marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    color: "#D6D8E6",
    fontSize: 16,
    marginBottom: 8,
  },

  loadingText: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 16,
  },

  message: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});