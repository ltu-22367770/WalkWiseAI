import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { showNotification } from "../../src/notifications/notificationHelper";
import { Vibration } from "react-native";

import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";

import { auth, db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

export default function GoalsScreen() {
  const router = useRouter();

  const [goals, setGoals] = useState<any[]>([]);

  const [goalName, setGoalName] = useState("");
  const [goalTarget, setGoalTarget] = useState("");
  const [goalType, setGoalType] =
    useState("Steps");

  const [showForm, setShowForm] =
    useState(false);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const snapshot = await getDocs(
        collection(
          db,
          "users",
          user.uid,
          "goals"
        )
      );

      const goalData: any[] = [];

      snapshot.forEach((item) => {
        goalData.push({
          id: item.id,
          ...item.data(),
        });
      });

      setGoals(goalData);
    } catch (error) {
      console.log(error);
    }
  };

  const addGoal = async () => {
    try {
      
      const user = auth.currentUser;

      if (!user) return;

      if (
        goalName.trim() === "" ||
        goalTarget.trim() === ""
      ) {
        Alert.alert(
          "Missing Fields",
          "Please fill all fields."
        );
        return;
      }

      await addDoc(
        collection(
          db,
          "users",
          user.uid,
          "goals"
        ),
        {
          name: goalName,
          target: goalTarget,
          type: goalType,
        }
      );

      await addDoc(
        collection(
          db,
          "users",
          user.uid,
          "notifications"
        ),
        {
          title: "Goal Created",
          message:
            goalName +
            " goal created successfully.",
          icon: "🎯",
          createdAt: Timestamp.now(),
        }
      );

      console.log("Notification saved");

      const existingAchievements =
        await getDocs(
          collection(
            db,
            "users",
            user.uid,
            "achievements"
          )
        );

      let goalSetterExists = false;

      existingAchievements.forEach(
        (docItem) => {
          if (
            docItem.data().title ===
            "Goal Setter"
          ) {
            goalSetterExists = true;
          }
        }
      );

      if (!goalSetterExists) {
        await addDoc(
          collection(
            db,
            "users",
            user.uid,
            "achievements"
          ),
          {
            title: "Goal Setter",
            description:
              "Created your first goal",
            icon: "🏆",
            completed: true,
            createdAt:
              Timestamp.now(),
          }
        );

        await addDoc(
          collection(
            db,
            "users",
            user.uid,
            "notifications"
          ),
          {
            title:
              "Achievement Unlocked",
            message:
              "Goal Setter unlocked!",
            icon: "🏆",
            createdAt:
              Timestamp.now(),
          }
        );
      }

      Vibration.vibrate(300);

      Alert.alert(
        "🎯 Goal Created",
        `${goalName} goal added successfully`,
        [
          {
            text: "View",
            onPress: () =>
              router.push(
                "/main/notifications"
              ),
          },
          {
            text: "OK",
          },
        ]
      );

      console.log("Achievement notification saved");

      setGoalName("");
      setGoalTarget("");
      setGoalType("Steps");

      setShowForm(false);

      loadGoals();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGoal = async (
    goalId: string
  ) => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      await deleteDoc(
        doc(
          db,
          "users",
          user.uid,
          "goals",
          goalId
        )
      );

      loadGoals();
    } catch (error: any) {
    console.log("ERROR:", error);
    Alert.alert(
      "Error",
      error.message
    );
  }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            router.back()
          }
        >
          <View
            style={styles.backCircle}
          >
            <Text
              style={styles.backText}
            >
              ←
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>
          Goals
        </Text>
      </View>

      {/* Add Goal Button */}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          setShowForm(!showForm)
        }
      >
        <Text style={styles.addText}>
          + Add Goal
        </Text>
      </TouchableOpacity>

      {/* Form */}

      {showForm && (
        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Goal Name"
            placeholderTextColor="#94A3B8"
            value={goalName}
            onChangeText={setGoalName}
          />

          <TextInput
            style={styles.input}
            placeholder="Target Value"
            placeholderTextColor="#94A3B8"
            value={goalTarget}
            onChangeText={setGoalTarget}
            keyboardType="numeric"
          />

          <View
            style={styles.pickerContainer}
          >
            <Picker
              selectedValue={goalType}
              onValueChange={(
                itemValue
              ) =>
                setGoalType(itemValue)
              }
              dropdownIconColor="#FFF"
              style={{
                color: "#FFF",
              }}
            >
              <Picker.Item
                label="Steps"
                value="Steps"
              />

              <Picker.Item
                label="Distance"
                value="Distance"
              />

              <Picker.Item
                label="Calories"
                value="Calories"
              />

              <Picker.Item
                label="Time"
                value="Time"
              />

              <Picker.Item
                label="Custom"
                value="Custom"
              />
            </Picker>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={addGoal}
          >
            <Text
              style={styles.saveText}
            >
              Save Goal
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Goals List */}

      {goals.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text
            style={styles.emptyText}
          >
            No goals added yet.
          </Text>
        </View>
      ) : (
        goals.map((goal) => (
          <View
            key={goal.id}
            style={styles.goalCard}
          >
            <Text
              style={styles.goalName}
            >
              {goal.name}
            </Text>

            <Text
              style={styles.goalInfo}
            >
              Type: {goal.type}
            </Text>

            <Text
              style={styles.goalInfo}
            >
              Target: {goal.target}
            </Text>

            <TouchableOpacity
              style={
                styles.deleteButton
              }
              onPress={() =>
                deleteGoal(goal.id)
              }
            >
              <Text
                style={
                  styles.deleteText
                }
              >
                Delete Goal
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050B2C",
    paddingTop: 70,
    paddingHorizontal: 20,
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

  backText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },

  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },

  addButton: {
    backgroundColor: "#6C63FF",
    borderRadius: 14,
    padding: 15,
    marginBottom: 20,
  },

  addText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },

  formCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#1A275E",
    borderRadius: 12,
    color: "#FFF",
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 15,
  },

  pickerContainer: {
    backgroundColor: "#1A275E",
    borderRadius: 12,
    marginBottom: 15,
  },

  saveButton: {
    backgroundColor: "#22C55E",
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  saveText: {
    color: "#FFF",
    fontWeight: "700",
  },

  goalCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },

  goalName: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  goalInfo: {
    color: "#94A3B8",
    marginTop: 8,
  },

  deleteButton: {
    backgroundColor: "#EF4444",
    marginTop: 15,
    borderRadius: 12,
    padding: 12,
  },

  deleteText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
  },

  emptyCard: {
    backgroundColor: "#101A44",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },

  emptyText: {
    color: "#94A3B8",
  },
});