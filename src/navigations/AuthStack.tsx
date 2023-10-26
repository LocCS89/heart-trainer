import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParams } from "./config";
import PreAuth from "../screens/auth/PreAuth";
import PersonalInfo from "../screens/auth/PersonalInfo";
import ForgotPassword from "../screens/auth/ForgotPassword";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="PreAuth" screenOptions={{headerShown:false}}>
      <Stack.Screen name="PreAuth" component={PreAuth} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
