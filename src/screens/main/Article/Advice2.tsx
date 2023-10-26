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

const Advice2 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image
              alt=""
              source={require("../../../../assets/food.png")}
              resizeMode="contain"
            />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              Cải thiện hiệu quả chạy
            </AppHeading>

            <AppText>
              “ Chúng ta đều là dân chạy bộ cả. Sẽ luôn đó có ai đó nhanh hơn
              chúng ta. Nhưng tôi chưa bao giờ gặp một runner fake nào cả “ -
              Bart Yasso Vì vậy, chúng ta hãy luôn tận hưởng từng giây phút hạnh
              phúc của chạy bộ. Đây là 10 lời khuyên nhỏ để có thể tiến bộ thành
              tích và chạy tốt hơn: Hãy đặt một mục tiêu phù hợp: Bạn không cần
              phải chạy 10km trong ngày đầu tiên. Hãy từ từ. Quyết tâm vào một
              giáo án tập luyện để giúp bạn tăng cường độ từ từ. Hãy bắt đầu với
              vừa chạy vừa đi bộ, hàng ngày giảm thời gian đi bộ xuống và tăng
              thời gian chạy lên. Tham gia một cộng đồng chạy bộ: Với sự nở rộ
              của chạy bộ trong những năm qua, đã có nhiều cộng đồng chạy bộ
              đáng chú ý như: Adidas Runner Saigon, ASICS running club , garmin
              running club. Tham gia một cộng đồng chạy bộ sẽ mang lại cho ta
              nhiều động lực để tiếp tục duy trì và vượt qua được những cơn đau
              Thêm những bài tập bổ trợ: Để có thể chạy thêm một đoạn chúng ta
              cần thêm sức mạnh và dẻo dai vì bạn cần thêm sức mạnh để có thể
              thích ứng với cơ thê. Runners có thể hoàn toàn tập gym, core, tập
              yoga hay bơi lội. Điều này sẽ giúp đỡ form chạy bạn rõ rệt Chạy
              nhiều hơn trong những ngày được nghỉ: Do công việc bộn bề và lịch
              làm việc dày đặc, chúng ta hãy hiếm có thời gian để cho hoạt động
              thể thao. Vì vậy, nếu có ngày nghỉ thì chúng ta hãy dành một chút
              thời gian để chăm lo cho sức khỏe nhé! Tập dốc Bất kì giải chạy ở
              thành phố lớn đều có những cây cầu và dốc ảnh hưởng đến thành tích
              của runners khi tham gia giải chạy, Vì thế, hãy cố gắng tập bổ
              sung những bài leo cầu hay bổ trơ vào buổi tập nhé ! Lắng nghe cơ
              thể: Trước khi bắt đầu bất kì giáo án tập luyện nào, hãy xem xét
              kĩ và nói chuyện với bác sĩ về tính hình sức khỏe hiện tại của
              chúng ta, Khi bạn bắt đầu tập luyện, hãy để ý kỹ tới cách cơ thể
              phản ứng lại với mặt đường và cường độ tập luyện trong những
              trường hợp sau nhất. Bạn cũng nên coi kỹ lại lịch sự tập luyện để
              có những điều chỉnh phù hợp kịp thời. Ăn đầy đủ và uống đủ nước:
              Runners sẽ mất rất nhiều nước vì đã tập luyện trong thời gian dài
              nên hãy luôn uống tối thiểu 2 lít nước mỗi ngày bạn nhé !! Chúng
              ta sẽ cũng tiêu một lượng calories lớn nên hãy ăn uống đầy đủ và
              giảm bớt lượng đường bạn nhé !! Tập trung vào ngày nghỉ: Sau mỗi
              buổi tập, cơ thể chúng ta cần một thời gian nhất định để phù hồi
              nên hãy duy trì những ngày nghỉ nhé. Nếu bạn overtrain thì hậu quả
              sẽ nặng hơn nhé. Tìm hiểu về địa hình ngày race: Chúng ta cũng nên
              dành 15p trước ngày race để tìm hiểu kĩ đường đua sẽ giúp chúng ta
              phân sức phù hợp cho từng đoạn đường. Ngoài ra, chúng ta còn có
              thể tham khảo lời khuyên từ những vận động viên chuyên nghiệp
              thông qua báo đài để có thể hiểu thêm về địa hình. Làm quen với
              không khí race: Một loại rất thường gặp đối với runners khi race
              là bắt đầu quá nhanh so với mức thực tế do sự hồi hộp. Vì thế, làm
              quen với runners khác, hiểu được các mục tiêu khác nhau theo
              runner, chúng ta sẽ điều chỉnh và có thành tích tốt hơn nhiều đấy.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Advice2;

const styles = StyleSheet.create({});
