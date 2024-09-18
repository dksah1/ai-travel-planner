import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option, selectTraveller }) {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.LightGray,
          borderRadius: 15,
        },
        selectTraveller?.id == option?.id && { borderWidth: 2 },
      ]}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 40,
        }}
      >
        {option?.icon}
      </Text>
    </View>
  );
}
