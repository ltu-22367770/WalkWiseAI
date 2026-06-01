
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";

export default function RemindersScreen() {
  const [walkReminder, setWalkReminder] =
    useState(true);

  const [waterReminder, setWaterReminder] =
    useState(true);

  const [postureReminder, setPostureReminder] =
    useState(true);

  const [aiReminder, setAiReminder] =
    useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom:120,
      }}
    >
      <Text style={styles.title}>
        🔔 Reminders
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Daily Walk Reminder
          </Text>

          <Switch
            value={walkReminder}
            onValueChange={
              setWalkReminder
            }
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Hydration Reminder
          </Text>

          <Switch
            value={waterReminder}
            onValueChange={
              setWaterReminder
            }
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Posture Alert
          </Text>

          <Switch
            value={postureReminder}
            onValueChange={
              setPostureReminder
            }
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            AI Coach Notifications
          </Text>

          <Switch
            value={aiReminder}
            onValueChange={
              setAiReminder
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#050B2C",
    paddingTop:70,
    paddingHorizontal:20,
  },

  title:{
    color:"#FFF",
    fontSize:30,
    fontWeight:"700",
    marginBottom:20,
  },

  card:{
    backgroundColor:"#101A44",
    borderRadius:20,
    padding:20,
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:15,
    borderBottomWidth:1,
    borderBottomColor:"#1F2B59",
  },

  label:{
    color:"#FFF",
    fontSize:16,
  },
});