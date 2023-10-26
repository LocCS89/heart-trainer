/**
 TODO: Sign Up Screen - Huy
 * Deadline
 */

import {
  StyleSheet,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { Button, Center, Column, Image, Row } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import { SignUpSchema, onInputChange } from "../../utils/form";
import { firebaseDb } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "../../store";
import { setUser } from "../../store/user.reducer";
import { ValidationError } from "yup";
import FormInput from "../../components/Form/FormInput";
import { LOGO_HEIGHT, LOGO_WIDTH } from "../../utils/constant";
type Props = {} & NativeStackScreenProps<AuthStackParams, "SignUp">;

type SignUpProps = {
  email: string;
  fullName: string;
  password: string;
};

const SignUp = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<SignUpProps>({
    email: "caolamhuy2004@gmail.com",
    fullName: "Cao Lam Huy",
    password: "31102004",
  });

  function onLogIn() {
    navigation.navigate("Login");
  }

  async function onSignUp() {
    try {
      await SignUpSchema.validate(formData);
      const docRef = doc(firebaseDb, "users", formData.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        throw Error("Email đã tồn tại");
      } else {
        const docData = {
          ...formData,
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
        };
        navigation.navigate("PersonalInfo", {
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password,
        });
      }
    } catch (error) {
      Alert.alert("Thông báo", (error as ValidationError).message);
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Column bg='white' flex={1} px="5" justifyContent="space-between" pt="20" pb="10">
          <Column>
            <Center mb="10">
              <Image
                alt=""
                source={require("../../../assets/app_logo.png")}
                w={LOGO_WIDTH}
                h={LOGO_HEIGHT}
              />
              <AppHeading
                textVariant="large"
                children="Đăng ký"
                mt="24"
                mb="2"
              />
              <AppText textVariant="thin" children="Tạo tài khoản mới" />
            </Center>
            <Column space="4">
              <FormInput
                placeholder="Email"
                value={formData.email}
                onChangeText={onInputChange("email", setFormData, formData)}
                autoCapitalize="none"
              />
              <FormInput
                placeholder="Tên"
                onChangeText={onInputChange("fullName", setFormData, formData)}
                autoCapitalize="words"
                value={formData.fullName}
              />
              <FormInput
                placeholder="Mật khẩu"
                inputVariant="password"
                value={formData.password}
                onChangeText={onInputChange("password", setFormData, formData)}
              />
            </Column>
          </Column>
          <Column>
            <Button onPress={onSignUp}>Đăng ký</Button>
            <Row alignItems="center" justifyContent="center">
              <Text>Bạn đã có tài khoản?</Text>
              <Button
                variant="link"
                _text={{ underline: true }}
                onPress={onLogIn}
              >
                Đăng nhập
              </Button>
            </Row>
          </Column>
        </Column>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
