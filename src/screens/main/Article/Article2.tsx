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

const Article2 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/Advice.png")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              95% ca đau tim có dấu hiệu báo trước cả tháng, đó là dấu hiệu nào?
            </AppHeading>
            <AppText bold mb="2">
              Các cơn đau tim cướp đi sinh mạng của hàng chục triệu người mỗi
              năm trên thế giới , nhưng các nhà nghiên cứu tin rằng nhiều trường
              hợp tử vong có thể tránh được.
            </AppText>
            <AppText>
              Điều nguy hiểm là cơn đau tim thường xảy ra bất ngờ, không kịp trở
              tay. Vì vậy, biết được những dấu hiệu sớm để thăm khám kịp thời là
              rất quan trọng, có thể giúp cứu được nhiều người. Và đây, bằng
              chứng cho thấy có những dấu hiệu cảnh báo có thể xuất hiện cả
              tháng trước khi biến cố chết người này xảy ra. Theo một nghiên
              cứu, phụ nữ có thể cảm thấy mệt mỏi bất thường, rối loạn giấc ngủ
              và khó thở trong 1 tháng trước khi cơn đau tim ập đến, theo
              Express. Các triệu chứng này là dấu hiệu cho thấy tim bị thiếu máu
              và oxy. Vì tim có nhiệm vụ bơm máu đi khắp cơ thể, nên khi tim gặp
              sự cố - ngay lập tức khiến toàn bộ cơ thể bị thiếu oxy. Điều này
              dẫn đến một loạt các triệu chứng, nhưng các dấu hiệu cảnh báo sẽ
              khác nhau ở nam và nữ. Một cuộc khảo sát được công bố trên tạp chí
              khoa học của Hiệp hội Tim mạch Mỹ Circulation đã thu thập thông
              tin từ hơn 500 phụ nữ sống sót sau cơn đau tim để so sánh các
              triệu chứng. Kết quả cho thấy, khoảng 95% trường hợp đã gặp những
              thay đổi bất thường trên cơ thể cả tháng trước khi cơn đau tim xảy
              đến, theo Express. Và dấu hiệu gặp nhiều nhất trong những tuần
              trước khi xảy ra cơn đau tim là mệt mỏi và giấc ngủ bị xáo trộn.
              Điều đáng lưu ý là ít phụ nữ bị đau ngực. Thực tế, khi xảy ra đau
              tim thì đa số nam giới đau ngực trong khi phụ nữ thường khó thở.
              Vào năm 2019, Trường Y Harvard (Mỹ) đã tổng kết 12 dấu hiệu hàng
              đầu ở phụ nữ trong 1 tháng trước khi xảy ra cơn đau tim: Mệt mỏi
              bất thường: 71% Rối loạn giấc ngủ: 48% Khó thở: 42% Khó tiêu: 39%
              Lo lắng: 36% Tim đập nhanh: 27% Cánh tay yếu hoặc nặng: 25% Kém
              minh mẫn hoặc suy giảm trí nhớ: 24% Nhìn kém: 23% Chán ăn: 22% Tay
              hoặc cánh tay ngứa ran: 22% Khó thở vào ban đêm: 19% Các chuyên
              gia hy vọng rằng việc cung cấp kiến thức về các dấu hiệu cảnh báo
              sẽ giúp mọi người cảnh giác và giúp cứu mạng mình.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article2;

const styles = StyleSheet.create({});
