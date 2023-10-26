import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View, Input, IInputProps, Icon, Pressable } from "native-base";
import { Feather } from "@expo/vector-icons";

type Props = {
  inputVariant?: "default" | "password";
} & IInputProps;

interface IConfig {
  [k: string]: IInputProps;
}

const FormInput = ({ inputVariant = "default", ...props }: Props) => {
  const [shown, setShown] = useState(true);

  function passwordHandler() {
    setShown(!shown);
  }

  const config: IConfig = {
    default: {},
    password: {
      InputRightElement: (
        <Pressable onPress={passwordHandler}>
          <Icon
            as={
              <Feather name={shown ? "eye-off" : "eye"} />
            }
            size={"md"}
            mr={2}
          ></Icon>
        </Pressable>
      ),
    },
  };

  const inputConfig = {
    ...config["default"],
    ...config[inputVariant],
  };
  return (
    <Input
      fontSize={16}
      borderWidth={1}
      borderColor="#34A7D4"
      rounded="sm"
      type={shown? "text" : "password"}
      {...props}
      {...inputConfig}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({});
