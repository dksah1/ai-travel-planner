import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Entypo name="location-pin" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
