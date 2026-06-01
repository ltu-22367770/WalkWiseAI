import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

export default function SignupScreen() {
  const [fullName, setFullName] =
    useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");
  const [confirmPassword,
    setConfirmPassword] = useState("");

  const [showPassword,
    setShowPassword] = useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] = useState(false);

  const [agree,
    setAgree] = useState(true);

  const handleRegister = () => {
    router.replace("/main/dashboard");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Join WalkWise AI today
      </Text>

      {/* Full Name */}
      <View style={styles.inputContainer}>
        <Feather
          name="user"
          size={20}
          color="#8B95B7"
        />

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#8B95B7"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={20}
          color="#8B95B7"
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#8B95B7"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="lock"
          size={20}
          color="#8B95B7"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#8B95B7"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity
          onPress={() =>
            setShowPassword(
              !showPassword
            )
          }
        >
          <MaterialIcons
            name={
              showPassword
                ? "visibility"
                : "visibility-off"
            }
            size={20}
            color="#8B95B7"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="lock"
          size={20}
          color="#8B95B7"
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#8B95B7"
          style={styles.input}
          value={confirmPassword}
          onChangeText={
            setConfirmPassword
          }
          secureTextEntry={
            !showConfirmPassword
          }
        />

        <TouchableOpacity
          onPress={() =>
            setShowConfirmPassword(
              !showConfirmPassword
            )
          }
        >
          <MaterialIcons
            name={
              showConfirmPassword
                ? "visibility"
                : "visibility-off"
            }
            size={20}
            color="#8B95B7"
          />
        </TouchableOpacity>
      </View>

      {/* Terms */}
      <TouchableOpacity
        style={styles.termsRow}
        onPress={() =>
          setAgree(!agree)
        }
      >
        <View
          style={[
            styles.checkbox,
            agree &&
              styles.checkboxActive,
          ]}
        >
          {agree && (
            <Text
              style={
                styles.checkmark
              }
            >
              ✓
            </Text>
          )}
        </View>

        <Text style={styles.termsText}>
          I agree to the{" "}
          <Text
            style={
              styles.termsLink
            }
          >
            Terms & Conditions
          </Text>
        </Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        onPress={handleRegister}
      >
        <LinearGradient
          colors={[
            "#7B2FF7",
            "#4E7DFF",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={
            styles.registerButton
          }
        >
          <Text
            style={
              styles.registerText
            }
          >
            Register
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Login Link */}
      <View
        style={styles.loginRow}
      >
        <Text
          style={
            styles.loginLabel
          }
        >
          Already have an account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push(
              "/auth/login"
            )
          }
        >
          <Text
            style={
              styles.loginLink
            }
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#050B2C",
      justifyContent:
        "center",
      paddingHorizontal: 25,
    },

    title: {
      color: "#FFFFFF",
      fontSize: 32,
      fontWeight: "700",
      marginBottom: 8,
    },

    subtitle: {
      color: "#A0AAC8",
      marginBottom: 35,
      fontSize: 15,
    },

    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor:
        "#101A44",
      borderRadius: 14,
      paddingHorizontal: 15,
      height: 58,
      marginBottom: 15,
    },

    input: {
      flex: 1,
      color: "#FFFFFF",
      marginLeft: 10,
      fontSize: 16,
    },

    termsRow: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 15,
    },

    checkbox: {
      width: 18,
      height: 18,
      borderRadius: 4,
      borderWidth: 1,
      borderColor:
        "#7B2FF7",
      marginRight: 10,
      justifyContent:
        "center",
      alignItems: "center",
    },

    checkboxActive: {
      backgroundColor:
        "#7B2FF7",
    },

    checkmark: {
      color: "#FFFFFF",
      fontSize: 11,
      fontWeight: "700",
    },

    termsText: {
      color: "#A0AAC8",
      fontSize: 14,
    },

    termsLink: {
      color: "#7B2FF7",
    },

    registerButton: {
      height: 58,
      borderRadius: 14,
      justifyContent:
        "center",
      alignItems: "center",
      marginTop: 10,
    },

    registerText: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: "700",
    },

    loginRow: {
      flexDirection: "row",
      justifyContent:
        "center",
      marginTop: 30,
    },

    loginLabel: {
      color: "#A0AAC8",
    },

    loginLink: {
      color: "#7B2FF7",
      fontWeight: "700",
      marginLeft: 5,
    },
  });