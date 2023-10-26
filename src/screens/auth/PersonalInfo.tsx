/**
 TODO: Dang ky 5
 * Deadline
 */

import { StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { Box, Button, Center, Column, Input, Pressable, Row, Text } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams, RootStackParams } from "../../navigations/config";
import AppText from "../../components/Typograpy/AppText";
import AppHeading from "../../components/Typograpy/AppHeading";
import SelectGender from "../../components/Form/SelectGender";
import { EGender } from "../../types/user";
import { useAppDispatch, useAppSelector } from "../../store";
import { PersonalInfoSchema, onInputChange } from "../../utils/form";
import { firebaseDb } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { setUser } from "../../store/user.reducer";
import { ValidationError } from "yup";
import BMRInput from "./BMRInput";

type Props = {} & NativeStackScreenProps<RootStackParams, "PersonalInfo">;
type PersonalInfoForm = {
  gender: EGender;
  height: number;
  weight: number;
  age: number;
};

const PersonalInfo = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { email, fullName, password } = route.params;

  const editMode = !!user;

  const [formData, setFormData] = useState<PersonalInfoForm>({
    gender: editMode ? user.gender : EGender.M,
    height: editMode ? user.height : 0,
    weight: editMode ? user.weight : 0,
    age: editMode ? user.age : 0,
  });

  async function createPersonalInfo() {
    try {
      await PersonalInfoSchema.validate(formData);
      const docRef = doc(firebaseDb, "users", email);
      const data = {
        ...formData,
        age: Number(formData.age),
        height: Number(formData.height),
        weight: Number(formData.weight),
        email: email,
        fullName: fullName,
        password: password,
        gender: formData.gender,
      };
      await setDoc(docRef, data);
      dispatch(setUser(data));
    } catch (error) {
      Alert.alert("Thông báo", (error as ValidationError).message);
    }
  }

  async function updatePersonalInfo() {
    try {
      await PersonalInfoSchema.validate(formData);
      const docRef = doc(firebaseDb, "users", email);
      const data = {
        ...user!,
        ...formData,
        age: Number(formData.age),
        height: Number(formData.height),
        weight: Number(formData.weight),
        email: email,
        fullName: fullName,
        password: password,
        gender: formData.gender,
      };
      await updateDoc(docRef, data);
      dispatch(setUser(data));
    } catch (error) {
      Alert.alert("Thông báo", (error as ValidationError).message);
    }
  }

  function onSignUp() {
    if (!editMode) createPersonalInfo();
    else updatePersonalInfo();
  }

  return (
    <Column flex={1} pt="20" pb="5" px="5" justifyContent="space-between" bg="white">
      <Column>
        <AppText textVariant="subtitle">Chào mừng bạn đến với</AppText>
        <AppHeading>Heart Trainer</AppHeading>
        <Box bg="#F5F5F5" rounded="2xl" p={4} mt={7}>
          <Column mt={5} space={3}>
            <SelectGender
              selected={formData.gender}
              onChange={onInputChange<PersonalInfoForm>("gender", setFormData, formData)}
            />
            <Row justifyContent="space-between" alignItems="center">
              <AppText textVariant="default">Chiều cao (cm)</AppText>

              <BMRInput
                placeholder="175"
                onChangeText={onInputChange<PersonalInfoForm>("height", setFormData, formData)}
              />
            </Row>
            <Row justifyContent="space-between" alignItems="center">
              <AppText textVariant="default">Cân nặng (kg)</AppText>
              <BMRInput
                placeholder="75"
                onChangeText={onInputChange<PersonalInfoForm>("weight", setFormData, formData)}
              />
            </Row>
            <Row justifyContent="space-between" alignItems="center">
              <AppText textVariant="default">Độ tuổi</AppText>
              <BMRInput
                placeholder="19"
                onChangeText={onInputChange<PersonalInfoForm>("age", setFormData, formData)}
              />
            </Row>
          </Column>
        </Box>
      </Column>
      <Button onPress={onSignUp} mb={7}>
        Tiếp theo
      </Button>
    </Column>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({});
