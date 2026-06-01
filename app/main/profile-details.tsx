import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ProfileDetailsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Text style={styles.title}>
        👤 Personal Information
      </Text>

      <View style={styles.card}>
        <InfoRow label="Full Name" value="Vihar Patel" />
        <InfoRow label="Email" value="vihar@email.com" />
        <InfoRow label="Age" value="25" />
        <InfoRow label="Gender" value="Male" />
        <InfoRow label="Height" value="178 cm" />
        <InfoRow label="Weight" value="76 kg" />
      </View>
    </ScrollView>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2B59",
  },

  label: {
    color: "#94A3B8",
  },

  value: {
    color: "#FFF",
    fontWeight: "600",
  },
});