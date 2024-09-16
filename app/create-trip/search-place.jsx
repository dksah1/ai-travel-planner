import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/MyTripContext";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function searchPlace() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search Place",
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      {/* <View>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data.description);
            console.log(details?.geometry.location);
            console.log(details?.photos[0]?.photo_refrence);
            console.log(details?.url);

            setTripData({
              locationInfo: {
                name: data.description,
                coordinates: details?.geometry.location,
                photoRef: details?.photos[0]?.photo_refrence,
                url: details?.url,
              },
            });
            router.push("/create-trip/selectTraveller");
          }}
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            language: "en",
          }}
          styles={{
            textInputContainer: {
              borderWidth: 1,
              borderRadius: 5,
              marginTop: 25,
            },
          }}
        />
      </View> */}
      <TouchableOpacity style={{ display: "flex", flexDirection: "row" }}>
        <Text>Search</Text>
        <TextInput
          keyboardType="default"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: Colors.Gray,
            width: 150,
          }}
        ></TextInput>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/create-trip/selectTraveller")}
      >
        <Text>select traveller</Text>
      </TouchableOpacity>
    </View>
  );
}
