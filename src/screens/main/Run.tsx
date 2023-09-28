/**
 TODO: Run Screen - Khang
 * Deadline
 */

import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  ThreeDotsIcon,
  Icon,
  Image,
  ScrollView,
  Center,
  Button,
  Pressable,
} from "native-base";
import { Pause } from "iconsax-react-native";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";

const Run = () => {
  const [status, Status] = useState("run");

  function IsPaused() {
    Status("pause");
  }

  function IsStopped() {
    Status("stop");
  }

  function IsContinued() {
    Status("run");
  }

  return (
    <ScrollView p="3.5">
      <Center>
        <Image source={require("../../../assets/road.png")} maxWidth="xl" />
        <AppHeading mb="5">Mục tiêu: 10km</AppHeading>
        <AppText
          textVariant="title"
          mb="5"
          display={status === "stop" ? "none" : "flex"}
        >
          KHOẢNG CÁCH
        </AppText>

        <Center mb="5" display={status === "stop" ? "flex" : "none"}>
          <AppHeading textVariant="thin">Tập luyện 1/33</AppHeading>
          <AppText textVariant="subtitle">Bắt đầu chạy</AppText>
        </Center>

        <AppHeading
          textVariant="primary"
          display={status === "stop" ? "flex" : "none"}
          mb="5"
        >
          03.00 km
        </AppHeading>

        <AppHeading
          textVariant="primary"
          display={status === "stop" ? "none" : "flex"}
          mb="4"
        >
          01.20 km
        </AppHeading>
      </Center>

      <HStack justifyContent="space-evenly" mb="4">
        <Center>
          <AppText textVariant="small">Thời gian</AppText>
          <AppText textVariant="title">00:12:00</AppText>
        </Center>
        <Center>
          <AppText textVariant="small">Tốc độ</AppText>
          <AppText textVariant="title">05:00 km/h</AppText>
        </Center>
        <Center>
          <AppText textVariant="small">Calories</AppText>
          <AppText textVariant="title">100 kcal</AppText>
        </Center>
      </HStack>

      <Button
        p="3.5"
        borderRadius="8"
        onPress={IsPaused}
        display={status === "run" ? "flex" : "none"}
        _text={{ color: "white", fontWeight: "semibold", fontSize: "xl" }}
      >
        Tạm dừng
      </Button>

      <HStack
        justifyContent="space-between"
        display={status === "pause" ? "flex" : "none"}
      >
        <Button
          borderRadius="8"
          p="3.5"
          w="40"
          onPress={IsStopped}
          bg="#FF5555"
          _text={{ color: "white", fontWeight: "semibold", fontSize: "xl" }}
        >
          Dừng lại
        </Button>
        <Button
          borderRadius="8"
          p="3.5"
          w="40"
          onPress={IsContinued}
          _text={{ color: "white", fontWeight: "semibold", fontSize: "xl" }}
        >
          Tiếp tục
        </Button>
      </HStack>
    </ScrollView>
  );
};

export default Run;

const styles = StyleSheet.create({});
