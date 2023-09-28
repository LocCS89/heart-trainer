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

const PlanInit = () => {
  return (
    <ScrollView>
      <ScrollView mt="10" p="3.5">
        <HStack mb="5">
          <Icon
            as={Entypo}
            name="chevron-thin-left"
            size="lg"
            color="muted.800"
          />
          <Center w="80">
            <AppHeading>Lời khuyên</AppHeading>
          </Center>
        </HStack>

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
            <HStack alignItems="center" justifyContent="space-between" mb="5">
              <AppHeading>Ngày bắt đầu</AppHeading>
              <AppText textVariant="thin">28 tháng 09, 2023</AppText>
            </HStack>

            <HStack alignItems="center" justifyContent="space-between" mb="5">
              <AppHeading>Thời gian thông báo</AppHeading>
              <AppText textVariant="thin">18:00</AppText>
            </HStack>

            <HStack alignItems="center" justifyContent="space-between" mb="5">
              <VStack>
                <AppHeading>Ngày tập luyện ưa thích</AppHeading>
                <AppText textVariant="subtitle">Thứ 2, Thứ 4, Thứ 6</AppText>
              </VStack>
              <Icon
                as={Entypo}
                name="chevron-thin-right"
                color="muted.300"
                size="lg"
              />
            </HStack>

            <HStack alignItems="center" justifyContent="space-between" mb="5">
              <AppHeading>Bắt đầu chạy</AppHeading>
              <AppText textVariant="thin">Người mới bắt đầu</AppText>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </ScrollView>
  );
};

export default PlanInit;

const styles = StyleSheet.create({});
