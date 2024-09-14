import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("./../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.description}>
          Welcome to AI Travel Planner. Choose your favourite trip and discover
          your next adventure effortlessly.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("auth/sign-in")}
          style={styles.button}
        >
          <Text
            style={{
              color: Colors.White,
              textAlign: "center",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Custom Stylesheet
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  logo: {
    width: "100%",
    height: 500,
  },
  container: {
    backgroundColor: Colors.White,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 17,
    textAlign: "center",
    color: Colors.Gray,
    lineHeight: 22,
    // marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.Primary,
    borderRadius: 99,
    marginTop: "15%",
  },
});
