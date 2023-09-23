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
  }
  return (
    <Box p={"8px"}>
      <Center>
        <Image source={require("../../../assets/road.png")}></Image>
        <Text fontSize={"16px"} fontWeight={"500"}>
          Mục tiêu: 10km
        </Text>
        <Text fontSize={"12px"} fontWeight={"500"}>
          Khoảng cách
        </Text>

        <Center
          mt={"20px"}
          mb={"20px"}
          display={stopped === true ? "flex" : "none"}
        >
          <Text fontSize={"30px"} fontWeight={"300"}>
            Tập luyện 1/33
          </Text>
          <Text fontSize={"12px"} color={"muted.400"}>
            Bắt đầu chạy
          </Text>
        </Center>

        <Text
          color={"primary.600"}
          fontSize={"36"}
          fontWeight={"700"}
          display={stopped === true ? "flex" : "none"}
        >
          03.00 km
        </Text>

        <Text
          color={"primary.600"}
          fontSize={"36"}
          fontWeight={"700"}
          display={stopped === true ? "none" : "flex"}
        >
          01.20 km
        </Text>
      </Center>

      <HStack justifyContent={"space-evenly"}>
        <Center>
          <Text fontSize={"12px"} color={"muted.400"} fontWeight={"300"}>
            Thời gian
          </Text>
          <Text fontSize={"16px"}>00:12:00</Text>
        </Center>
        <Center>
          <Text fontSize={"12px"} color={"muted.400"} fontWeight={"300"}>
            Tốc độ
          </Text>
          <Text fontSize={"16px"}>05:00 km/h</Text>
        </Center>
        <Center>
          <Text fontSize={"12px"} color={"muted.400"} fontWeight={"300"}>
            Calories
          </Text>
          <Text fontSize={"16px"}>0 kcal</Text>
        </Center>
      </HStack>

      <Button
        p={"12px"}
        mt={"70px"}
        borderRadius={"8px"}
        onPress={IsPaused}
        display={pause === true ? "none" : "flex"}
      >
        <Text color={"white"} fontSize={"16px"}>
          Tạm dừng
        </Text>
      </Button>

      <HStack
        justifyContent={"space-evenly"}
        mb={"200px"}
        display={pause === true ? "flex" : "none"}
        mt={"70px"}
      >
        <Button borderRadius={"8px"} p={"12px"} w={"167px"} onPress={IsStopped}>
          <Text color={"white"} fontSize={"16px"}>
            Dừng lại
          </Text>
        </Button>
        <Button
          borderRadius={"8px"}
          p={"12px"}
          w={"167px"}
          onPress={IsContinued}
        >
          <Text color={"white"} fontSize={"16px"}>
            Tiếp tục
          </Text>
        </Button>
      </HStack>
    </Box>
  );
};

export default Run;

const styles = StyleSheet.create({});
