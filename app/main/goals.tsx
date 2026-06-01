import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function GoalsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom:120,
      }}
    >
      <Text style={styles.title}>
        🎯 Goals
      </Text>

      <View style={styles.card}>
        <Text style={styles.goalTitle}>
          Daily Steps Goal
        </Text>

        <Text style={styles.goalValue}>
          10,000 Steps
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.goalTitle}>
          Walking Distance Goal
        </Text>

        <Text style={styles.goalValue}>
          5 km
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.goalTitle}>
          Calories Burn Goal
        </Text>

        <Text style={styles.goalValue}>
          500 kcal
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.goalTitle}>
          Posture Goal
        </Text>

        <Text style={styles.goalValue}>
          Good Posture Daily
        </Text>
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
    marginBottom:15,
  },

  goalTitle:{
    color:"#94A3B8",
    fontSize:14,
  },

  goalValue:{
    color:"#FFF",
    fontSize:22,
    fontWeight:"700",
    marginTop:10,
  },
});