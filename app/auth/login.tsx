import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚶 WalkWise AI</Text>

      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#94A3B8"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/auth/forgot-password')}
      >
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/auth/register')}
      >
        <Text style={styles.link}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  logo: {
    color: '#06B6D4',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
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

  loginButton: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
  },

  loginText: {
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