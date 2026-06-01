import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Text style={styles.title}>
        ℹ About WalkWise AI
      </Text>

      <View style={styles.card}>
        <Text style={styles.appName}>
          WalkWise AI
        </Text>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>

        <Text style={styles.description}>
          WalkWise AI is an intelligent
          walking and posture monitoring
          application designed to help users
          improve their health through
          activity tracking, AI-powered
          coaching, posture analysis, and
          health insights.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          Features
        </Text>

        <Text style={styles.feature}>
          ✅ Activity Tracking
        </Text>

        <Text style={styles.feature}>
          ✅ GPS Monitoring
        </Text>

        <Text style={styles.feature}>
          ✅ AI Coach
        </Text>

        <Text style={styles.feature}>
          ✅ Posture Analysis
        </Text>

        <Text style={styles.feature}>
          ✅ Health Insights
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
    marginBottom:20,
  },

  appName:{
    color:"#FFF",
    fontSize:24,
    fontWeight:"700",
  },

  version:{
    color:"#94A3B8",
    marginTop:5,
    marginBottom:15,
  },

  description:{
    color:"#D6D8E6",
    lineHeight:24,
  },

  heading:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"700",
    marginBottom:15,
  },

  feature:{
    color:"#FFF",
    marginBottom:10,
  },
});