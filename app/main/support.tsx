import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function SupportScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Text style={styles.title}>
        ❓ Help & Support
      </Text>

      <View style={styles.card}>
        <Text style={styles.heading}>
          Frequently Asked Questions
        </Text>

        <Text style={styles.text}>
          • How do I start a walk?
        </Text>

        <Text style={styles.text}>
          • How is posture calculated?
        </Text>

        <Text style={styles.text}>
          • How do AI recommendations work?
        </Text>

        <Text style={styles.text}>
          • How can I reset my goals?
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>
          Contact Support
        </Text>

        <Text style={styles.text}>
          📧 support@walkwiseai.com
        </Text>

        <Text style={styles.text}>
          🌐 www.walkwiseai.com
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

  heading:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"700",
    marginBottom:15,
  },

  text:{
    color:"#D6D8E6",
    marginBottom:10,
    lineHeight:22,
  },
});