import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 170 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              Dashboard
            </Text>

            <Text style={styles.subTitle}>
              Welcome back, Vihar! 👋
            </Text>
          </View>

          <TouchableOpacity style={styles.bellButton}
            onPress={() =>
            router.push("/main/notifications")
          }>
            <Text style={styles.bell}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Overview */}
        <Text style={styles.sectionTitle}>
          Today's Overview
        </Text>

        <View style={styles.overviewCard}>
          <View style={styles.overviewItem}>
            <Text style={styles.overviewIcon}>👣</Text>
            <Text style={styles.overviewLabel}>Steps</Text>
            <Text style={styles.overviewValue}>6248</Text>
            <Text style={styles.overviewSub}>/10,000</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.overviewItem}>
            <Text style={styles.overviewIcon}>🔥</Text>
            <Text style={styles.overviewLabel}>Calories</Text>
            <Text style={styles.overviewValue}>345</Text>
            <Text style={styles.overviewSub}>kcal</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.overviewItem}>
            <Text style={styles.overviewIcon}>🕒</Text>
            <Text style={styles.overviewLabel}>Active Time</Text>
            <Text style={styles.overviewValue}>45</Text>
            <Text style={styles.overviewSub}>min</Text>
          </View>
        </View>

        {/* Walk Tracker */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              🚶 Walk Tracker
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push('/main/walk-tracker')
              }
            >
              <Text style={styles.link}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.metricsRow}>
            <View>
              <Text style={styles.metricLabel}>
                Distance
              </Text>
              <Text style={styles.metricValue}>
                2.35 km
              </Text>
            </View>

            <View>
              <Text style={styles.metricLabel}>
                Time
              </Text>
              <Text style={styles.metricValue}>
                28:40
              </Text>
            </View>

            <View>
              <Text style={styles.metricLabel}>
                Calories
              </Text>
              <Text style={styles.metricValue}>
                168 kcal
              </Text>
            </View>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.success}>
            Great start! Keep going 💪
          </Text>
        </View>

        {/* Quick Access */}
      <View style={styles.quickAccessRow}>
        <TouchableOpacity
          style={styles.quickAccessCard}
          onPress={() =>
            router.push("/main/health-report")
          }
        >
          <Text style={styles.quickIcon}>
            📊
          </Text>

          <Text style={styles.quickTitle}>
            Health Report
          </Text>

          <Text style={styles.quickSubtitle}>
            View overall health insights
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickAccessCard}
          onPress={() =>
            router.push("/main/battery")
          }
        >
          <Text style={styles.quickIcon}>
            🔋
          </Text>

          <Text style={styles.quickTitle}>
            Battery
          </Text>

          <Text style={styles.quickSubtitle}>
            Device battery analytics
          </Text>
        </TouchableOpacity>
      </View>

        {/* Posture Analysis */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              🧍 Posture Analysis
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push('/main/posture')
              }
            >
              <Text style={styles.link}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.postureScore}>
            82
            <Text style={styles.postureSmall}>
              /100
            </Text>
          </Text>

          <Text style={styles.good}>
            Good
          </Text>

          <Text style={styles.bodyIcon}>
            🧍
          </Text>

          <View style={styles.postureBar}>
            <View
              style={[
                styles.segment,
                { backgroundColor: '#22C55E' },
              ]}
            />
            <View
              style={[
                styles.segment,
                { backgroundColor: '#84CC16' },
              ]}
            />
            <View
              style={[
                styles.segment,
                { backgroundColor: '#EAB308' },
              ]}
            />
            <View
              style={[
                styles.segment,
                { backgroundColor: '#F97316' },
              ]}
            />
            <View
              style={[
                styles.segment,
                { backgroundColor: '#EF4444' },
              ]}
            />
          </View>
        </View>

        {/* AI Tip */}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>
            💡 Tip of the Day
          </Text>

          <Text style={styles.tipText}>
            Keep your shoulders relaxed and
            maintain a straight back while
            walking.
          </Text>
        </View>
      </ScrollView>

      

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navActive}>🏠</Text>
          <Text style={styles.navTextActive}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/activity')
          }
        >
          <Text style={styles.navIcon}>🚶</Text>
          <Text style={styles.navText}>
            Activity
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/ai-coach')
          }
        >
          <View style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/analytics')
          }>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navText}>
            Insights
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            router.push('/main/profile')
          }
        >
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#020617',
    paddingHorizontal:20,
  },

  header:{
    marginTop:70,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:25,
  },

  title:{
    color:'#fff',
    fontSize:32,
    fontWeight:'700',
  },

  subTitle:{
    color:'#94A3B8',
    marginTop:5,
  },

  bellButton:{
    backgroundColor:'#0B1530',
    width:50,
    height:50,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
  },

  bell:{fontSize:20},

  sectionTitle:{
    color:'#fff',
    fontSize:18,
    fontWeight:'700',
    marginBottom:15,
  },

  overviewCard:{
    backgroundColor:'#0B1530',
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:20,
    marginBottom:20,
  },

  overviewItem:{alignItems:'center'},
  overviewIcon:{fontSize:22},
  overviewLabel:{color:'#94A3B8',marginTop:8},
  overviewValue:{color:'#fff',fontSize:24,fontWeight:'700'},
  overviewSub:{color:'#94A3B8',fontSize:12},
  divider:{width:1,backgroundColor:'#273552'},

  card:{
    backgroundColor:'#0B1530',
    borderRadius:20,
    padding:20,
    marginBottom:20,
  },

  cardHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:15,
  },

  cardTitle:{
    color:'#fff',
    fontWeight:'700',
    fontSize:18,
  },

  link:{
    color:'#22C55E',
  },

  metricsRow:{
    flexDirection:'row',
    justifyContent:'space-between',
  },

  metricLabel:{color:'#94A3B8'},
  metricValue:{color:'#fff',fontWeight:'700'},

  progressBackground:{
    height:8,
    backgroundColor:'#1E293B',
    borderRadius:10,
    marginTop:20,
  },

  progressFill:{
    width:'75%',
    height:'100%',
    backgroundColor:'#22C55E',
    borderRadius:10,
  },

  success:{
    color:'#22C55E',
    marginTop:10,
  },

  postureScore:{
    color:'#4F7CFF',
    fontSize:50,
    fontWeight:'700',
  },

  postureSmall:{
    color:'#fff',
    fontSize:20,
  },

  good:{
    color:'#22C55E',
    fontSize:22,
    fontWeight:'700',
  },

  bodyIcon:{
    textAlign:'center',
    fontSize:110,
  },

  postureBar:{
    flexDirection:'row',
    marginTop:10,
  },

  segment:{
    flex:1,
    height:8,
    marginHorizontal:2,
    borderRadius:5,
  },

  tipCard:{
    backgroundColor:'#0B1530',
    borderRadius:20,
    padding:20,
    marginBottom:20,
  },

  tipTitle:{
    color:'#fff',
    fontWeight:'700',
    fontSize:18,
  },

  tipText:{
    color:'#94A3B8',
    marginTop:10,
    lineHeight:22,
  },

  quickAccessRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 25,
},

quickAccessCard: {
  backgroundColor: "#0B1530",
  width: "48%",
  borderRadius: 20,
  padding: 18,
  alignItems: "center",

  shadowColor: "#6C63FF",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 8,

  elevation: 6,
},

quickIcon: {
  fontSize: 34,
  marginBottom: 10,
},

quickTitle: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
  textAlign: "center",
},

quickSubtitle: {
  color: "#94A3B8",
  fontSize: 12,
  textAlign: "center",
  marginTop: 6,
},

  bottomNav:{
    position:'absolute',
    bottom:20,
    left:20,
    right:20,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#131F3C',
    borderRadius:30,
    paddingVertical:15,
  },

  navIcon:{fontSize:22,textAlign:'center'},
  navText:{color:'#94A3B8',fontSize:12,textAlign:'center'},
  navActive:{fontSize:22,textAlign:'center'},
  navTextActive:{color:'#8B5CF6',fontSize:12,textAlign:'center'},

  plusButton:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#5B4BFF',
    justifyContent:'center',
    alignItems:'center',
    marginTop:-35,
  },

  plusText:{
    color:'#fff',
    fontSize:34,
    fontWeight:'700',
  },
});


