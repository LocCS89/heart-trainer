/**
 TODO:
 * Deadline
 */

import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  ScrollView,
  Column,
  Center,
} from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams>;
const TrainingPlan = ({ navigation }: Props) => {
  return (
    <Column flex="1" bg="white">
      <ScrollView mt="10" p="3.5">
        <Center my="4">
          <AppHeading fontWeight="semibold" fontSize="xl">
            Kế hoạch
          </AppHeading>
        </Center>

        <VStack mb="5">
          <AppHeading mb="5" fontSize="xl">
            Hướng dẫn
          </AppHeading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate("HowToRun")}>
              <VStack>
                <Image
                  source={require("../../../assets/tutorial_image.png")}
                  mb="1"
                />
                <AppText fontSize="xl" textVariant="thin">
                  Cách chạy bộ đúng cách
                </AppText>
              </VStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('HowToWarmUp')}>
              <VStack ml="4">
                <Image
                  source={require("../../../assets/tutorial_image.png")}
                  mb="1"
                />
                <AppText textVariant="thin">Các bài khởi động</AppText>
              </VStack>
            </TouchableOpacity>
          </ScrollView>
        </VStack>

        <VStack>
          <Box mb="4">
            <AppHeading fontSize="xl">Kế hoạch chạy bộ</AppHeading>
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
              alt=""
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
              alt=""
              w='100%'
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
              alt=""
              w='100%'

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
    </Column>
  );
};

export default TrainingPlan;

const styles = StyleSheet.create({});
