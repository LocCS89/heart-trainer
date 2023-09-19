/**
 TODO: Home Screen - Khang
 * Deadline
 */

import { StyleSheet } from "react-native";
import React from "react";
import { useAppDispatch } from "../../store";
import { removeUser } from "../../store/user.reducer";
import { Button, Column, Divider } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <Column flex={1}>
      <Button onPress={() => dispatch(removeUser())}>Logout</Button>
      <AppHeading>Heading</AppHeading>
      <AppHeading textVariant="large">Heading</AppHeading>
      <AppHeading textVariant="primary">Heading</AppHeading>
      <AppHeading textVariant="thin">Heading</AppHeading>
      <Divider my="8" />
      <AppText>Thông tin hôm nay</AppText>
      <AppText textVariant="title">Thông tin hôm nay</AppText>
      <AppText textVariant="thin">Thông tin hôm nay</AppText>
      <AppText textVariant="subtitle">Thông tin hôm nay</AppText>
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({});
