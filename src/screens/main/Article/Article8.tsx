/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Center, Column, Image, Pressable, ScrollView } from "native-base";
import AppHeading from "../../../components/Typograpy/AppHeading";
import AppText from "../../../components/Typograpy/AppText";
import HeaderBackground from "../../../components/HeaderBackground";

const Article8 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/prevent.jpg")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              What is cardiac rehabilitation and recovery?
            </AppHeading>

            <AppText>
              Cardiac rehabilitation (rehab) is an important program for anyone
              recovering from a heart attack, heart failure, or other heart
              problem that requires surgery or medical care. In these people,
              cardiac rehab can help improve quality of life and can help
              prevent another cardiac event. Cardiac rehab is a supervised
              program that includes Physical activity Education about healthy
              living, including healthy eating, taking medicine as prescribed,
              and ways to help you quit smoking Counseling to find ways to
              relieve stress and improve mental health A team of people may help
              you through cardiac rehab, including your health care team,
              exercise and nutrition specialists, physical therapists, and
              counselors or mental health professionals.
            </AppText>

            <AppHeading textVariant="smprimary" mb="2">
              How can I be healthier if I have coronary artery disease?
            </AppHeading>
            <AppText>
              If you have CAD, your health care team may suggest the following
              steps to help lower your risk for heart attack or worsening heart
              disease: Lifestyle changes, such as eating a healthier (lower
              sodium, lower fat) diet, increasing physical activity, reaching a
              healthy weight, and quitting smoking Medicines to treat risk
              factors for CAD, such as high cholesterol, high blood pressure, or
              an irregular heartbeat Surgical procedures to help restore blood
              flow to the heart
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article8;

const styles = StyleSheet.create({});
