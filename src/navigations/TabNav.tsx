import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/Home";
import History from "../screens/main/History";
import { BottomTabsParams } from "./config";
import Advice from "../screens/main/Advice";
import TrainingPlan from "../screens/main/TrainingPlan";
import {
  HomeTrendUp,
  Reserve,
  TaskSquare,
  Profile,
} from "iconsax-react-native";
import { useTheme } from "native-base";

const Tab = createBottomTabNavigator<BottomTabsParams>();

const TabNav = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary[600],
        tabBarInactiveTintColor: colors.muted[500],
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeTrendUp size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Advice"
        component={Advice}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Reserve size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TrainingPlan"
        component={TrainingPlan}
        options={{
          tabBarIcon: ({ size, color }) => (
            <TaskSquare size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Profile size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
