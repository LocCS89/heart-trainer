import { StyleSheet } from "react-native";
import React from "react";
import { IInputProps, Input, Text, View } from "native-base";

type BMRInputProps = {
  
} & IInputProps

const BMRInput = ({...inputProps}:BMRInputProps) => {
  return (
    <Input
      w="16"
      p={1}
      bg="#D4D4D4"
      textAlign="center"
      keyboardType="number-pad"
      fontSize={16}
      _focus={{backgroundColor:"#D4D4D4", borderColor:'transparent'}}
      {...inputProps}
    />
  );
};

export default BMRInput;

const styles = StyleSheet.create({});
