/**
 TODO:
 * Deadline
 */

import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import HeaderBackground from "../../components/HeaderBackground";
import { Column, Icon, Pressable, Row, Text } from "native-base";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import AppText from "../../components/Typograpy/AppText";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = {} & CompositeScreenProps<
  NativeStackScreenProps<RootStackParams, "Setting">,
  BottomTabScreenProps<BottomTabsParams>
>;

const Setting = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <HeaderBackground text="Cài đặt" hasBack />
      <Column flex={1} px="4" bg="white">
        <TouchableOpacity onPress={() => navigation.navigate("UpdateBMR")}>
          <Row alignItems="center" space="3" py="4">
            <Icon as={Octicons} name="person" size="lg" color="#34A7D4" />
            <Text fontWeight="300">Cập nhật chỉ số trao đổi chất (BMR)</Text>
          </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("DrinkingCalendar")}>
          <Row alignItems="center" space="3" py="4">
            <Icon
              as={Ionicons}
              name="water-outline"
              size="lg"
              color="#16A34A"
            />
            <Text fontWeight="300">Tạo mới lịch uống nước</Text>
          </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Notification")}>
        <Row alignItems="center" space="3" py="4">
          <Icon as={Feather} name="bell" size="lg" color="#FB923C" />
          <Text fontWeight="300">Thông báo</Text>
        </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(removeUser())}>
          <Row alignItems="center" justifyContent="space-between" mt="3">
            <AppText>Đăng xuất</AppText>
            <Icon as={Octicons} name="sign-out" size="lg" color="#FF5555" />
          </Row>
        </TouchableOpacity>
      </Column>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({});
