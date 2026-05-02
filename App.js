import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Tab = createBottomTabNavigator();

function SplashScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.logo}>Fixiyaa</Text>
      <Text style={styles.tagline}>Solutions on your doorstep</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Home Services</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Electrician ⚡</Text>
        <Text>Professional electrical services</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Plumber 🚰</Text>
        <Text>Quick plumbing solutions</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>AC Repair ❄️</Text>
        <Text>Fast AC repair and maintenance</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function WorkerScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Worker Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Earnings</Text>
        <Text>₹1200</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pending Jobs</Text>
        <Text>3 Active Jobs</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go Online</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.heading}>Profile</Text>
      <Text>Fixiyaa User Profile</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Worker" component={WorkerScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  tagline: {
    marginTop: 10,
    color: '#cbd5e1',
    fontSize: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0f172a',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
