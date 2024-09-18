import {
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectTravelsList } from "../../constants/Option";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/MyTripContext";

export default function selectTraveller() {
  const navigation = useNavigation();
  const [selectTraveller, setSelectTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectTraveller });
  }, [selectTraveller]);

  //   useEffect(() => {
  //     console.log(tripData);
  //   }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.White,
        height: "100%",
        paddingBottom: 200,
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
            <TouchableOpacity
              onPress={() => setSelectTraveller(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectTraveller={selectTraveller} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Link
          href={"/create-trip/select-date"}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              color: Colors.White,
              fontFamily: "outfit-medium",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Continue
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
