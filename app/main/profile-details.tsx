import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { auth, db } from "../firebase";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export default function ProfileDetailsScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      const userDoc = await getDoc(
        doc(db, "users", user.uid)
      );

      if (userDoc.exists()) {
        const data = userDoc.data();

        setFullName(data.fullName || "");
        setEmail(data.email || "");
        setAge(data.age || "");
        setGender(data.gender || "");
        setHeight(data.height || "");
        setWeight(data.weight || "");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      await setDoc(
        doc(db, "users", user.uid),
        {
          fullName,
          email,
          age,
          gender,
          height,
          weight,
        },
        { merge: true }
      );

      Alert.alert(
        "Success",
        "Profile updated successfully"
      );

      setIsEditing(false);
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        "Unable to update profile"
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#6C63FF"
        />
        <Text style={styles.loadingText}>
          Loading Profile...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <View style={styles.backCircle}>
            <Text style={styles.backButton}>
              ←
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>
          Personal Information
        </Text>
      </View>

      <View style={styles.card}>
        {!isEditing ? (
          <>
            <InfoRow
              label="Full Name"
              value={fullName}
            />

            <InfoRow
              label="Email"
              value={email}
            />

            <InfoRow
              label="Age"
              value={age}
            />

            <InfoRow
              label="Gender"
              value={gender}
            />

            <InfoRow
              label="Height"
              value={`${height} cm`}
            />

            <InfoRow
              label="Weight"
              value={`${weight} kg`}
            />

            <TouchableOpacity
              style={styles.editButton}
              onPress={() =>
                setIsEditing(true)
              }
            >
              <Text style={styles.buttonText}>
                Edit Details
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Full Name"
              placeholderTextColor="#94A3B8"
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Age"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={setGender}
              placeholder="Gender"
              placeholderTextColor="#94A3B8"
            />

            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              placeholder="Height (cm)"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              placeholder="Weight (kg)"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </>
        )}
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
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>
        {label}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#050B2C",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 16,
  },

  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  title: {
  color: "#FFFFFF",
  fontSize: 24,
  fontWeight: "700",
  },

  card: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2B59",
  },

  infoLabel: {
    color: "#94A3B8",
    fontSize: 15,
  },

  infoValue: {
    color: "#FFFFFF",
    fontWeight: "600",
    maxWidth: "60%",
    textAlign: "right",
  },

  header: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 25,
  },

  backCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#101A44",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  backButton: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  input: {
    backgroundColor: "#1A275E",
    borderRadius: 12,
    color: "#FFF",
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },

  editButton: {
    backgroundColor: "#4F7CFF",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  saveButton: {
    backgroundColor: "#6C63FF",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
});