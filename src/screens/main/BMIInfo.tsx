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
    <Box mt="6">
      <VStack>
        <HStack alignItems="center" justifyContent="space-between">
          <AppHeading>Thông tin hôm nay</AppHeading>
        </HStack>
        <AppText textVariant="subtitle">23 tháng 09, 2023</AppText>
      </VStack>
      <Box mt="6" bgColor="primary.50" borderRadius="16" p="5" mb="6">
        <HStack justifyContent="space-between" alignItems="center">
          <AppHeading textVariant="thin">BMI</AppHeading>
          <AppText>Nam</AppText>
        </HStack>
        <HStack justifyContent="space-between" alignItems="flex-end">
          <VStack>
            <AppHeading textVariant="primary">21.0</AppHeading>
            <AppText textVariant="thin">Bình thường</AppText>
          </VStack>
          <HStack>
            <VStack>
              <AppHeading textVariant="thin">175 cm</AppHeading>
              <AppText textVariant="subtitle">Chiều cao</AppText>
            </VStack>
            <VStack ml="10">
              <AppHeading textVariant="thin">65 kg</AppHeading>
              <AppText textVariant="subtitle">Cân nặng</AppText>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default BMIInfo;

const styles = StyleSheet.create({});
