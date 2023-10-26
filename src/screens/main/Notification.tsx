import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBackground from "../../components/HeaderBackground";
import { Column, Divider, Row, Switch } from "native-base";
import AppText from "../../components/Typograpy/AppText";

const Notification = () => {
  return (
    <>
      <HeaderBackground text="Cài đặt thông báo" hasBack />
      <Column flex={1} bg="white">
        <Column bg="#D4D4D4" rounded="2xl" px="3" py="1" mx="4" mt="12">
          <Row
            alignItems="center"
            justifyContent="space-between"
            borderBottomWidth="0.5"
          >
            <AppText>Nhắc nhở tập luyện</AppText>
            <Switch
              offTrackColor="white"
              offThumbColor="#49BAE6"
              defaultIsChecked
            />
          </Row>
          <Row alignItems="center" justifyContent="space-between">
            <AppText>Nhắc nhở uống nước</AppText>
            <Switch
              offTrackColor="white"
              offThumbColor="#49BAE6"
              defaultIsChecked
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({});
