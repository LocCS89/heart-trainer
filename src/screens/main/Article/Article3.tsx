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

const Article3 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/diagnose.jpg")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              How is coronary artery disease diagnosed?
            </AppHeading>
            <AppText bold mb="2">
              If you’re at high risk for heart disease or already have symptoms,
              your doctor can use several tests to diagnose CAD.
            </AppText>
            <AppText>
              ECG or EKG (electrocardiogram) Measures the electrical activity,
              rate, and regularity of your heartbeat. Echocardiogram Uses
              ultrasound (special sound wave) to create a picture of the heart.
              Exercise stress test Measures your heart rate while you walk on a
              treadmill. This helps to determine how well your heart is working
              when it has to pump more blood. Chest X-ray Uses x-rays to create
              a picture of the heart, lungs, and other organs in the chest.
              Cardiac catheterization Checks the inside of your arteries for
              blockage by inserting a thin, flexible tube through an artery in
              the groin, arm, or neck to reach the heart. Health care
              professionals can measure blood pressure within the heart and the
              strength of blood flow through the heart’s chambers as well as
              collect blood samples from the heart or inject dye into the
              arteries of the heart (coronary arteries). Coronary angiogram
              Monitors blockage and flow of blood through the coronary arteries.
              Uses X-rays to detect dye injected via cardiac catheterization.
              Coronary artery calcium scan A computed tomography (CT) scan that
              looks in the coronary arteries for calcium buildup and plaque.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article3;

const styles = StyleSheet.create({});
