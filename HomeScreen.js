import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { auth, db } from "../App";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login"); // Go back to login screen
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      {userData ? (
        <>
          <Text>Email: {userData.email}</Text>
          <Text>
            Joined: {userData.createdAt?.toDate().toString() || "Unknown"}
          </Text>
        </>
      ) : (
        <Text>Loading user data...</Text>
      )}
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});
