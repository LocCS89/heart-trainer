/**
 TODO: Drinking Info Component - Khang
 * Deadline
 */

import { StyleSheet, View } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  ThreeDotsIcon,
  Icon,
} from "native-base";
import AppHeading from "./Typograpy/AppHeading";
import AppText from "./Typograpy/AppText";
import {
  FontAwesome,
  Feather,
  EvilIcons,
  Entypo,
} from "react-native-vector-icons";
const DrinkingInfo = () => {
  return (
    <Box p={"8px"}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize={"16px"}>Bạn nên uống bao nhiêu nước</Text>
        <Icon
          as={Entypo}
          name="dots-three-horizontal"
          size={"lg"}
          color={"black"}
        ></Icon>
      </HStack>
      <Box
        mt={"10px"}
        bgColor={"primary.50"}
        borderRadius={"16px"}
        p={"10px"}
        pl={"15px"}
        pr={"15px"}
      >
        <HStack>
          <VStack>
            <HStack alignItems={"flex-end"}>
              <AppHeading textVariant="primary">2000</AppHeading>
              <Text ml={"5px"} fontSize={"12px"} color={"primary.600"}>
                ml
              </Text>
            </HStack>
            <Text fontSize={"12px"} fontWeight={"300"} color={"muted.400"}>
              Lượng nước bạn cần uống
            </Text>
            <HStack alignItems={"center"} mt={"10px"}>
              <Icon
                as={EvilIcons}
                name="clock"
                color={"mute.300"}
                size={"lg"}
              ></Icon>
              <Text
                fontSize={"12px"}
                fontWeight={"300"}
                color={"muted.400"}
                ml={"5px"}
              >
                Lần cuối cùng 15:00
              </Text>
            </HStack>
            <HStack alignItems={"center"} mt={"10px"}>
              <Icon
                as={Feather}
                name="bell"
                color={"#FB923C"}
                size={"lg"}
              ></Icon>
              <Text
                fontSize={"12px"}
                fontWeight={"300"}
                color={"#FB923C"}
                ml={"5px"}
              >
                Bật tính năng thông báo
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default DrinkingInfo;

const styles = StyleSheet.create({});
