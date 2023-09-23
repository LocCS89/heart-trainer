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
import BMI from "../../components/BMI";
import { FontAwesome } from "react-native-vector-icons";
import BMIInfo from "./BMIInfo";
const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <ScrollView>
      <Box mt={"60px"} p={"8px"}>
        <DrinkingInfo></DrinkingInfo>

        <Center mt={"35px"}>
          <Image source={require("../../../assets/road.png")}></Image>
          <Text fontSize={"12px"} fontWeight={"500"}>
            BÀI TẬP CỦA BẠN
          </Text>
          <Text fontSize={"30px"} fontWeight={"300"} mt={"24px"}>
            KHÔNG
          </Text>
          <HStack
            fontWeight={"500"}
            fontSize={"16px"}
            mt={"24px"}
            alignItems={"center"}
          >
            <Text>Chương trình luyện tập</Text>
            <Icon
              as={FontAwesome}
              name="angle-down"
              size={"30px"}
              color={"black"}
              ml={"3px"}
            ></Icon>
          </HStack>
        </Center>

        <Button borderRadius={"8px"} p={"12px"} mt={"50px"}>
          Chọn
        </Button>

        <Box mt={"40px"}>
          <Text fontSize={"16px"} fontWeight={"500"}>
            Hoàn thành mục tiêu chạy của bạn
          </Text>
          <Text fontWeight={"300"} fontSize={"12px"} color={"muted.400"}>
            10 tháng 7, 2023 - 16 tháng 7, 2023
          </Text>
          <Image source={require("../../../assets/Group 2.png")}></Image>
        </Box>

        <BMIInfo></BMIInfo>
      </Box>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
