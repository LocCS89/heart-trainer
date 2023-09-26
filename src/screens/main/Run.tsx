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
  const [pause, Paused] = useState(false);
  const [stopped, Stopped] = useState(false);

  function IsPaused() {
    Paused(true);
  }
  function IsContinued() {
    Paused(false);
  }
  function IsStopped() {
    Stopped(true);
    Paused(false);
  }
  return (
    <ScrollView p="2.5">
      <Center>
        <Image source={require("../../../assets/road.png")} maxWidth="xl" />
        <AppHeading>Mục tiêu: 10km</AppHeading>
        <AppText textVariant="title">KHOẢNG CÁCH</AppText>

        <Center mt="5" mb="5" display={stopped === true ? "flex" : "none"}>
          <AppHeading textVariant="thin">Tập luyện 1/33</AppHeading>
          <AppText textVariant="subtitle">Bắt đầu chạy</AppText>
        </Center>

        <AppHeading
          textVariant="primary"
          display={stopped === true ? "flex" : "none"}
        >
          03.00 km
        </AppHeading>

        <AppHeading
          textVariant="primary"
          display={stopped === false ? "flex" : "none"}
        >
          01.20 km
        </AppHeading>
      </Center>

      <HStack justifyContent="space-evenly">
        <Center>
          <AppText textVariant="subtitle">Thời gian</AppText>
          <AppHeading>00:12:00</AppHeading>
        </Center>
        <Center>
          <AppText textVariant="subtitle">Tốc độ</AppText>
          <AppHeading>05:00 km/h</AppHeading>
        </Center>
        <Center>
          <AppText textVariant="subtitle">Calories</AppText>
          <AppHeading>100 kcal</AppHeading>
        </Center>
      </HStack>

      <Button
        p="3.5"
        borderRadius="8"
        onPress={IsPaused}
        display={pause === true ? "none" : "flex"}
      >
        <AppHeading>Tạm dừng</AppHeading>
      </Button>

      <HStack
        justifyContent="space-between"
        display={pause === true ? "flex" : "none"}
      >
        <Button
          borderRadius="8"
          p="3.5"
          w="40"
          onPress={IsStopped}
          bg="#FF5555"
        >
          <AppHeading>Dừng lại</AppHeading>
        </Button>
        <Button borderRadius="8" p="3.5" w="40" onPress={IsContinued}>
          <AppHeading>Tiếp tục</AppHeading>
        </Button>
      </HStack>

      <Box h="30"></Box>
    </ScrollView>
  );
};

export default Run;

const styles = StyleSheet.create({});
