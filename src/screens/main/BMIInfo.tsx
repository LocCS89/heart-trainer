/**
 TODO:
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
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
const BMIInfo = () => {
  return (
    <Box p={"8px"}>
      <VStack>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <AppText textVariant="title">Thông tin hôm nay</AppText>
        </HStack>
        <Text color={"muted.400"} fontWeight={"light"} fontSize={"12px"}>
          23 tháng 09, 2023
        </Text>
      </VStack>
      <Box
        mt={"10px"}
        bgColor={"primary.50"}
        borderRadius={"16px"}
        p={"10px"}
        pl={"15px"}
        pr={"15px"}
      >
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <AppText>BMI</AppText>
          <Text fontSize={"12px"} fontWeight={300}>
            Nam
          </Text>
        </HStack>
        <HStack justifyContent={"space-between"} alignItems={"flex-end"}>
          <VStack>
            <AppHeading textVariant="primary">21.0</AppHeading>
            <Text color={"muted.400"} fontWeight={"light"}>
              Bình thường
            </Text>
          </VStack>
          <HStack>
            <VStack>
              <AppText textVariant="thin">175 cm</AppText>
              <Text color={"muted.400"} fontWeight={"500"} fontSize={"12px"}>
                Chiều cao
              </Text>
            </VStack>
            <VStack ml={"10px"}>
              <AppText textVariant="thin">65 kg</AppText>
              <Text color={"muted.400"} fontWeight={"500"} fontSize={"12px"}>
                Cân nặng
              </Text>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default BMIInfo;

const styles = StyleSheet.create({});
