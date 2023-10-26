/**
 TODO:
 * Deadline
 */

import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Box, HStack, VStack, Icon } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import { Entypo } from "@expo/vector-icons";
import { useAppSelector } from "../../store";
import { EGender } from "../../types/user";
type Props = {} & TouchableOpacityProps;

function getStatusBMI(BMI: number) {
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI < 24.9) {
    return "Normal weight";
  } else if (BMI < 29.9) {
    return "Overweight";
  } else if (BMI < 34.9) {
    return "Obesity level 1";
  } else if (BMI < 39.9) {
    return "Obesity level 2";
  } else {
    return "Obesity level 3";
  }
}

const BMIInfo = (props: Props) => {
  const { height, weight, gender } = useAppSelector((state) => state.user.user!);
  const BMI = weight / Math.pow(height / 100, 2);
  const { ...buttonProps } = props;
  return (
    <Box  bg='white' mt="6">
      <VStack>
        <HStack alignItems="center" justifyContent="space-between">
          <AppText textVariant="title">Thông tin hôm nay</AppText>
          <TouchableOpacity {...buttonProps}>
            <Icon as={Entypo} name="dots-three-horizontal" size="md" />
          </TouchableOpacity>
        </HStack>
        <AppText textVariant="subtitle">23 tháng 09, 2023</AppText>
      </VStack>
      <Box mt="6" bgColor="primary.50" borderRadius="16" p="5" mb="6">
        <HStack justifyContent="space-between" alignItems="center" mb="3">
          <AppText>BMI</AppText>
          <AppText textVariant="thin">{gender === EGender.M ? "Male" : "Female"}</AppText>
        </HStack>
        <HStack justifyContent="space-between" alignItems="flex-end">
          <VStack>
            <AppHeading textVariant="primary">{BMI.toPrecision(4)}</AppHeading>
            <AppText textVariant="thin">{getStatusBMI(BMI)}</AppText>
          </VStack>
          <HStack>
            <VStack>
              <AppText textVariant="thin">{height} cm</AppText>
              <AppText textVariant="small">Height</AppText>
            </VStack>
            <VStack ml="10">
              <AppText textVariant="thin">{weight} kg</AppText>
              <AppText textVariant="small">Weight</AppText>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default BMIInfo;

const styles = StyleSheet.create({});
