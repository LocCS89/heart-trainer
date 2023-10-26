import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Center, IButtonProps, Icon, Pressable, Text } from "native-base";
import { EGender } from "../../types/user";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  selected?: EGender;
  active?: boolean;
  type?: EGender;
} & IButtonProps;

const GenderButton = ({
  selected,
  active,
  type,
  ...buttonProps
}: Props) => {
  return (
    <Pressable flex={1} {...buttonProps}>
      <Center bg={active ? "#34A7D4" : "#D4D4D4"} py={6} rounded="2xl">
        <Icon
          as={Ionicons}
          name={type === EGender.M ? "male-outline" : "female-outline"}
          color={active ? "white" : "#A3A3A3"}
          size={60}
        />
        <Text color={active ? "white" : "#A3A3A3"} fontSize={30}>
          {type === EGender.M ? "Nam" : "Nữ"}
        </Text>
      </Center>
    </Pressable>
  );
};

export default GenderButton;

const styles = StyleSheet.create({});
