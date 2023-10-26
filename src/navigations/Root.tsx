import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import ErrorOverlay from "../components/ErrorOverlay";
import { useAppSelector } from "../store";
import { RootStackParams } from "./config";
import UpdateBMR from "../screens/main/UpdateBMR";
import Run from "../screens/main/Run";
import PracticeScreen from "../screens/main/PracticeScreen";
import Setting from "../screens/main/Setting";
import DrinkingCalendar from "../screens/main/DrinkingCalendar";
import Notification from "../screens/main/Notification";
import HowToRun from "../screens/main/HowToRun";
import HowToWarmUp from "../screens/main/HowToWarmUp";
import Article1 from "../screens/main/Article/Article1";
import Article2 from "../screens/main/Article/Article2";
import Article3 from "../screens/main/Article/Article3";
import Article4 from "../screens/main/Article/Article4";
import Article5 from "../screens/main/Article/Article5";
import Article6 from "../screens/main/Article/Article6";
import Article7 from "../screens/main/Article/Article7";
import Article8 from "../screens/main/Article/Article8";
import Article9 from "../screens/main/Article/Article9";
import Advice1 from "../screens/main/Article/Advice1";
import Advice2 from "../screens/main/Article/Advice2";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!user && <Stack.Screen name="Auth" component={AuthStack} />}
          {user && (
            <>
              <Stack.Screen name="TabNav" component={TabNav} />
              <Stack.Screen name="Setting" component={Setting} />
            </>
          )}
          <Stack.Screen name="UpdateBMR" component={UpdateBMR} />
          <Stack.Screen name="Run" component={Run} />
          <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
          <Stack.Screen name="DrinkingCalendar" component={DrinkingCalendar} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="HowToRun" component={HowToRun} />
          <Stack.Screen name="HowToWarmUp" component={HowToWarmUp} />
          <Stack.Screen name="Article1" component={Article1} />
          <Stack.Screen name="Article2" component={Article2} />
          <Stack.Screen name="Article3" component={Article3} />
          <Stack.Screen name="Article4" component={Article4} />
          <Stack.Screen name="Article5" component={Article5} />
          <Stack.Screen name="Article6" component={Article6} />
          <Stack.Screen name="Article7" component={Article7} />
          <Stack.Screen name="Article8" component={Article8} />
          <Stack.Screen name="Article9" component={Article9} />
          <Stack.Screen name="Advice1" component={Advice1} />
          <Stack.Screen name="Advice2" component={Advice2} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
