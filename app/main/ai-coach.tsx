import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function AICoachScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>AI Coach</Text>
        <View style={{ width: 20 }} />
      </View>

      <Text style={styles.today}>Today</Text>

      {/* AI Message */}
      <View style={styles.messageCard}>
        <View style={styles.aiIcon}>
          <Text style={styles.iconText}>🤖</Text>
        </View>

        <View style={styles.messageContent}>
          <Text style={styles.message}>
            You walked 25% less today compared to yesterday.
          </Text>

          <Text style={styles.message}>
            Try a 15–20 min evening walk.
            You can do it! 💪
          </Text>
        </View>
      </View>

      {/* Recommendations */}
      <Text style={styles.sectionTitle}>
        Recommendations
      </Text>

      <TouchableOpacity style={styles.recommendation}>
        <View style={styles.row}>
          <Text style={styles.recIcon}>🚶</Text>

          <Text style={styles.recText}>
            Go for a 15 min walk
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.recommendation}>
        <View style={styles.row}>
          <Text style={styles.recIcon}>🧍</Text>

          <Text style={styles.recText}>
            Improve posture
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.recommendation}>
        <View style={styles.row}>
          <Text style={styles.recIcon}>💧</Text>

          <Text style={styles.recText}>
            Drink more water
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* Chat Box */}
      <View style={styles.chatContainer}>
        <TextInput
          placeholder="Ask AI Coach..."
          placeholderTextColor="#7A859D"
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>➜</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  back: {
    color: "#FFFFFF",
    fontSize: 22,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  today: {
    color: "#8B95B3",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  messageCard: {
    backgroundColor: "#111B46",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    marginBottom: 30,
  },

  aiIcon: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 20,
  },

  messageContent: {
    flex: 1,
    marginLeft: 15,
  },

  message: {
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 22,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  recommendation: {
    backgroundColor: "#111B46",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  recIcon: {
    fontSize: 20,
    marginRight: 12,
  },

  recText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  arrow: {
    color: "#8B95B3",
    fontSize: 24,
  },

  chatContainer: {
    marginTop: "auto",
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111B46",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },

  sendText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});