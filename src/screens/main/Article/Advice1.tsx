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

const Advice1 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/food.png")} resizeMode="contain" />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              Ăn uống quan trọng trong chạy bộ
            </AppHeading>

            <AppText>
              Những khuyến nghị về đồ ăn: Runners và người bệnh mạch vừng tốn
              rất nhiều calories vì thế chúng ta phải nạp lại năng lượng để cơ
              thể có hoạt động trơn tru, cũng như để xây dựng cơ bắp lẫn xây
              dựng một hệ tiêu hóa tốt hơn nữa. Đây sẽ là những khuyến nghị được
              dựa trên thực đơn của các vận động viên elite ở Kenya , cường quốc
              chạy bộ. Các vận động viên ở đây có một chế độ ăn rất đơn giản:
              Nhóm giàu tinh bột: Bánh mì hoặc là sandwiches trứng Pasta Cơm
              hoặc yến mạch Spaghetti Ugali ( loại đồ ăn đặc trưng ở Kenya ) bao
              gồm làm từ lúa mạch ở vùng lận cận Bánh quy thường được dùng với
              trà Pancakes được chủ yếu làm từ lúa mạch Nhóm hoa quả: Rau sống
              (green vegetables) như là bách cải, súp lơ, cải bó xôi,...
              Potatoes, pumpkins, green rams Dark green và Chuối, cam , dưa hấu
              cũng được sử dụng nhiều Beans hạt được nuôi từ vùng lân cận
              Protein : Thịt Loại cá Những loại nước uống: Trà thường được dùng
              kèm với bánh quy để bổ sung đầy đủ các vitamin Sửa cũng được sử
              dụng nhiều vì nó giàu protein, vitamin A, B, B6, B12, C, and D,
              Nước uống: Dựa theo nhiều nghiên cứu khoa học , với mỗi giờ chạy
              chúng ta mất khoảng 400-600 ml nước, khoảng 200ml cho từ 15 đến 20
              phút. Trong lúc tập: Vận động viên không nên để khác thì mới uống,
              hãy duy trì uống một ngụm nhỏ từ 15-20p mỗi lần. Điều này sẽ vừa
              cung cấp đủ nước cho cơ thể vừa không khiến cơ thể bị xóc hông.
              Trong một nguyên cứu khoa học của đại học Loughborough University,
              các giáo sư đã phát hiện rằng khi runners uống 5.5
              carbohydrate/100ml thì thành tích sẽ cải thiện gần 3.9p trên cự ly
              42km so với người không uống đủ nước. Ngoài ra, chúng ta cũng cần
              phải để ý vì đã có nhiều trường hợp uống quá nhiều nước dẫn đến bị
              xóc hông và thành tích giảm xuống. Ngoài giờ tập, Vì thế chúng ta
              nên uống khoảng 3 lít nước vào ngày tập và khoảng 2 lít nước trong
              ngày không tập. Nước có thể đến từ hai nguồn : thức ăn và nước
              uống. Ngoài ra, khi sống trong mùa hè chúng ta cũng nên uống nhiều
              nước hơn bình thường vì chúng ta đổ mồ hôi nhiều hơn.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Advice1;

const styles = StyleSheet.create({});
