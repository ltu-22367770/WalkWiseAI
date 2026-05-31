import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { router } from 'expo-router';

export default function Onboarding3() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/walkwise-logo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>AI Health Insights</Text>

      <Text style={styles.description}>
        Get AI-powered walking scores,
        activity analysis and personalized
        movement insights.
      </Text>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.active]} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/auth/login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = createStyles();

function createStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#020617',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
    },

    image: {
      width: 180,
      height: 180,
      marginBottom: 40,
    },

    title: {
      color: '#FFFFFF',
      fontSize: 30,
      fontWeight: '700',
      marginBottom: 20,
      textAlign: 'center',
    },

    description: {
      color: '#94A3B8',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 28,
      marginBottom: 60,
    },

    dots: {
      flexDirection: 'row',
      marginBottom: 35,
    },

    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#475569',
      marginHorizontal: 5,
    },

    active: {
      width: 24,
      backgroundColor: '#8B5CF6',
    },

    button: {
      backgroundColor: '#5B4BFF',
      width: '100%',
      paddingVertical: 18,
      borderRadius: 18,
      alignItems: 'center',
      marginBottom: 20,
    },

    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },

    skip: {
      color: '#94A3B8',
      fontSize: 15,
    },
  });
}