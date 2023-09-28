/**
 TODO:
 * Deadline
 */

import { StyleSheet } from "react-native";
import React from "react";
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
} from "native-base";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";

const Advice = () => {
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
            <AppHeading>Lời khuyên</AppHeading>
          </Center>
        </HStack>
        <Box bg="muted.100" p="3" borderRadius="2xl" mb="3">
          <Box mb="5">
            <AppHeading mb="1">Thực phẩm</AppHeading>
            <AppText textVariant="subtitle">Có thể bạn chưa biết?</AppText>
          </Box>
          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              Trà xanh và tiêu đen
            </AppHeading>
            <AppText numberOfLines={2}>
              Các nghiên cứu cho thấy bạn nên thêm vào trà xanh một ít hạt tiêu
              đen. Trà xanh đã có một chất chống oxy hóa đặc biệt là EGCG, tăng
              cường khả năng chuyển hóa và chống lại bệnh ung thư. Trong khi đó
              tiêu đen còn có thể giúp EGCG hoạt động hiệu quả hơn. Tiêu làm
              tăng khả năng hấp thụ của EGCG, để nó không bị phá vỡ nhanh chóng
              khi đi vào máu. Nếu không muốn uống trà với tiêu, bạn có thể dùng
              2 món này làm gia vị nấu ăn.
            </AppText>
          </Box>
        </Box>

        <Box bg="muted.100" p="3" borderRadius="2xl" mb="3">
          <Box mb="5">
            <AppHeading mb="2">Có thể bạn chưa biết?</AppHeading>
          </Box>
          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              9 triệu chứng cảnh báo bệnh tim mạch không nên bỏ qua
            </AppHeading>
            <AppText numberOfLines={2} mb="2">
              Bệnh lý tim mạch được ví như “kẻ giết người thầm lặng”, có thể
              cướp đi sinh mạng người bệnh nếu không được phát hiện sớm và can
              thiệp kịp thời. Do đó, việc trang bị kiến thức về những triệu
              chứng tim mạch chính là yếu tố tiên quyết giúp bạn và người thân
              tránh được nguy hiểm.
            </AppText>

            <Image source={require("../../../assets/Advice2.png")} />
          </Box>
        </Box>
        <Box bg="muted.100" p="3" borderRadius="2xl" mb="3">
          <Box mb="5">
            <AppHeading mb="2">Có thể bạn chưa biết?</AppHeading>
          </Box>
          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              95% ca đau tim có dấu hiệu báo trước cả tháng, đó là dấu hiệu nào?
            </AppHeading>
            <AppText numberOfLines={2} mb="2">
              Các cơn đau tim cướp đi sinh mạng của hàng chục triệu người mỗi
              năm trên thế giới , nhưng các nhà nghiên cứu tin rằng nhiều trường
              hợp tử vong có thể tránh được.
            </AppText>

            <Image source={require("../../../assets/Advice.png")} />
          </Box>
        </Box>
      </ScrollView>
    </ScrollView>
  );
};

export default Advice;

const styles = StyleSheet.create({});
