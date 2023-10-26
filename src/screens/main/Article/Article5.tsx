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

const Article5 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/symptom.jpg")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              How is coronary artery disease recognized?
            </AppHeading>

            <AppText>
              Angina, or chest pain and discomfort, is the most common symptom
              of CAD. Angina can happen when too much plaque builds up inside
              arteries, causing them to narrow. Narrowed arteries can cause
              chest pain because they can block blood flow to your heart muscle
              and the rest of your body. For many people, the first clue that
              they have CAD is a heart attack. Symptoms of heart attack include
              Chest pain or discomfort (angina) Weakness, light-headedness,
              nausea (feeling sick to your stomach), or a cold sweat Pain or
              discomfort in the arms or shoulder Shortness of breath Over time,
              CAD can weaken the heart muscle. This may lead to heart failure, a
              serious condition where the heart can’t pump blood the way it
              should.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article5;

const styles = StyleSheet.create({});
