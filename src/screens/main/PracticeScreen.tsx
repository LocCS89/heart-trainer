import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Image, Stack } from "native-base";
import AppText from "../../components/Typograpy/AppText";
import AppHeading from "../../components/Typograpy/AppHeading";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import HeaderBackground from "../../components/HeaderBackground";

type Props = {} & NativeStackScreenProps<RootStackParams, "PracticeScreen">;

const PracticeScreen = ({ route }: Props) => {
  const { content } = route.params;
  return (
    <>
      <Stack zIndex={1} position="absolute">
        <HeaderBackground text="" hasBack />
      </Stack>
      <Image alt="" source={require("../../../assets/road.png")} w="100%" />
      <Center>
        <AppText mb="8">Mục tiêu: 3km</AppText>
        <AppHeading textVariant="thin">{content}</AppHeading>
        <AppText textVariant="small" mb="8">
          Bắt đầu chạy
        </AppText>
        <AppHeading textVariant="primary">03.00 km</AppHeading>
      </Center>
    </>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({});
