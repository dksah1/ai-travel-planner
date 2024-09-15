import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      ToastAndroid.show("please enter all details", ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        router.replace("/mytrip");

        console.log("user", user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorMessage, errorCode);
        // ..
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 150,
        backgroundColor: Colors.White,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        create New Account
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}> Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Full Name"
          onChangeText={(value) => setFullName(value)}
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit" }}> Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
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
        onPress={onCreateAccount}
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
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
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
          Sign In
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
