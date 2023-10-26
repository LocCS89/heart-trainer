/**
 TODO: Login Screen - Huy
 * Deadline
 */

import { StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch, useAppSelector } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button, Center, Checkbox, Column, Image, Row, Text, View } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDb } from "../../firebase";
import { UserProfile } from "../../types/user";
import { ValidationError } from "yup";
import FormInput from "../../components/Form/FormInput";
import { LOGO_HEIGHT, LOGO_WIDTH } from "../../utils/constant";

type Props = {} & NativeStackScreenProps<AuthStackParams, "Login">;

type LoginFormData = {
  email: string;
  password: string;
};

const Login = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("caolamhuy2004@gmail.com");
  const [password, setPassword] = useState("31102004");
  const [message, setMessage] = useState<string | null>(null);

  function onSignUp() {
    navigation.navigate("SignUp");
  }
  function onForgotPassword() {
    navigation.navigate("ForgotPassword");
  }
  async function onLogIn() {
    try {
      const docRef = doc(firebaseDb, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.password !== password) {
          setMessage("Mật khẩu không đúng");
        } else {
          const userData = {
            ...data,
          };

          dispatch(setUser(userData as UserProfile));
        }
      } else {
        setMessage("Email chưa được đăng kí");
      }
    } catch (error) {
      console.log(error);

      Alert.alert("Thông báo", (error as ValidationError).message);
    }
  }
  return (
    <Column bg='white' flex={1} px="5" justifyContent="space-between" pt="20" pb="10">
      <Column>
        <Center mb="10">
          <Image
            alt=""
            source={require("../../../assets/app_logo.png")}
            w={LOGO_WIDTH}
            h={LOGO_HEIGHT}
          />
          <AppHeading textVariant="large" children="Welcome back" mt="24" mb="2" />
          <AppText textVariant="thin" children="Đăng nhập tài khoản" />
        </Center>
        <Column space="4">
          <FormInput placeholder="Email" onChangeText={setEmail} value={email} />
          <FormInput
            placeholder="Mật khẩu"
            inputVariant="password"
            onChangeText={setPassword}
            value={password}
          />
        </Column>
        <Row alignItems="center" justifyContent="flex-end">
          <Button variant="link" _text={{ fontSize: 12 }} onPress={onForgotPassword}>
            Quên mật khẩu?
          </Button>
        </Row>
        <Text color="error.500" fontSize={12}>
          {message}
        </Text>
      </Column>
      <Column>
        <Button onPress={onLogIn}>Đăng nhập</Button>
        <Row alignItems="center" justifyContent="center">
          <Text>Chưa có tài khoản?</Text>
          <Button variant="link" _text={{ underline: true }} onPress={onSignUp}>
            Đăng ký
          </Button>
        </Row>
      </Column>
    </Column>
  );
};

export default Login;

const styles = StyleSheet.create({});
