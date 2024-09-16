import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectTravelsList } from "../../constants/Option";
import OptionCard from "../../components/CreateTrip/OptionCard";

export default function selectTraveller() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => console.log("json", json));
  //   }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Who's Travelling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          choose your travels
        </Text>

        <FlatList
          data={SelectTravelsList}
          renderItem={({ item, index }) => (
            <View>
              <OptionCard option={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
