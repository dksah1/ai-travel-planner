import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { CreateTripContext } from "./../context/MyTripContext";
export default function RootLayout() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       " outfit": require("../assets/fonts/Outfit-Regular.ttf"), // Ensure the path to your font is correct
  //       "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"), // Ensure the path to your font is correct
  //       "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"), // Ensure the path to your font is correct
  //     });
  //     setFontsLoaded(true);
  //   };

  //   loadFonts();
  // }, []);

  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  const [tripData, setTripData] = useState([]);

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      /> */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
