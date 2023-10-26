/**
 TODO:
 * Deadline
 */

import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Box, Button, Center, Column, Row, Text, View } from "native-base";
import HeaderBackground from "../../components/HeaderBackground";
import AppText from "../../components/Typograpy/AppText";
import BMRInput from "../auth/BMRInput";
import { useAppDispatch, useAppSelector } from "../../store";
import { EGender } from "../../types/user";
import { onInputChange } from "../../utils/form";
import AppPopup from "../../components/AppPopup";
import { setPopup } from "../../store/popup.reducer";
import { doc, updateDoc } from "firebase/firestore";
import { firebaseDb } from "../../firebase";
import { setUser } from "../../store/user.reducer";
import { ValidationError } from "yup";

type UpdateBMRForm = {
  height: string;
  weight: string;
  age: string;
  gender: EGender;
};

const UpdateBMR = () => {
  const { user } = useAppSelector((state) => state.user);
  const { popup } = useAppSelector((state) => state.popup);

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<UpdateBMRForm>({
    height: user!.height,
    weight: user!.weight,
    age: user!.age,
    gender: user!.gender,
  });

  async function updatePersonalInfo() {
    try {
      const docRef = doc(firebaseDb, "users", user!.email);
      const docData = {
        ...user!,
        ...formData,
      };
      await updateDoc(docRef, docData);
      dispatch(setUser(docData));
    } catch (error) {
      Alert.alert("Thông báo", (error as ValidationError).message);
    }
  }

  return (
    <>
      <HeaderBackground text="Cập nhật BMR" hasBack />
      {popup && (
        <AppPopup
          onContinue={onInputChange<UpdateBMRForm>(
            "gender",
            setFormData,
            formData
          )}
        />
      )}
      <Column flex={1} px="5" justifyContent="space-between" pt="10" pb="10" bg="white">
        <Column bg="#D4D4D4" rounded="2xl" px="3">
          <Row
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={0.5}
            py="2"
          >
            <AppText>Chiều cao</AppText>
            <BMRInput
              value={formData.height}
              onChangeText={onInputChange<UpdateBMRForm>(
                "height",
                setFormData,
                formData
              )}
            />
          </Row>
          <Row
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={0.5}
            py="2"
          >
            <AppText>Cân nặng</AppText>
            <BMRInput
              value={formData.weight}
              onChangeText={onInputChange<UpdateBMRForm>(
                "weight",
                setFormData,
                formData
              )}
            />
          </Row>
          <Row
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={0.5}
            py="2"
          >
            <AppText>Tuổi</AppText>
            <BMRInput
              value={formData.age}
              onChangeText={onInputChange<UpdateBMRForm>(
                "age",
                setFormData,
                formData
              )}
            />
          </Row>
          <Row justifyContent="space-between" alignItems="center" py="2">
            <AppText>Giới tính</AppText>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  setPopup({
                    title: "Yêu cầu của bạn đã được gửi đi",
                    desc: "Chúng tôi sẽ kiểm tra trong 48h làm việc",
                  })
                );
              }}
            >
              <BMRInput
                value={formData.gender === EGender.M ? "Nam" : "Nữ"}
                editable={false}
              />
            </TouchableOpacity>
          </Row>
        </Column>
        <Button onPress={updatePersonalInfo}>Update</Button>
      </Column>
    </>
  );
};

export default UpdateBMR;

const styles = StyleSheet.create({});
