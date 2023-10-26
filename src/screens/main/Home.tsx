/**
  TODO: Thông tin uống nước
  TODO: Tính lại BMI
 */
import { StyleSheet } from "react-native";
import React from "react";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import DrinkingInfo from "../../components/DrinkingInfo";
import { FontAwesome } from "@expo/vector-icons";
import BMIInfo from "./BMIInfo";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, HStack, Icon, Image, ScrollView, Center, Button, Column } from "native-base";
import Chart from "../../components/Chart";

type Props = {} & CompositeScreenProps<
  BottomTabScreenProps<BottomTabsParams, "Home">,
  NativeStackScreenProps<RootStackParams>
>;

const Home = ({ navigation }: Props) => {
  return (
    <Column flex="1" safeAreaTop bg="white">
      <ScrollView>
        <Column mt="6">
          <DrinkingInfo _stack={{ px: "4" }} />
          <Image mt="8" alt="road" source={require("../../../assets/road.png")} w="full" />
          <Column px="4">
            <Center mt={-10}>
              <AppText textVariant="title">BÀI TẬP CỦA BẠN</AppText>
              <AppHeading textVariant="thin" mt="4">
                KHÔNG
              </AppHeading>
              <HStack mt="4" alignItems="center">
                <AppHeading>Chương trình luyện tập</AppHeading>
                <Icon as={FontAwesome} name="angle-down" size="30" color="black" ml="2" />
              </HStack>
            </Center>

            <Button
              onPress={() => navigation.navigate("Run")}
              rounded="lg"
              p="3"
              mt="8"
              _text={{ color: "white", fontWeight: "semibold" }}
            >
              Chọn
            </Button>

            <Box mt="10">
              <AppText textVariant="title">Hoàn thành mục tiêu chạy của bạn</AppText>
              <AppText textVariant="subtitle">10 tháng 7, 2023 - 16 tháng 7, 2023</AppText>
              <Chart />
            </Box>

            <BMIInfo onPress={() => navigation.navigate("UpdateBMR")} />
          </Column>
        </Column>
      </ScrollView>
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({});
