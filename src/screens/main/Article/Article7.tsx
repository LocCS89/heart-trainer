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

const Article7 = () => {
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
              Being active when you have heart disease{" "}
            </AppHeading>

            <AppHeading textVariant="smprimary" mb="2">
              Getting regular exercise when you have heart disease is important.
              Physical activity can strengthen your heart muscle and help you
              manage blood pressure and cholesterol levels.
            </AppHeading>

            <AppText>
              Getting regular exercise when you have heart disease is important.
              Exercise can make your heart muscle stronger. It may also help you
              be more active without chest pain or other symptoms. Exercise may
              help lower your blood pressure and cholesterol. If you have
              diabetes, it can help you control your blood sugar. Regular
              exercise can help you lose weight. You will also feel better.
              Exercise will also help keep your bones strong. Always talk with
              your health care provider before starting an exercise program. You
              need to make sure the exercise you would like to do is safe for
              you. This is particularly important if: You recently had a heart
              attack. You have been having chest pain or pressure, or shortness
              of breath. You have diabetes. You recently had a heart procedure
              or heart surgery. Types of Exercise you can do Your provider will
              tell you what exercise is best for you. Talk with your provider
              before you start a new exercise program. Also ask if it is OK
              before you do a harder activity. Aerobic activity uses your heart
              and lungs for a long period of time. It also helps your heart use
              oxygen better and improves blood flow. You want to make your heart
              work a little harder every time, but not too hard. Start slowly.
              Choose an aerobic activity such as walking, swimming, light
              jogging, or biking. Do this at least 3 to 4 times a week. Always
              do 5 minutes of stretching or moving around to warm up your
              muscles and heart before exercising. Allow time to cool down after
              you exercise. Do the same activity but at a slower pace. Take rest
              periods before you get too tired. If you feel tired or have any
              heart symptoms, stop. Wear comfortable clothing for the exercise
              you are doing. During hot weather, exercise in the morning or
              evening. Be careful not to wear too many layers of clothes. You
              can also go to an indoor shopping mall to walk. When it is cold,
              cover your nose and mouth when exercising outside. Go to an indoor
              shopping mall if it is too cold or snowy to exercise outside. Ask
              your provider if it is OK for you to exercise when it is below
              freezing. Resistance weight training may improve your strength and
              help your muscles work together better. This can make it easier to
              do daily activities. These exercises are good for you. But keep in
              mind they do not help your heart like aerobic exercise does. Check
              out your weight-training routine with your provider first. Go
              easy, and do not strain too hard. It is better to do lighter sets
              of exercise when you have heart disease than to work out too hard.
              You may need advice from a physical therapist or trainer. They can
              show you how to do exercises the right way. Make sure you breathe
              steadily and switch between upper and lower body work. Rest often.
              You may be eligible for a formal cardiac rehabilitation program.
              Ask your provider if you can have a referral.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article7;

const styles = StyleSheet.create({});
