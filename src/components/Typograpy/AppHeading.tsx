/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
import React from "react";
import { Heading, IHeadingProps } from "native-base";

interface IConfig {
  [k: string]: IHeadingProps;
}

const config: IConfig = {
  default: {
    fontWeight: "semibold",
    fontSize: "xl",
    color: "muted.800",
  },
  large: {
    fontSize: "4xl",
    fontWeight: "bold",
  },
  thin: {
    fontWeight: "light",
    fontSize: "3xl",
  },
  primary: {
    color: "primary.600",
    fontSize: "2xl",
    fontWeight: "bold",
  },
  smprimary: {
    color: "primary.600",
    fontSize: "md",
    fontWeight: "bold",
  },
};

type Props = {
  textVariant?: "default" | "large" | "thin" | "primary" | "smprimary";
} & IHeadingProps;

const AppHeading = ({ textVariant = "default", children, ...props }: Props) => {
  const textConfig = {
    ...config["default"],
    ...config[textVariant],
  };
  return (
    <Heading {...props} {...textConfig}>
      {children}
    </Heading>
  );
};

export default AppHeading;

const styles = StyleSheet.create({});
