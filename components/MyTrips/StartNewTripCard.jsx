import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location" size={24} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-medium",
        }}
      >
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.Gray,
        }}
      >
        Looks like its time to plan a new travel experience! Get started below
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 10,
          backgroundColor: Colors.Primary,
          borderRadius: 12,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.White,
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
