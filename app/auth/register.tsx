import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.logo}>🚶 WalkWise AI</Text>

      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#94A3B8"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#94A3B8"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/auth/login')}
      >
        <Text style={styles.link}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },

  logo: {
    color: '#06B6D4',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#1E293B',
    color: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  registerButton: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
  },

  registerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  link: {
    color: '#06B6D4',
    textAlign: 'center',
    marginTop: 15,
  },
});