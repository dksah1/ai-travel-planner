import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = async () => {
    // Check if email and password are filled
    if (!email) {
      ToastAndroid.show("Please enter your email", ToastAndroid.SHORT);
      return;
    }
    if (!password) {
      ToastAndroid.show("Please enter your password", ToastAndroid.SHORT);
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // Navigate to the dashboard or home screen
        // if (user) {
        //   router.push("");
        // }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, error.code);

        // Handle common authentication errors
        switch (errorCode) {
          case "auth/invalid-email":
            ToastAndroid.show("Invalid email format", ToastAndroid.LONG);
            break;
          case "auth/user-not-found":
            ToastAndroid.show("User not found", ToastAndroid.LONG);
            break;
          case "auth/invalid-credential":
            ToastAndroid.show("Invalid User Creadentials", ToastAndroid.LONG);
            break;
          case "auth/wrong-password":
            ToastAndroid.show("Incorrect password", ToastAndroid.LONG);
            break;
          case "auth/too-many-requests":
            ToastAndroid.show(
              "Too many attempts, please try again later",
              ToastAndroid.LONG
            );
            break;
          default:
            ToastAndroid.show("Authentication error", ToastAndroid.LONG);
            break;
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
        }}
      >
        Let's Sign You In
      </Text>
      {/* <Text
        style={{
          fontSize: 30,
          color: Colors.Gray,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          color: Colors.Gray,
          marginTop: 10,
        }}
      >
        You have been missed!
      </Text> */}
      <View style={{ marginTop: 0 }}>
        <Text style={{ fontFamily: "outfit" }}> Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}> Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter your Password"
          onChangeText={(value) => setPassword(value)}
        ></TextInput>
      </View>
      {/* signin btn */}
      <TouchableOpacity
        onPress={onSignIn}
        style={{
          padding: 20,
          marginTop: 50,
          backgroundColor: Colors.Primary,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            color: Colors.White,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      {/* create account btn */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 20,
          marginTop: 50,
          backgroundColor: Colors.White,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.Primary,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.Gray,
  },
});
