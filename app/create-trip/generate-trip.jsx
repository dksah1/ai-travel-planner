import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/MyTripContext";
import { AI_Prompt } from "../../constants/Option";
import { chatSession } from "../../config/AiModal";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./../../config/firebaseConfig";
export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;
  useEffect(() => {
    GenerateAiTrip();
  }, [tripData]);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_Prompt.replace(
      "{location}",
      tripData?.locationInfo?.name || "USA"
    )
      .replace("{totalDay}", tripData?.totalNoOfDays)
      .replace("{totalNight}", tripData?.totalNoOfDays - 1)
      .replace("{traveller}", tripData?.traveler?.title)
      .replace("{budget}", tripData?.budget)
      .replace("{totalDays}", tripData.totalNoOfDays)
      .replace("{totalNights}", tripData.totalNoOfDays - 1);

    // console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log(result.response.text());
    const tripResponse = JSON.parse(result.response.text());
    setLoading(false);
    const docId = Date.now().toString();
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      // userEmail: user?.email,
      tripPlan: tripResponse, //AI REsult
      tripData: JSON.stringify(tripData), //user selection data
      // docId: docId,
    });
    console.log("result", result_);

    router.push("(tabs)/mytrip");
  };

  return (
    <View
      style={{
        padding: 25,
        marginTop: 75,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-medium",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        we are working to generate your dream trip
      </Text>
      <Image
        source={require("./../../assets/images/home.jpg")}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
        }}
      />
      <Text
        style={{
          fontFamily: "outfit",
          color: Colors.Gray,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
