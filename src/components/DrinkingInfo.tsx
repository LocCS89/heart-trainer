/**
 TODO: Drinking Info Component - Khang
 * Deadline
 */

import { StyleSheet, View } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  ThreeDotsIcon,
  Icon,
} from "native-base";
import AppHeading from "./Typograpy/AppHeading";
import AppText from "./Typograpy/AppText";
import {
  FontAwesome,
  Feather,
  EvilIcons,
  Entypo,
} from "react-native-vector-icons";
const DrinkingInfo = () => {
  return (
    <Box>
      <HStack alignItems="center" justifyContent="space-between">
        <AppHeading fontSize={"16"}>Bạn nên uống bao nhiêu nước</AppHeading>
        <Icon as={Entypo} name="dots-three-horizontal" size="lg" color="grey" />
      </HStack>
      <Box mt="10" bgColor="primary.50" borderRadius="16" p="3" pl="5" pr="5">
        <HStack>
          <VStack>
            <HStack alignItems="flex-end">
              <AppHeading textVariant="primary">2000</AppHeading>
              <AppText textVariant="thin" ml="0.5">
                ml
              </AppText>
            </HStack>
            <AppText textVariant="subtitle">Lượng nước bạn cần uống</AppText>

            <HStack alignItems="center" mt="3">
              <Icon as={EvilIcons} name="clock" color="grey" size="xl" />
              <AppText textVariant="subtitle" ml="2">
                Lần cuối cùng 15:00
              </AppText>
            </HStack>

            <HStack alignItems="center" mt="3" pl="0.5">
              <Icon as={Feather} name="bell" color="#FB923C" size="lg"></Icon>
              <AppText textVariant="subtitle" color="#FB923C" ml="2">
                Bật tính năng thông báo
              </AppText>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default DrinkingInfo;

const styles = StyleSheet.create({});
