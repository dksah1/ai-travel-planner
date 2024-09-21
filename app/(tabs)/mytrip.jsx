import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "./../../config/firebaseConfig";
export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    user && GetMyTrip();
  }, []);

  const GetMyTrip = async () => {
    set;
    const q = query(
      collection(db, "UserTrips", where("userEmail", "==", user?.email))
    );
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data]);
    });
  };
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
