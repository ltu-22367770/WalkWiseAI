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
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = () => {
    router.replace("/main/dashboard");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>
        Welcome Back! 👋
      </Text>

      <Text style={styles.subtitle}>
        Sign in to continue your journey
      </Text>

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
          keyboardType="email-address"
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
            setShowPassword(!showPassword)
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

      {/* Forgot Password */}
      <TouchableOpacity
        style={styles.forgotContainer}
      >
        <Text style={styles.forgotText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
      >
        <LinearGradient
          colors={["#7B2FF7", "#4E7DFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>
            Login
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />

        <Text style={styles.dividerText}>
          or continue with
        </Text>

        <View style={styles.line} />
      </View>

      {/* Social Login */}
      <View style={styles.socialRow}>
        <TouchableOpacity
          style={styles.socialButton}
        >
          <AntDesign
            name="google"
            size={26}
            color="#EA4335"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
        >
          <AntDesign
            name="apple"
            size={26}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
        >
          <FontAwesome
            name="facebook"
            size={26}
            color="#1877F2"
          />
        </TouchableOpacity>
      </View>

      {/* Register */}
      <View style={styles.registerRow}>
        <Text style={styles.registerText}>
          Don't have an account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push("/auth/register")
          }
        >
          <Text style={styles.registerLink}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingHorizontal: 25,
    justifyContent: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    color: "#9AA5C4",
    fontSize: 15,
    marginBottom: 35,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#101A44",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    marginLeft: 10,
    fontSize: 16,
  },

  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 25,
  },

  forgotText: {
    color: "#6C63FF",
    fontSize: 14,
  },

  loginButton: {
    height: 58,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#26304D",
  },

  dividerText: {
    color: "#7E8AAE",
    marginHorizontal: 12,
    fontSize: 13,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
  },

  socialButton: {
    width: 90,
    height: 60,
    borderRadius: 14,
    backgroundColor: "#101A44",
    justifyContent: "center",
    alignItems: "center",
  },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  registerText: {
    color: "#A0AAC8",
  },

  registerLink: {
    color: "#6C63FF",
    fontWeight: "700",
    marginLeft: 5,
  },
});