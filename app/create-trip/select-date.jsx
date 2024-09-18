import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
// import { Calendar } from "react-native-calendars";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/MyTripContext";

export default function SelectDate() {
  const navigation = useNavigation();
  // const [selected, setSelected] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDataeSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("please selct start and end Date", ToastAndroid.LONG);
    }

    const totalNoOfDays = endDate.diff(startDate, "days");
    console.log(totalNoOfDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD"),
      totalNoOfDays: totalNoOfDays + 1,
    });
  };

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
        Travel Dates
      </Text>
      {/* <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      /> */}
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={6}
          selectedRangeStyle={{
            backgroundColor: Colors.Primary,
          }}
          selectedDayTextStyle={{
            color: Colors.White,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={OnDataeSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        {/* <Link
          href={""}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        > */}
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
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  );
}
