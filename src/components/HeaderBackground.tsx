import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Center, Icon, Row, Text, View } from "native-base";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type HeaderBackgroundProps = {
  text: string;
  hasBack?: boolean;
  setting?: boolean;
};

const HeaderBackground = ({
  text,
  hasBack,
  setting,
}: HeaderBackgroundProps) => {
  const navigation = useNavigation();
  return (
    <Row bg="white" alignItems="center" justifyContent="space-between" safeAreaTop pt="3">
      <Center w="12">
        {hasBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
          </TouchableOpacity>
        )}
      </Center>

      <Text fontSize={18} fontWeight="600">
        {text}
      </Text>
      <Center w="12">
        {setting && (
          <TouchableOpacity onPress={()=> navigation.navigate("Setting")}>
            <Icon
              as={Ionicons}
              name="settings-outline"
              size="lg"
              color="black"
            />
          </TouchableOpacity>
        )}
      </Center>
    </Row>
  );
};

export default HeaderBackground;

const styles = StyleSheet.create({});
