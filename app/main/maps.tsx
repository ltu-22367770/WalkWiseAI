import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';

export default function MapsScreen() {
  const [location, setLocation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setLoading(false);
        return;
      }

      const currentLocation =
        await Location.getCurrentPositionAsync({});

      setLocation(currentLocation.coords);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#5B4BFF"
        />

        <Text style={styles.loadingText}>
          Getting your location...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>
          🗺 Maps & GPS
        </Text>

        <Text style={styles.subtitle}>
          Live Location Tracking
        </Text>
      </View>

      {/* Map */}

      {location && (
        <MapView
          style={styles.map}
          showsUserLocation
          showsMyLocationButton
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="You Are Here"
            description="Current GPS Location"
          />
        </MapView>
      )}

      {/* Info Card */}

      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>
          Current Location
        </Text>

        <Text style={styles.infoText}>
          Latitude
        </Text>

        <Text style={styles.value}>
          {location?.latitude}
        </Text>

        <Text style={styles.infoText}>
          Longitude
        </Text>

        <Text style={styles.value}>
          {location?.longitude}
        </Text>
      </View>

      {/* Start Walk */}

      <TouchableOpacity style={styles.walkButton}>
        <Text style={styles.walkButtonText}>
          🚶 Start Walk
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 16,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },

  subtitle: {
    color: '#94A3B8',
    marginTop: 5,
    fontSize: 14,
  },

  map: {
    flex: 1,
  },

  infoCard: {
    backgroundColor: '#0B1530',
    margin: 15,
    borderRadius: 20,
    padding: 20,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },

  infoText: {
    color: '#94A3B8',
    marginTop: 10,
    fontSize: 13,
  },

  value: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },

  walkButton: {
    backgroundColor: '#5B4BFF',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: 'center',

    shadowColor: '#5B4BFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 15,

    elevation: 10,
  },

  walkButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});