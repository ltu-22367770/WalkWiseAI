import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/walkwise_logo_mono.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>WalkWise AI</Text>

        <Text style={styles.subtitle}>
          AI-Powered Walking &{'\n'}
          Posture Intelligence
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.footerText}>
          Let's build a healthier you{'\n'}
          every day.
        </Text>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/onboarding/onboarding1')}
        >
          <Text style={styles.buttonText}>
            Get Started
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
    justifyContent: 'space-between',
    paddingTop: 90,
    paddingBottom: 50,
    paddingHorizontal: 30,
  },

  topSection: {
    alignItems: 'center',
    marginTop: 50,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 12,
  },

  subtitle: {
    color: '#A1A1AA',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
  },

  bottomSection: {
    alignItems: 'center',
  },

  footerText: {
    color: '#E2E8F0',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 22,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#475569',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: '#8B5CF6',
  },

  button: {
    width: '100%',
    backgroundColor: '#5B4BFF',
    paddingVertical: 18,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#5B4BFF',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,

    elevation: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});