import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../components/Login";
import { auth } from "./../config/firebaseConfig";
import { Redirect } from "expo-router";

const Index = () => {
  const user = auth.currentUser;

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
