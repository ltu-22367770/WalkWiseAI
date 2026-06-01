import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function AchievementsScreen() {
  const achievements = [
    {
      icon: "🏆",
      title: "First Walk",
      description: "Completed your first walk",
    },
    {
      icon: "🚶",
      title: "10,000 Steps",
      description: "Reached 10,000 steps in a day",
    },
    {
      icon: "🔥",
      title: "7 Day Streak",
      description: "Walked for 7 consecutive days",
    },
    {
      icon: "🧍",
      title: "Posture Master",
      description: "Maintained excellent posture",
    },
    {
      icon: "🌟",
      title: "AI Favorite",
      description: "Completed all AI recommendations",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
      <Text style={styles.title}>
        🏆 Achievements
      </Text>

      {achievements.map((item, index) => (
        <View
          key={index}
          style={styles.card}
        >
          <Text style={styles.icon}>
            {item.icon}
          </Text>

          <View style={styles.content}>
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.cardText}>
              {item.description}
            </Text>
          </View>
        </View>
      ))}
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
    padding:18,
    flexDirection:"row",
    alignItems:"center",
    marginBottom:15,
  },

  icon:{
    fontSize:32,
    marginRight:15,
  },

  content:{
    flex:1,
  },

  cardTitle:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"700",
  },

  cardText:{
    color:"#94A3B8",
    marginTop:4,
  },
});