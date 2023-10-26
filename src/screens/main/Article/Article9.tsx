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

const Article9 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/risk.jpg")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              What are the risks of CAD ?
            </AppHeading>

            <AppText>
              Coronary artery disease is common. Age, genetics,
              other health conditions and lifestyle choices can affect the
              health of the heart arteries. Coronary artery disease risk factors
              include: Age. Getting older increases the risk of damaged and
              narrowed arteries. Sex. Men are generally at greater risk of
              coronary artery disease. However, the risk for women increases
              after menopause. Family history. A family history of heart disease
              makes you more likely to get coronary artery disease. This is
              especially true if a close relative (parent, sibling) developed
              heart disease at an early age. The risk is highest if your father
              or a brother had heart disease before age 55 or if your mother or
              a sister developed it before age 65. Smoking. If you smoke, quit.
              Smoking is bad for heart health. People who smoke have a
              significantly increased risk of heart disease. Breathing in
              secondhand smoke also increases the risk. High blood pressure.
              Uncontrolled high blood pressure can make arteries hard and stiff
              (arterial stiffness). The coronary arteries may become narrow,
              slowing blood flow. High cholesterol. Too much bad cholesterol in
              the blood can increase the risk of atherosclerosis. Bad
              cholesterol is called low-density lipoprotein (LDL) cholesterol.
              Not enough good cholesterol — called high-density lipoprotein
              (HDL) — also leads to atherosclerosis. Diabetes. Diabetes
              increases the risk of coronary artery disease. Type 2 diabetes and
              coronary artery disease share some risk factors, such as obesity
              and high blood pressure. Overweight or obesity. Excess body weight
              is bad for overall health. Obesity can lead to type 2 diabetes and
              high blood pressure. Ask your health care provider what a healthy
              weight is for you. Chronic kidney disease. Having long-term kidney
              disease increases the risk of coronary artery disease. Not getting
              enough exercise. Physical activity is important for good health. A
              lack of exercise (sedentary lifestyle) is linked to coronary
              artery disease and some of its risk factors. A lot of stress.
              Emotional stress may damage the arteries and worsen other risk
              factors for coronary artery disease. Unhealthy diet. Eating foods
              with a lot of saturated fat, trans fat, salt and sugar can
              increase the risk of coronary artery disease. Alcohol use. Heavy
              alcohol use can lead to heart muscle damage. It can also worsen
              other risk factors of coronary artery disease. Amount of sleep.
              Too little and too much sleep have both been linked to an
              increased risk of heart disease. Risk factors often occur
              together. One risk factor may trigger another. When grouped
              together, certain risk factors make you even more likely to
              develop coronary artery disease. For example, metabolic syndrome —
              a cluster of conditions that includes high blood pressure, high
              blood sugar, excess body fat around the waist and high
              triglyceride levels — increases the risk of coronary artery
              disease. Sometimes coronary artery disease develops without any
              classic risk factors. Other possible risk factors for coronary
              artery disease may include: Breathing pauses during sleep
              (obstructive sleep apnea). This condition causes breathing to stop
              and start during sleep. It can cause sudden drops in blood oxygen
              levels. The heart must work harder. Blood pressure goes up.
              High-sensitivity C-reactive protein (hs-CRP). This protein appears
              in higher-than-usual amounts when there's inflammation somewhere
              in the body. High hs-CRP levels may be a risk factor for heart
              disease. It's thought that as coronary arteries narrow, the level
              of hs-CRP in the blood goes up. High triglycerides. This is a type
              of fat (lipid) in the blood. High levels may raise the risk of
              coronary artery disease, especially for women. Homocysteine.
              Homocysteine is an amino acid the body uses to make protein and to
              build and maintain tissue. But high levels of homocysteine may
              increase the risk of coronary artery disease. Preeclampsia. This
              pregnancy complication causes high blood pressure and increased
              protein in the urine. It can lead to a higher risk of heart
              disease later in life. Other pregnancy complications. Diabetes or
              high blood pressure during pregnancy are also known risk factors
              for coronary artery disease. Certain autoimmune diseases. People
              who have conditions such as rheumatoid arthritis and lupus (and
              other inflammatory conditions) have an increased risk of
              atherosclerosis.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article9;

const styles = StyleSheet.create({});
