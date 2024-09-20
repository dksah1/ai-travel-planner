import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/MyTripContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import moment from "moment";
export default function ReviewTrip() {
  const navigate = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter();

  useEffect(() => {
    navigate.setOptions({
      headerShown: true,
      headerTransparent: true,
      headertitle: "",
    });
  }, []);

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
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Review your trip
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
          Before generating your trip, Please review your Selection
        </Text>
        {/* Destination  selected info*/}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={34} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.Gray,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>
        {/* selcted date */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <AntDesign name="calendar" size={24} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.Gray,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                "  " +
                " To " +
                "  " +
                moment(tripData?.endDate).format("DD MMM")}{" "}
              ({tripData.totalNoOfDays} day)
            </Text>
          </View>
        </View>
        {/* who is travelling */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <AntDesign name="calendar" size={24} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.Gray,
              }}
            >
              who is travelling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>
        {/* Budget Info */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <AntDesign name="calendar" size={24} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.Gray,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/create-trip/generate-trip")}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 40,
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
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
