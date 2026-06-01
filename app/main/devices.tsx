import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function DevicesScreen() {
  const devices = [
    {
      name: "Apple Health",
      status: "Connected",
      icon: "🍎",
    },
    {
      name: "Google Fit",
      status: "Connected",
      icon: "🏃",
    },
    {
      name: "Smart Watch",
      status: "Not Connected",
      icon: "⌚",
    },
    {
      name: "Bluetooth Sensor",
      status: "Not Connected",
      icon: "📡",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <Text style={styles.title}>
        ⌚ Connected Devices
      </Text>

      {devices.map((device, index) => (
        <View
          key={index}
          style={styles.card}
        >
          <Text style={styles.icon}>
            {device.icon}
          </Text>

          <View style={styles.info}>
            <Text style={styles.deviceName}>
              {device.name}
            </Text>

            <Text
              style={[
                styles.status,
                {
                  color:
                    device.status === "Connected"
                      ? "#22C55E"
                      : "#EF4444",
                },
              ]}
            >
              {device.status}
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
    fontSize:30,
    marginRight:15,
  },

  info:{
    flex:1,
  },

  deviceName:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"600",
  },

  status:{
    marginTop:5,
  },
});