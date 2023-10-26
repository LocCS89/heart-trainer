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

const Article6 = () => {
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
              Preventing Coronary Artery Disease
            </AppHeading>

            <AppText>
              Coronary artery disease is a type of heart disease caused by
              atherosclerosis, a buildup of a waxy substance called
              plaque—composed of cholesterol, fat, and calcium—in the arteries.
              Risk factors include unhealthy cholesterol levels, high blood
              pressure, diabetes, smoking, obesity, a high-fat diet, and a
              sedentary lifestyle. Lower Blood Pressure If your blood pressure
              is high, it’s important to lower it. High blood pressure can
              create microscopic tears in artery walls, which can lead to
              scarring. Plaque becomes trapped in the scar tissue, causing the
              arteries to stiffen and narrow. This reduces blood flow to the
              heart. High blood pressure is a risk factor for heart attack,
              stroke, and death from heart disease. You may be able to lower
              blood pressure by losing weight if you need to; exercising
              regularly; limiting alcohol intake; quitting smoking; and cutting
              back on salt. Doctors recommend eating a diet rich in fruits,
              vegetables, low-fat dairy products, fish, nuts, legumes, and
              healthy fats, such as those from olive oil. Reducing stress may
              also help lower blood pressure. Specialists at Rusk Rehabilitation
              offer integrative therapies designed to help you relax, such as
              acupuncture, massage, and meditation. If lifestyle changes alone
              do not lower your blood pressure, your NYU Langone cardiologist
              may prescribe medication. Reduce Cholesterol High levels of
              cholesterol in the blood cause plaque to build up in the arteries.
              This can decrease blood flow to the heart, causing symptoms such
              as chest pain. Plaque can rupture and cause blood clots to form in
              the arteries, which can lead to a heart attack or stroke. To
              reduce cholesterol, limit your fat intake—especially saturated
              fats, which come from fatty meats like beef and lamb, as well as
              full-fat dairy products. Also, restrict trans fats, which are
              found in fried foods, some processed foods, and many packaged
              baked goods, such as pastries, cookies, and crackers. Healthy
              fats, such as olive oil, need not be limited. Regular exercise and
              maintaining a healthy weight can help lower cholesterol. Your
              doctor may also prescribe cholesterol-lowering medications. Quit
              Smoking Smoking can increase the odds of developing coronary
              artery disease by two to four times. The nicotine in cigarettes
              raises blood pressure and heart rate; reduces the amount of oxygen
              the heart receives; and increases the risk of blood clots. The
              chemicals in tobacco also contribute to the buildup of plaque in
              the arteries that lead to the heart. When you quit smoking, your
              odds of developing coronary artery disease decrease dramatically.
              After one year, your risk is reduced to half that of a smoker. NYU
              Langone’s Tobacco Cessation Programs can give you the support you
              need to quit. Maintain a Healthy Weight Obesity is a risk factor
              for coronary artery disease, because carrying excess weight forces
              the heart to work harder. Also, people with obesity are more
              likely to have diabetes, high blood pressure, and unhealthy
              cholesterol levels, all of which are risk factors for coronary
              artery disease. Lowering your body mass index (BMI), a measurement
              of body weight in relation to height, can help reduce your risk. A
              person with a BMI between 25 and 29 is considered overweight,
              while someone with a BMI of 30 and above is considered obese. To
              lose weight, NYU Langone doctors recommend eating a diet rich in
              lean sources of protein, such as fish and chicken, as well as
              fruits, nuts, vegetables, and whole grains; limiting your intake
              of salt, as well as sugary drinks and foods; and exercising
              regularly. Specialists at NYU Langone’s Weight Management Program
              can help you reach and maintain a healthy weight. In addition,
              specialists at the outpatient cardiac rehabilitation program at
              Rusk Rehabilitation can help you safely lose weight after surgery
              or coronary angiogram and stent treatment for coronary artery
              disease. Exercise Regularly Exercise can help prevent coronary
              artery disease by controlling blood pressure, improving
              cholesterol levels, and strengthening the heart. Your doctor may
              recommend getting at least 30 minutes of moderate activity, such
              as walking, swimming, or cycling, five days a week. Splitting up
              your workouts into 10- to 15-minute sessions several times a day
              is just as beneficial as exercising for longer periods of time.
              Control Diabetes Adults with diabetes are two to four times more
              likely to have heart disease than those who don’t have the
              condition. Diabetes is a stronger risk factor for heart disease in
              women than in men. People with diabetes are more likely to have
              obesity, high blood pressure, and high cholesterol than those who
              don’t have diabetes. Your NYU Langone doctor may prescribe
              medications to manage blood sugar and, if necessary, lower blood
              pressure. Most adults with diabetes who are over age 40 are also
              prescribed cholesterol-lowering medications to reduce the risk of
              a heart attack and stroke. NYU Langone specialists can help you
              find additional ways to manage diabetes, such as with regular
              glucose monitoring, a healthy diet, and regular exercise.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article6;

const styles = StyleSheet.create({});
