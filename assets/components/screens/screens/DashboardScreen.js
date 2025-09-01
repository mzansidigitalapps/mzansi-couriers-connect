import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const handleGoOffline = () => {
    Alert.alert('You are now offline');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.item}>• Pending pickups: 0</Text>
        <Text style={styles.item}>• Active deliveries: 0</Text>
        <Text style={styles.item}>• Completed today: 0</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGoOffline}>
        <Text style={styles.buttonText}>Go Offline</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 16 },
  title: { fontSize: 28, fontWeight: '800', textAlign: 'center' },
  card: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: 16, backgroundColor: '#fff' },
  item: { fontSize: 16, marginBottom: 6 },
  button: { backgroundColor: '#16a34a', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  buttonText: { color: '#fff', fontWeight: '700' }
});
