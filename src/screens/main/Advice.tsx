/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Center, Column, Image, Pressable, ScrollView } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import HeaderBackground from "../../components/HeaderBackground";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<RootStackParams>;

const Advice = ({ navigation }: Props) => {
  const [showFull, setShowFull] = useState(false);
  const [showFull1, setShowFull1] = useState(false);
  const [showFull2, setShowFull2] = useState(false);
  const [showFull3, setShowFull3] = useState(false);
  const [showFull4, setShowFull4] = useState(false);
  const [showFull5, setShowFull5] = useState(false);

  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column space="4" px="4" my="4">
          <Pressable onPress={() => setShowFull(!showFull)}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Thực phẩm</AppHeading>
                <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
              </Box>
              <Box>
                <AppHeading textVariant="smprimary" mb="2">
                  Trà xanh và tiêu đen
                </AppHeading>

                <AppText numberOfLines={showFull ? 1000 : 2}>
                  Các nghiên cứu cho thấy bạn nên thêm vào trà xanh một ít hạt
                  tiêu đen. Trà xanh đã có một chất chống oxy hóa đặc biệt là
                  EGCG, tăng cường khả năng chuyển hóa và chống lại bệnh ung
                  thư. Trong khi đó tiêu đen còn có thể giúp EGCG hoạt động hiệu
                  quả hơn. Tiêu làm tăng khả năng hấp thụ của EGCG, để nó không
                  bị phá vỡ nhanh chóng khi đi vào máu. Nếu không muốn uống trà
                  với tiêu, bạn có thể dùng 2 món này làm gia vị nấu ăn.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => setShowFull1(!showFull1)}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">What is coronary artery disease?</AppHeading>
                <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
              </Box>
              <Box>
                <AppText numberOfLines={showFull1 ? 1000 : 2} mb="2">
                  Coronary artery disease is a common heart condition. The major
                  blood vessels that supply the heart (coronary arteries)
                  struggle to send enough blood, oxygen and nutrients to the
                  heart muscle. Cholesterol deposits (plaques) in the heart
                  arteries and inflammation are usually the cause of coronary
                  artery disease. Signs and symptoms of coronary artery disease
                  occur when the heart doesn't get enough oxygen-rich blood. If
                  you have coronary artery disease, reduced blood flow to the
                  heart can cause chest pain (angina) and shortness of breath. A
                  complete blockage of blood flow can cause a heart attack.
                  Coronary artery disease often develops over decades. Symptoms
                  may go unnoticed until a significant blockage causes problems
                  or a heart attack occurs. Following a heart-healthy lifestyle
                  can help prevent coronary artery disease. Coronary artery
                  disease may also be called coronary heart disease.
                </AppText>
                <Center>
                  <Image alt="" source={require("../../../assets/cad.jpg")} />
                </Center>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article1")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="2">Có thể bạn chưa biết?</AppHeading>
              </Box>
              <Box>
                <AppHeading textVariant="smprimary" mb="2">
                  9 triệu chứng cảnh báo bệnh tim mạch không nên bỏ qua
                </AppHeading>
                <AppText numberOfLines={2} mb="2">
                  Bệnh lý tim mạch được ví như “kẻ giết người thầm lặng”, có thể
                  cướp đi sinh mạng người bệnh nếu không được phát hiện sớm và
                  can thiệp kịp thời. Do đó, việc trang bị kiến thức về những
                  triệu chứng tim mạch chính là yếu tố tiên quyết giúp bạn và
                  người thân tránh được nguy hiểm.
                </AppText>

                <Image alt="" source={require("../../../assets/Advice2.png")} />
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article2")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="2">Có thể bạn chưa biết?</AppHeading>
              </Box>
              <Box>
                <AppHeading textVariant="smprimary" mb="2">
                  95% ca đau tim có dấu hiệu báo trước cả tháng, đó là dấu hiệu
                  nào?
                </AppHeading>
                <AppText numberOfLines={2} mb="2">
                  Các cơn đau tim cướp đi sinh mạng của hàng chục triệu người
                  mỗi năm trên thế giới , nhưng các nhà nghiên cứu tin rằng
                  nhiều trường hợp tử vong có thể tránh được.
                </AppText>

                <Image alt="" source={require("../../../assets/Advice.png")} />
              </Box>
            </Box>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Article3")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">
                  How is coronary artery disease diagnosed?
                </AppHeading>
              </Box>
              <Box>
                <AppHeading textVariant="smprimary" mb="2">
                  If you’re at high risk for heart disease or already have
                  symptoms, your doctor can use several tests to diagnose CAD.
                </AppHeading>

                <AppText numberOfLines={2}>
                  ECG or EKG (electrocardiogram) Measures the electrical
                  activity, rate, and regularity of your heartbeat.
                  Echocardiogram Uses ultrasound (special sound wave) to create
                  a picture of the heart. Exercise stress test Measures your
                  heart rate while you walk on a treadmill. This helps to
                  determine how well your heart is working when it has to pump
                  more blood. Chest X-ray Uses x-rays to create a picture of the
                  heart, lungs, and other organs in the chest. Cardiac
                  catheterization Checks the inside of your arteries for
                  blockage by inserting a thin, flexible tube through an artery
                  in the groin, arm, or neck to reach the heart. Health care
                  professionals can measure blood pressure within the heart and
                  the strength of blood flow through the heart’s chambers as
                  well as collect blood samples from the heart or inject dye
                  into the arteries of the heart (coronary arteries). Coronary
                  angiogram Monitors blockage and flow of blood through the
                  coronary arteries. Uses X-rays to detect dye injected via
                  cardiac catheterization. Coronary artery calcium scan A
                  computed tomography (CT) scan that looks in the coronary
                  arteries for calcium buildup and plaque.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article4")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Causes of CAD</AppHeading>
              </Box>
              <Box>
                <AppHeading textVariant="smprimary" mb="2">
                  What are the causes of Coronary artery disease ?
                </AppHeading>

                <AppText numberOfLines={2}>
                  Coronary artery disease starts when fats, cholesterols and
                  other substances collect on the inner walls of the heart
                  arteries. This condition is called atherosclerosis. The
                  buildup is called plaque. Plaque can cause the arteries to
                  narrow, blocking blood flow. The plaque can also burst,
                  leading to a blood clot.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article5")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Symptoms of CAD</AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  Angina, or chest pain and discomfort, is the most common
                  symptom of CAD. Angina can happen when too much plaque builds
                  up inside arteries, causing them to narrow. Narrowed arteries
                  can cause chest pain because they can block blood flow to your
                  heart muscle and the rest of your body.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article6")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">
                  Preventing Coronary Artery Disease
                </AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  Coronary artery disease is a type of heart disease caused by
                  atherosclerosis, a buildup of a waxy substance called
                  plaque—composed of cholesterol, fat, and calcium—in the
                  arteries. Risk factors include unhealthy cholesterol levels,
                  high blood pressure, diabetes, smoking, obesity, a high-fat
                  diet, and a sedentary lifestyle.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => setShowFull2(!showFull2)}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">15 exercises to prevent CAD</AppHeading>
                <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
              </Box>
              <Box>
                <AppText numberOfLines={showFull2 ? 1000 : 2} mb="2">
                  Get up 15 minutes early and stretch. Jog in place. Take a walk
                  at lunchtime or after dinner. Use the stairs instead of the
                  elevator. Walk to a co-worker's office instead of calling or
                  emailing. Get off the bus one or two stops early and walk the
                  rest of the way. Wash and wax your car by hand instead of
                  driving through the car wash. When you go shopping, park
                  farther away from the store. Take a brisk walk around the mall
                  before you start shopping. Lift light arm weights while
                  talking on the phone. Ride a bike. Wash the windows. Work in
                  your garden or yard. Use a push mower instead of a riding
                  mower. Walk the dog. Work out to an exercise video. Go
                  dancing. Try to be active as a family, like playing tag or
                  catch and taking active vacations.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article7")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">
                  Being active when you have heart disease
                </AppHeading>
                <AppHeading textVariant="smprimary" mb="2">
                  Getting regular exercise when you have heart disease is
                  important. Physical activity can strengthen your heart muscle
                  and help you manage blood pressure and cholesterol levels.
                </AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  Getting regular exercise when you have heart disease is
                  important. Exercise can make your heart muscle stronger. It
                  may also help you be more active without chest pain or other
                  symptoms. Exercise may help lower your blood pressure and
                  cholesterol. If you have diabetes, it can help you control
                  your blood sugar. Regular exercise can help you lose weight.
                  You will also feel better. Exercise will also help keep your
                  bones strong.
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article8")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Rehabilitation and recovery </AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  Cardiac rehabilitation (rehab) is an important program for
                  anyone recovering from a heart attack, heart failure, or other
                  heart problem that requires surgery or medical care. In these
                  people, cardiac rehab can help improve quality of life and can
                  help prevent another cardiac event. Cardiac rehab is a
                  supervised program that includes bones strong.
                </AppText>
                <Center>
                  <Image alt="" source={require("../../../assets/rehab.jpg")} />
                </Center>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => setShowFull3(!showFull3)}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Consequences of CAD</AppHeading>
                <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
              </Box>
              <Box>
                <AppText numberOfLines={showFull3 ? 1000 : 2} mb="2">
                  Coronary artery disease can lead to: Chest pain (angina). When
                  the coronary arteries narrow, the heart may not get enough
                  blood when it needs it most — like when exercising. This can
                  cause chest pain (angina) or shortness of breath. Heart
                  attack. A heart attack can happen if a cholesterol plaque
                  breaks open and causes a blood clot to form. A clot can block
                  blood flow. The lack of blood can damage the heart muscle. The
                  amount of damage depends in part on how quickly you are
                  treated. Heart failure. Narrowed arteries in the heart or high
                  blood pressure can slowly make the heart weak or stiff so it's
                  harder to pump blood. Heart failure is when the heart doesn't
                  pump blood as it should. Irregular heart rhythms
                  (arrhythmias). Not enough blood to the heart can alter normal
                  heart signaling, causing irregular heartbeats.
                </AppText>
                <Center>
                  <Image
                    alt=""
                    source={require("../../../assets/consequence.jpg")}
                  />
                </Center>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Article9")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Risks of CAD </AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  Coronary artery disease is common. Age, genetics, other health
                  conditions and lifestyle choices can affect the health of the
                  heart arteries. Coronary artery disease risk factors include:
                </AppText>
                <Center>
                  <Image alt="" source={require("../../../assets/risk.jpg")} />
                </Center>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Advice1")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Ăn và uống </AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  Runners và người bệnh mạch vừng tốn rất nhiều calories vì thế
                  chúng ta phải nạp lại năng lượng để cơ thể có hoạt động trơn
                  tru, cũng như để xây dựng cơ bắp lẫn xây dựng một hệ tiêu hóa
                  tốt hơn nữa.
                </AppText>
                <Center>
                  <Image alt="" source={require("../../../assets/food.png")} />
                </Center>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => setShowFull4(!showFull4)}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Thực phẩm bổ sung</AppHeading>
                <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
              </Box>
              <Box>
                <AppText numberOfLines={showFull4 ? 1000 : 2} mb="2">
                  Thực phẩm bổ sung Vì runners thường tiêu tốn một lượng năng
                  lượng đáng kể , nên chúng ta một sử dụng thực phẩm bổ sung Các
                  điện giải như Pocari Sweat vì có một nguồn điện giải giúp
                  chúng ta phục hồi Kudos Vitamin C ( một sản phẩm vừa bổ sung
                  nguồn dinh dưỡng trong đó có bao gồm gừng ). Những vitamin mà
                  các runners thường thiếu Sắt: Nồng độ sắt thấp là một trong
                  những lý do nổi bật dẫn đến kết quả tệ trong những buổi tập và
                  cuộc đua Vitamin D CoQ10 Bêt Rôt Adaptogens Probiotics and
                  Prebiotics
                </AppText>
                <Center>
                  <Image
                    alt=""
                    source={require("../../../assets/complement.png")}
                    resizeMode="contain"
                  />
                </Center>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Advice2")}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">
                  Lời khuyên cải thiện việc chạy bộ{" "}
                </AppHeading>
              </Box>
              <Box>
                <AppText numberOfLines={2}>
                  " Chúng ta đều là dân chạy bộ cả. Sẽ luôn đó có ai đó nhanh
                  hơn chúng ta. Nhưng tôi chưa bao giờ gặp một runner fake nào
                  cả “ - Bart Yasso
                </AppText>
              </Box>
            </Box>
          </Pressable>

          <Pressable onPress={() => setShowFull5(!showFull5)}>
            <Box bg="muted.100" p="3" borderRadius="2xl">
              <Box mb="5">
                <AppHeading mb="1">Tính toán Calories</AppHeading>
                <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
              </Box>
              <Box>
                <AppText numberOfLines={showFull5 ? 1000 : 2} mb="2">
                  Công thức tính calories burn trong chạy bộ : Calories = Time*
                  Met* Body Weight /20 Trong đó: Time là thời gian mà patients
                  tham gia tập luyện(phút ) Body weight là cân nặng của người
                  đó( kg) Met là công thức tính độ năng của bài tập đó. Trong
                  chạy bộ sẽ dựa vào công thức sau - - Nếu pace{">"}=6 thì met
                  =3; - Nếu pace {">"}=5 thì met=5; - Nếu pace{">"}=4p30 thì
                  met=8; Còn lại thì met=11; Công thức Pace= thời gian (phút) /
                  quãng đường (km)
                </AppText>
              </Box>
            </Box>
          </Pressable>
        </Column>
      </ScrollView>
    </>
  );
};

export default Advice;

const styles = StyleSheet.create({});
