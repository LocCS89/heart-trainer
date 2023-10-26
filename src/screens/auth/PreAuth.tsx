import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Column,
  Image,
  Row,
  Text,
} from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { LOGO_HEIGHT, LOGO_WIDTH } from "../../utils/constant";

type Props = {} & NativeStackScreenProps<AuthStackParams, "PreAuth">;

const PreAuth = ({ navigation, route }: Props) => {
  return (
    <ImageBackground
      source={require("../../../assets/pre_auth.png")}
      style={{ flex: 1 }}
    >
      <Column bg='white' flex={1} px="5" justifyContent="space-between" pt="20" pb="10">
        <Column>
          <Center mb="10">
            <Image alt="" source={require("../../../assets/app_logo.png")} w={LOGO_WIDTH} h={LOGO_HEIGHT}/>
          </Center>
          <Column space="4"></Column>
        </Column>
        <Column>
          <AppHeading textVariant="default" textAlign="center">
            Quisque imperdiet maecenas
          </AppHeading>
          <AppText textVariant="thin" textAlign="center" pb="10">
            Lorem ipsum dolor sit amet consectetur
          </AppText>
          <Button onPress={() => navigation.navigate("Login")}>
            Đăng nhập
          </Button>
          <Row alignItems="center" justifyContent="center">
            <Text>Chưa có tài khoản?</Text>
            <Button
              onPress={() => navigation.navigate("SignUp")}
              variant="link"
              _text={{ underline: true }}
            >
              Đăng ký
            </Button>
          </Row>
        </Column>
      </Column>
    </ImageBackground>
  );
};

export default PreAuth;

const styles = StyleSheet.create({});
