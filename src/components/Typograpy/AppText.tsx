/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
import React from "react";
import { ITextProps, Text } from "native-base";

interface IConfig {
  [k: string]: ITextProps;
}

type Props = {
  textVariant?: "default" | "title" | "thin" | "subtitle" | "notice" | "small";
} & ITextProps;

const config: IConfig = {
  default: {
    fontWeight: "normal",
    fontSize: "md",
    color: "muted.800",
  },
  title: {
    fontWeight: "semibold",
  },
  thin: {
    fontWeight: "light",
  },
  subtitle: {
    color: "muted.500",
  },
  notice: {
    color: "warning.400",
    fontSize: "sm",
  },
  small: {
    fontSize: "sm",
    color: "muted.400",
  },
};

const AppText = ({ textVariant = "default", children, ...props }: Props) => {
  const textConfig = {
    ...config["default"],
    ...config[textVariant],
  };
  return (
    <Text {...props} {...textConfig}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
