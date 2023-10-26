/**
 TODO: Drinking Info Component - Khang
 * Deadline
 */

import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, VStack, Icon, Column } from "native-base";
import AppText from "./Typograpy/AppText";
import { Feather, EvilIcons, Entypo } from "@expo/vector-icons";
import AppHeading from "./Typograpy/AppHeading";

const DrinkingInfo = ({ _stack }: any) => {
  return (
    <Column {..._stack}>
      <HStack alignItems="center" justifyContent="space-between">
        <AppHeading fontSize="xl" textVariant="default">
          Bạn nên uống bao nhiêu nước
        </AppHeading>
        <Icon as={Entypo} name="dots-three-horizontal" size="lg" color="grey" />
      </HStack>
      <Box mt="6" bgColor="primary.50" borderRadius="16" p="3" px="5">
        <HStack>
          <VStack>
            <HStack alignItems="flex-end">
              <AppHeading textVariant="primary">2000</AppHeading>
              <AppText textVariant="thin" ml="0.5">
                ml
              </AppText>
            </HStack>
            <AppText textVariant="small">Lượng nước bạn cần uống</AppText>

            <HStack alignItems="center" mt="3">
              <Icon as={EvilIcons} name="clock" color="grey" size="md" />
              <AppText textVariant="small" ml="2">
                Lần cuối cùng 15:00
              </AppText>
            </HStack>

            <HStack alignItems="center" mt="3">
              <Icon as={Feather} name="bell" color="#FB923C" size="md"></Icon>
              <AppText textVariant="notice" ml="2">
                Bật tính năng thông báo
              </AppText>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Column>
  );
};

export default DrinkingInfo;

const styles = StyleSheet.create({});
