/**
 TODO: Home Screen - Khang
 * Deadline
 */
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
} from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { Divider } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import DrinkingInfo from "../../components/DrinkingInfo";
import { FontAwesome } from "react-native-vector-icons";
import BMIInfo from "./BMIInfo";

const Home = () => {
  return (
    <ScrollView>
      <Box mt="16" p="2.5">
        <DrinkingInfo />

        <Center mt="10">
          <Image source={require("../../../assets/road.png")} maxWidth="xl" />
          <AppText textVariant="title">BÀI TẬP CỦA BẠN</AppText>
          <AppHeading textVariant="thin" mt="4">
            KHÔNG
          </AppHeading>
          <HStack mt="4" alignItems="center">
            <AppHeading>Chương trình luyện tập</AppHeading>
            <Icon
              as={FontAwesome}
              name="angle-down"
              size="30"
              color="black"
              ml="2"
            />
          </HStack>
        </Center>

        <Button borderRadius="8" p="4" mt="10">
          <AppHeading>Chọn</AppHeading>
        </Button>

        <Box mt="10">
          <AppHeading>Hoàn thành mục tiêu chạy của bạn</AppHeading>
          <AppText textVariant="subtitle">
            10 tháng 7, 2023 - 16 tháng 7, 2023
          </AppText>
          <Image source={require("../../../assets/Group 2.png")} />
        </Box>

        <BMIInfo />
      </Box>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
