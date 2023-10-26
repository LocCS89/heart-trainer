/**
 TODO: Personal Form Component - Huy
 * Deadline
 */

import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Box, Center, Icon, Pressable, Row, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { EGender } from "../../types/user";
import GenderButton from "./GenderButton";

type Props = {
  onChange: (value: EGender | undefined) => void;
  selected?: EGender;
};

const SelectGender = ({ onChange, selected }: Props) => {
  const [gender, setGender] = useState(selected);

  return (
    <Row>
      <GenderButton
        onPress={() => {
          setGender(EGender.M);
          onChange(EGender.M);
        }}
        selected={selected}
        active={gender === EGender.M}
        type={EGender.M}
      />
      <Box w={3}></Box>
      <GenderButton
        onPress={() => {
          setGender(EGender.F);
          onChange(EGender.F);
        }}
        selected={selected}
        active={gender === EGender.F}
        type={EGender.F}
      />
    </Row>
  );
};

export default SelectGender;

const styles = StyleSheet.create({});
