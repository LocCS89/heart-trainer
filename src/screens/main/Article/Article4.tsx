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

const Article4 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/reason.jpg")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              Causes of CAD
            </AppHeading>
            <AppText bold mb="2">
              What are the causes of Coronary artery disease ?
            </AppText>
            <AppText>
              Coronary artery disease starts when fats, cholesterols and other
              substances collect on the inner walls of the heart arteries. This
              condition is called atherosclerosis. The buildup is called plaque.
              Plaque can cause the arteries to narrow, blocking blood flow. The
              plaque can also burst, leading to a blood clot. Besides high
              cholesterol, damage to the coronary arteries may be caused by:
            </AppText>
            <AppText>- Diabetes or insulin resistance</AppText>
            <AppText>- High blood pressure</AppText>
            <AppText>
              - Not getting enough exercise (sedentary lifestyle)
            </AppText>
            <AppText>- Smoking or tobacco use</AppText>
            <AppText>
              Overweight, physical inactivity, unhealthy eating, and smoking
              tobacco are risk factors for CAD. A family history of heart
              disease also increases your risk for CAD, especially a family
              history of having heart disease at an early age (50 or younger).
              To find out your risk for CAD, your health care team may measure
              your blood pressure, blood cholesterol, and blood sugar levels.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article4;

const styles = StyleSheet.create({});
