import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>
        👋 Welcome Back
      </Text>

      <Text style={styles.title}>
        WalkWise AI Dashboard
      </Text>

      {/* AI Score Card */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreTitle}>
          AI Walking Score
        </Text>

        <Text style={styles.score}>
          86/100
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>4,526</Text>
          <Text style={styles.statLabel}>Steps</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>3.2 km</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>82%</Text>
          <Text style={styles.statLabel}>Battery</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>Good</Text>
          <Text style={styles.statLabel}>Posture</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push('/main/maps')}
      >
        <Text style={styles.buttonText}>
          🗺 Maps & GPS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push('/main/walk-tracker')}
      >
        <Text style={styles.buttonText}>
          🚶 Walk Tracker
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push('/main/posture')}
      >
        <Text style={styles.buttonText}>
          🧍 Posture Analysis
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push('/main/notifications')}
      >
        <Text style={styles.buttonText}>
          🔔 Notifications
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push('/main/profile')}
      >
        <Text style={styles.buttonText}>
          👤 Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push('/main/settings')}
      >
        <Text style={styles.buttonText}>
          ⚙ Settings
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },

  greeting: {
    color: '#94A3B8',
    fontSize: 18,
    marginTop: 50,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
  },

  scoreCard: {
    backgroundColor: '#5B4BFF',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
  },

  scoreTitle: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  score: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 10,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  statCard: {
    backgroundColor: '#0F172A',
    width: '48%',
    padding: 20,
    borderRadius: 16,
  },

  statValue: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  statLabel: {
    color: '#94A3B8',
    marginTop: 5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
  },

  actionButton: {
    backgroundColor: '#0F172A',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});