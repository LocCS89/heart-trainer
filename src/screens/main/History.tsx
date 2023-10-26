import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import HeaderBackground from "../../components/HeaderBackground";
import { Center, Column, FlatList, Icon, Text, Row, Pressable } from "native-base";
import { AntDesign, EvilIcons, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppText from "../../components/Typograpy/AppText";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { data } from "./Run"; 



type Props = {} & CompositeScreenProps<
  BottomTabScreenProps<BottomTabsParams, "History">,
  NativeStackScreenProps<RootStackParams>
>;

const History = ({ navigation }: Props) => {
  function renderItem({ item }: any) {
    return (
      
        <Column py="3">
          <Row justifyContent="space-between">
            <AppText>{item.content}</AppText>
            <Text color="muted.400" fontSize="sm" fontWeight="300">
              {item.date}
            </Text>
          </Row>
          <Row>
            <Center w="16"></Center>
            <Row flex={1} alignItems="center" justifyContent="space-between">
              <AppText textVariant="small">{item.calories}</AppText>
            </Row>
          </Row>
        </Column>
    );
  }
  return (
    <Column flex="1" bg="white">
      <HeaderBackground text="Thông tin" setting />
      <Column px="4" mt="5">
        <Row justifyContent="space-between">
          <Column>
            <AppText>10 tháng 7, 2023 - 16 tháng 7, 2023</AppText>
            <Row justifyContent="space-between">
              <Row space="1" alignItems="center">
                <Icon as={MaterialIcons} name="timer" color="#34A7D4" />
                <AppText textVariant="small">01:30:37</AppText>
              </Row>
              <Row space="1" alignItems="center">
                <Icon as={Ionicons} name="location-outline" color="#0284C7" />
                <AppText textVariant="small">18.06 km</AppText>
              </Row>
              <Row space="1" alignItems="center">
                <Icon as={Ionicons} name="flash-outline" color="#FB923C" />
                <AppText textVariant="small">18000 kcal</AppText>
              </Row>
            </Row>
          </Column>
          <TouchableOpacity>
            <Center bg="#49BAE6" p="3" rounded="lg">
              <Icon as={FontAwesome5} name="calendar-alt" color="white" size="md" />
            </Center>
          </TouchableOpacity>
        </Row>
        <FlatList data={data} renderItem={renderItem} mt="3" />
      </Column>
    </Column>
  );
};

export default History;

const styles = StyleSheet.create({});
