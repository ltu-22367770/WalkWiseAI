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
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 170 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Hello, Vihar 👋
            </Text>

            <Text style={styles.subGreeting}>
              Good Morning!
            </Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* AI Score Card */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreTitle}>
            Today's Progress
          </Text>

          <View style={styles.scoreRow}>
            <Text style={styles.scoreValue}>
              86
            </Text>

            <Text style={styles.scoreOutOf}>
              /100
            </Text>
          </View>

          <Text style={styles.scoreDescription}>
            AI Walking Score
          </Text>

          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>
              86%
            </Text>
          </View>
        </View>

        {/* Weekly Activity */}
        <View style={styles.chartCard}>
          <View style={styles.chart}>
            {[70, 120, 90, 150, 105, 135, 125].map(
              (height, index) => (
                <View
                  key={index}
                  style={[
                    styles.bar,
                    { height },
                  ]}
                />
              )
            )}
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.icon}>📍</Text>

            <Text style={styles.statValue}>
              5.6 km
            </Text>

            <Text style={styles.statLabel}>
              Distance
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.icon}>🔥</Text>

            <Text style={styles.statValue}>
              320
            </Text>

            <Text style={styles.statLabel}>
              Calories
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.icon}>🔋</Text>

            <Text style={styles.statValue}>
              82%
            </Text>

            <Text style={styles.statLabel}>
              Battery
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.icon}>🧍</Text>

            <Text style={styles.statValue}>
              Good
            </Text>

            <Text style={styles.statLabel}>
              Posture
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navActive}>🏠</Text>
          <Text style={styles.navTextActive}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/walk-tracker')
          }
        >
          <Text style={styles.navIcon}>🚶</Text>
          <Text style={styles.navText}>
            Activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/maps')
          }
        >
          <View style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/analytics')
          }
        >
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navText}>
            Insights
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/profile')
          }
        >
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 70,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },

  subGreeting: {
    color: '#94A3B8',
    marginTop: 5,
    fontSize: 15,
  },

  notificationButton: {
  backgroundColor: '#131F3C',
  width: 55,
  height: 55,
  borderRadius: 28,
  justifyContent: 'center',
  alignItems: 'center',

  borderWidth: 1,
  borderColor: '#273552',
  },

  notificationIcon: {
    fontSize: 22,
  },

  scoreCard: {
    backgroundColor: '#0B1530',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },

  scoreTitle: {
    color: '#94A3B8',
    marginBottom: 15,
  },

  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  scoreValue: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },

  scoreOutOf: {
    color: '#94A3B8',
    fontSize: 20,
    marginBottom: 10,
  },

  scoreDescription: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 16,
  },

  progressCircle: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#5B4BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  progressText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  chartCard: {
    backgroundColor: '#0B1530',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
  },

  chart: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },

  bar: {
    width: 18,
    backgroundColor: '#5B4BFF',
    borderRadius: 10,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  statCard: {
    width: '48%',
    backgroundColor: '#0B1530',
    borderRadius: 24,
    padding: 20,
    marginBottom: 15,
  },

  icon: {
    fontSize: 24,
  },

  statValue: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    marginTop: 15,
  },

  statLabel: {
    color: '#94A3B8',
    fontSize: 18,
    marginTop: 8,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#131F3C',
    borderRadius: 30,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#273552',
    shadowColor: '#5B4BFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
  },

  navIcon: {
    fontSize: 22,
    textAlign: 'center',
  },

  navText: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },

  navActive: {
    fontSize: 22,
    textAlign: 'center',
  },

  navTextActive: {
  color: '#8B5CF6',
  fontSize: 12,
  marginTop: 4,
  textAlign: 'center',
  fontWeight: '700',
  },

  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5B4BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35,
  },

  plusText: {
  color: '#FFFFFF',
  fontSize: 34,
  fontWeight: 'bold',
  },
});