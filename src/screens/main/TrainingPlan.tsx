/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
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
  Image,
  ScrollView,
  Center,
  Button,
  AspectRatio,
} from "native-base";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
const TrainingPlan = () => {
  return (
    <ScrollView>
      <ScrollView mt="10" p="3.5">
        <Center mb="7">
          <AppHeading>Kế Hoạch</AppHeading>
        </Center>

        <VStack mb="5">
          <AppHeading mb="5">Hướng dẫn</AppHeading>
          <ScrollView horizontal>
            <VStack>
              <Image
                source={require("../../../assets/tutorial_image.png")}
                mb="1"
              />
              <AppText textVariant="thin">Cách chạy bộ đúng cách</AppText>
            </VStack>

            <VStack ml="4">
              <Image
                source={require("../../../assets/tutorial_image.png")}
                mb="1"
              />
              <AppText textVariant="thin">Các bài khởi động</AppText>
            </VStack>
          </ScrollView>
        </VStack>

        <VStack>
          <Box mb="4">
            <AppHeading>Kế hoạch chạy bộ</AppHeading>
            <AppText textVariant="subtitle">
              10 tháng 7, 2023 - 16 tháng 7, 2023
            </AppText>
          </Box>

          <Box>
            <Image
              source={require("../../../assets/plan_image.png")}
              maxH="40"
              borderTopLeftRadius="2xl"
              borderTopRightRadius="2xl"
            />
            <Box
              bg="muted.100"
              borderBottomLeftRadius="2xl"
              borderBottomRightRadius="2xl"
              p="3"
            >
              <AppHeading mb="2">Bắt đầu chạy</AppHeading>
              <HStack justifyContent="space-between" alignItems="center">
                <AppHeading textVariant="smprimary">
                  NGƯỜI MỚI BẮT ĐẦU
                </AppHeading>
                <AppText textVariant="subtitle">3 ngày/ tuần, 11 tuần</AppText>
              </HStack>
            </Box>
          </Box>

          <Box mb="5">
            <Image
              source={require("../../../assets/trainning1.png")}
              maxH="40"
              borderTopLeftRadius="2xl"
              borderTopRightRadius="2xl"
            />
            <Box
              bg="muted.100"
              borderBottomLeftRadius="2xl"
              borderBottomRightRadius="2xl"
              p="3"
            >
              <AppHeading mb="2">Chạy 5 Km</AppHeading>
              <HStack justifyContent="space-between" alignItems="center">
                <AppHeading textVariant="smprimary">
                  NGƯỜI MỚI BẮT ĐẦU
                </AppHeading>
                <AppText textVariant="subtitle">3 ngày/ tuần, 9 tuần</AppText>
              </HStack>
            </Box>
          </Box>

          <Box>
            <Image
              source={require("../../../assets/trainning2.png")}
              maxH="40"
              borderTopLeftRadius="2xl"
              borderTopRightRadius="2xl"
            />
            <Box
              bg="muted.100"
              borderBottomLeftRadius="2xl"
              borderBottomRightRadius="2xl"
              p="3"
            >
              <AppHeading mb="2">Chạy 5 - 10 Km</AppHeading>
              <HStack justifyContent="space-between" alignItems="center">
                <AppHeading textVariant="smprimary">TRUNG CẤP</AppHeading>
                <AppText textVariant="subtitle">3 ngày/ tuần, 10 tuần</AppText>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </ScrollView>
    </ScrollView>
  );
};

export default TrainingPlan;

const styles = StyleSheet.create({});
