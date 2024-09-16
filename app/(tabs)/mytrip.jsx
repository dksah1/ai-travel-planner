import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: "outfit-bold",
          }}
        >
          MyTrip
        </Text>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </View>
      {userTrips?.length == 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
