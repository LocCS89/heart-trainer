/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  ThreeDotsIcon,
  Icon,
  Image,
  ScrollView,
  Center,
  Button,
  AspectRatio,
} from "native-base";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";

const PlanFavouriteDays = () => {
  const [monCheck, MonCheck] = useState(false);
  function Mon() {
    MonCheck(!monCheck);
  }

  const [tueCheck, TueCheck] = useState(false);
  function Tue() {
    TueCheck(!tueCheck);
  }

  const [wedCheck, WedCheck] = useState(false);
  function Wed() {
    WedCheck(!wedCheck);
  }

  const [thuCheck, ThuCheck] = useState(false);
  function Thu() {
    ThuCheck(!thuCheck);
  }

  const [friCheck, FriCheck] = useState(false);
  function Fri() {
    FriCheck(!friCheck);
  }

  const [satCheck, SatCheck] = useState(false);
  function Sat() {
    SatCheck(!satCheck);
  }

  const [sunCheck, SunCheck] = useState(false);
  function Sun() {
    SunCheck(!sunCheck);
  }
  return (
    <ScrollView>
      <ScrollView mt="10" p="3.5">
        <HStack mb="5">
          <Icon
            as={Entypo}
            name="chevron-thin-left"
            size="lg"
            color="muted.800"
          />
          <Center w="80">
            <AppHeading>Ngày luyện tập ưa thích</AppHeading>
          </Center>
        </HStack>

        <VStack p="4" bg="muted.100" borderRadius="xl">
          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Mon}>Thứ 2</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={monCheck === true ? "flex" : "none"}
            />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Tue}>Thứ 3</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={tueCheck === true ? "flex" : "none"}
            />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Wed}>Thứ 4</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={wedCheck === true ? "flex" : "none"}
            />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Thu}>Thứ 5</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={thuCheck === true ? "flex" : "none"}
            />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Fri}>Thứ 6</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={friCheck === true ? "flex" : "none"}
            />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Sat}>Thứ 7</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={satCheck === true ? "flex" : "none"}
            />
          </HStack>

          <HStack justifyContent="space-between" alignItems="center" h="10">
            <AppText onPress={Sun}>Chủ nhật</AppText>
            <Icon
              as={Ionicons}
              name="checkbox-outline"
              size="lg"
              color="primary.600"
              display={sunCheck === true ? "flex" : "none"}
            />
          </HStack>
        </VStack>
      </ScrollView>
    </ScrollView>
  );
};

export default PlanFavouriteDays;

const styles = StyleSheet.create({});
