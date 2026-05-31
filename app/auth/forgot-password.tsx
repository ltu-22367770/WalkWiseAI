import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    Alert.alert(
      'Reset Link Sent',
      'A password reset link has been sent to your email.'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚶 WalkWise AI</Text>

      <Text style={styles.title}>Forgot Password?</Text>

      <Text style={styles.subtitle}>
        Enter your email and we'll send you a password reset link.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#94A3B8"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>
          Send Reset Link
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/auth/login')}
      >
        <Text style={styles.backText}>
          ← Back to Login
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
    marginBottom: 30,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: '#CBD5E1',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 15,
  },

  input: {
    backgroundColor: '#1E293B',
    color: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  backText: {
    color: '#06B6D4',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
});