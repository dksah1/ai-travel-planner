import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SelectBudgetOptions } from "../../constants/Option";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/MyTripContext";

export default function SelectBudget() {
  const navigate = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigate.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  const OnClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Select Your Budget", ToastAndroid.LONG);
      return;
    }
    router.push("/create-trip/review-trip");
  };

  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Budget
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Choose spending habits for your future
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectTraveller={selectedOption} />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <TouchableOpacity
        onPress={OnClickContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 5,
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
      </TouchableOpacity>
    </View>
  );
}
