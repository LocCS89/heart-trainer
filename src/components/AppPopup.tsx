import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AlertDialog,
  Center,
  Checkbox,
  Column,
  Divider,
  Heading,
  Row,
  Text,
  View,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../store";
import { removePopup } from "../store/popup.reducer";
import { EGender } from "../types/user";

type Props = {
  onCancel?: any;
  onContinue: (value: EGender) => void;
  update?:any;
};

const AppPopup = ({ onCancel, onContinue, update }: Props) => {
  const { user } = useAppSelector((state) => state.user);

  const [gender, setGender] = useState<EGender>(user!.gender);
  const cancelRef = React.useRef(null);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(removePopup());
    if (onCancel) {
      onCancel();
    }
  };
  const onResume = () => {
    dispatch(removePopup());
    if (onContinue) {
      onContinue(gender);
    }
  };
  return (
    <AlertDialog
      isOpen={true}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialog.Content rounded="2xl">
        <AlertDialog.Body bg="#00495C">
          <Column rounded={"3xl"} p="3" space="3">
            <Checkbox
              value=""
              _text={{ color: "white" }}
              bg="transparent"
              isChecked={gender === EGender.M}
              onChange={() => {
                setGender(EGender.M);
              }}
            >
              Nam
            </Checkbox>
            <Checkbox
              value=""
              _text={{ color: "white" }}
              bg="transparent"
              isChecked={gender === EGender.F}
              onChange={() => {
                setGender(EGender.F);
              }}
            >
              Nữ
            </Checkbox>
          </Column>
        </AlertDialog.Body>
        <Divider bg="#34A7D4" />
        <Row>
          <TouchableOpacity style={styles.button} onPress={onResume}>
            <Text color="#34A7D4">Xong</Text>
          </TouchableOpacity>
          <Divider orientation="vertical" bg="#34A7D4" />
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text color="#34A7D4">Bỏ qua</Text>
          </TouchableOpacity>
        </Row>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default AppPopup;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00495C",
    paddingVertical: 10,
  },
});
