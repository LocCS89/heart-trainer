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

const Article1 = () => {
  const [showFull, setShowFull] = useState(false);
  return (
    <>
      <HeaderBackground text="Tin tức và lời khuyên" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} bg="white">
        <Column bg='white' space="4" px="4" my="4">
          <Center>
            <Image alt="" source={require("../../../../assets/Advice2.png")} />
          </Center>

          <Box>
            <AppHeading textVariant="smprimary" mb="2">
              9 triệu chứng cảnh báo bệnh tim mạch không nên bỏ qua
            </AppHeading>
            <AppText bold mb="2">
              Bệnh lý tim mạch được ví như “kẻ giết người thầm lặng”, có thể
              cướp đi sinh mạng người bệnh nếu không được phát hiện sớm và can
              thiệp kịp thời. Do đó, việc trang bị kiến thức về những triệu
              chứng tim mạch chính là yếu tố tiên quyết giúp bạn và người thân
              tránh được nguy hiểm.
            </AppText>
            <AppText>
              Các bệnh tim mạch luôn nằm trong nhóm bệnh lý gây tử vong cao, đe
              dọa nghiêm trọng và ảnh hưởng trực tiếp đến chất lượng cuộc sống
              của người bệnh. Tổ chức Y tế Thế giới (WHO) cho biết, mỗi năm có
              khoảng 20 triệu người trên thế giới tử vong vì các bệnh liên quan
              đến tim mạch. (1) Riêng tại Việt Nam, thống kê năm 2016 có khoảng
              170.000 người tử vong vì bệnh tim, chiếm đến 31% trong tổng số ca
              tử vong của cả nước. Theo thống kê của Viện Tim mạch quốc gia, cứ
              4 người trưởng thành sẽ có 1 người bị tăng huyết áp (2). Trong đó,
              tăng huyết áp được biết đến là yếu tố nguy cơ chính gây bệnh động
              mạch vành và đột quỵ. Tỷ lệ nhồi máu cơ tim và đột quỵ ở người
              bệnh có tăng huyết áp gấp 3 lần và 4 lần so với người khỏe mạnh.
              Đây là con số đáng báo động. Cần biết gì về bệnh tim mạch Bệnh tim
              mạch (tiếng Anh là Cardiovascular Disease – viết tắt là CVD) là
              tên gọi chung cho các bệnh của tim và mạch máu, bao gồm: bệnh động
              mạch vành, các bệnh van tim, các bệnh tim bẩm sinh, bệnh động mạch
              chủ, các bệnh động mạch ngoại biên, suy tim, bệnh thấp tim, bệnh
              cơ tim, các rối loạn nhịp tim… Các yếu tố nguy cơ chính gây ra bao
              gồm: hút thuốc lá, đái tháo đường, béo phì, ít hoạt động thể lực,
              hoặc có chế độ ăn uống không lành mạnh, tần suất sử dụng rượu bia
              ở mức cao. Những yếu tố này liên quan chủ yếu tới các thói quen
              sinh hoạt, làm việc, ăn uống…và hoàn toàn có thể điều chỉnh để
              phòng ngừa không bị các bệnh tim mạch. Triệu chứng của bệnh tim
              mạch là gì? TS.BS Nguyễn Anh Dũng, Trưởng khoa Phẫu thuật Tim –
              Lồng ngực, Mạch máu, Trung tâm Tim mạch, Bệnh viện Đa khoa Tâm Anh
              TP.HCM cho biết, triệu chứng chính của các bệnh lý tim mạch thường
              gặp gồm: 1. Khó thở Khó thở có thể gặp khi gắng sức, nặng hơn có
              thể gặp cả khi nghỉ ngơi. Đôi khi, người bệnh không thể nằm xuống
              mà phải ngồi để thở. Triệu chứng này thể hiện tình trạng suy tim,
              khi chức năng co bóp của tim không đảm bảo tống máu đi nuôi cơ
              thể. 2. Đau ngực Đau ngực do bệnh tim là biểu hiện của tình trạng
              cơ tim bị thiếu máu. Người bệnh có cảm giác bị đè nặng tức ở ngực
              trái, ở trên rốn… Có thể biểu hiện với cơn đau thắt ở ngực lan lên
              cằm, lên vai hay ra sau lưng. Các biểu hiện đau này thường có tính
              chu kỳ, xảy ra khi người bệnh gắng sức hay bị stress, hết khi nghỉ
              ngơi. Những cơn đau thắt ngực có thể kéo dài khoảng 5-10 phút và
              có xu hướng lặp lại. Khuyến cáo người bệnh khi gặp những cơn đau
              ngực kéo dài cần nghỉ ngơi tuyệt đối, đến ngay cơ sở y tế để được
              xác định chẩn đoán và can thiệp kịp thời vì đây cũng có thể là dấu
              hiệu của nhồi máu cơ tim cấp. 3. Thường xuyên mệt mỏi Khi bạn
              thường xuyên cảm thấy mệt mỏi, kiệt sức sau các hoạt động sinh
              hoạt thường ngày, thậm chí ngay sau khi ngủ dậy thì có thể đây là
              dấu hiệu của chứng thiếu máu đến não, tim và phổi. 4. Ho dai dẳng
              Suy tim làm cho máu không được bơm đi nuôi cơ thể, đồng thời máu
              bị ứ lại ở phổi. Dịch, máu thoát mạch vào mô kẽ và vào các phế
              nang làm cho người bệnh bị ho thành cơn kéo dài và dai dẳng. Ho
              nhiều hơn khi người bệnh nằm xuống. Người bệnh tim cũng có thể bị
              những cơn ho do tác dụng phụ của thuốc điều trị suy tim như một số
              thuốc ức chế men chuyển. 5. Buồn nôn, chán ăn Có rất nhiều bệnh lý
              gây ra tình trạng buồn nôn, chán ăn… nhưng đây cũng là triệu chứng
              điển hình của bệnh suy tim. Người bệnh thường cảm giác no tức bụng
              do máu bị ứ ở gan và các cơ quan tiêu hóa. Tình trạng này làm cho
              gan và các cơ quan tiêu hóa cũng bị giảm chức năng làm cho người
              bệnh chán ăn và buồn nôn. 6. Nhịp tim nhanh, mạch đập không đều
              Nguyên nhân chính dẫn đến hiện tượng này là do tim phải đập nhanh
              hơn để bù lại việc suy giảm chức năng bơm máu. Người bệnh có thể
              hồi hộp, nghe rõ nhịp tim đập nhanh như đánh trống ở ngực. 7. Hay
              lo lắng Triệu chứng này thường bị bỏ quên do người bệnh chủ quan
              xem thường, hay nhầm lẫn với các dấu hiệu lo lắng, căng thẳng bình
              thường mà không biết rằng đây chính là dấu hiệu phổ biến cảnh báo
              chứng suy tim. Người bệnh thường có triệu chứng thở nhanh, tim đập
              bất thường, lòng bàn tay đổ nhiều mồ hôi… 8. Chóng mặt và ngất xỉu
              Đây là triệu chứng thường tim mạch gặp ở những bệnh nhân bị gián
              đoạn hoặc rối loạn nhịp tim ở mức độ nghiêm trọng. “Nhiều bệnh
              nhân thường xuyên gặp phải các triệu chứng kể trên nhưng thường
              chủ quan, nghĩ rằng các triệu chứng này là bình thường, thoáng qua
              rồi nhanh chóng bỏ qua các dấu hiệu ban đầu, đến khi bệnh trở nặng
              mới đến thăm khám. Điều này khiến cho quá trình điều trị trở nên
              khó khăn, không đạt hiệu quả cao nhưng lại tốn kém rất nhiều chi
              phí. Do đó, khuyến cáo người bệnh cần đến ngay cơ sở y tế có
              chuyên khoa tim mạch càng sớm càng tốt để được thăm khám, chẩn
              đoán chính xác và điều trị hiệu quả nhất, tránh bỏ lỡ thời gian
              vàng trong điều trị bệnh”, bác sĩ Nguyễn Anh Dũng nhấn mạnh. 9.
              Hiện tượng phù nề Sau khi ngủ dậy nếu bạn cảm thấy mặt bị căng
              phù, mí mắt trĩu nặng, hoặc có thể chân bị phù ở một vài thời điểm
              nhất định trong ngày, đột nhiên đi giày dép chật… thì hãy đến ngay
              cơ sở y tế để được kiểm tra, vì có thể đây là những triệu chứng
              của bệnh suy tim. Phòng ngừa bệnh tim mạch bằng cách nào? Bệnh lý
              tim mạch có thể gây nguy hiểm cho người bệnh nếu không được phát
              hiện sớm và điều trị kịp thời. Các chuyên gia tim mạch khuyến cáo
              người bệnh nên ưu tiên thực hiện các biện pháp phòng bệnh hơn chữa
              bệnh, cụ thể là: Xây dựng chế độ ăn uống khoa học, kiểm soát tốt
              hàm lượng cholesterol trong máu Hàm lượng cholesterol trong máu
              quá cao sẽ bám vào thành động mạch, lâu ngày khiến lòng động mạch
              bị hẹp lại, dẫn đến tình trạng tắc nghẽn động mạch, ngăn máu đến
              nuôi dưỡng tim và các cơ quan khác trong cơ thể, là nguyên nhân
              chính dẫn đến tình trạng nhồi máu cơ tim, tai biến mạch máu não
              cùng nhiều biến chứng nguy hiểm khác. Do đó, cần xây dựng và duy
              trì một chế độ ăn uống khoa học như bổ sung đầy đủ chất dinh
              dưỡng, ăn chín uống sôi, hạn chế chất ngọt và chất béo, nên ăn
              nhiều cá, thịt nạc và các loại rau củ quả,… Đồng thời. cần có kế
              hoạch theo dõi và kiểm soát chặt chẽ hàm lượng cholesterol trong
              máu. Kiểm soát tốt huyết áp Cần xây dựng kế hoạch theo dõi và kiểm
              soát tốt các chỉ số huyết áp luôn ở mức ổn định. Trường hợp người
              bệnh cao huyết áp cần tham khảo ý kiến bác sĩ để có phương pháp
              điều trị, chăm sóc sức khỏe tốt nhất. Không hút thuốc lá Nghiên
              cứu cho thấy những chất độc hại trong thuốc lá có thể làm tổn
              thương các mạch máu và tim, có thể dẫn đến chứng xơ vữa động mạch
              (3). Đặc biệt, chất nicotin trong thuốc lá có thể làm tim đập
              nhanh, huyết áp tăng cao, gây tích tụ mỡ và đóng cục dẫn đến tắc
              nghẽn mạch. Do đó, các chuyên gia tim mạch khuyến cáo không hút
              thuốc lá để giữ cho trái tim bạn được khỏe mạnh. Giữ mức cân nặng
              cân đối, tránh béo phì Thống kê cho thấy những người béo phì có
              nguy cơ mắc bệnh lý tim mạch vì tim phải làm việc nhiều hơn để đảm
              bảo bơm máu nuôi dưỡng khối tế bào lớn của cơ thể. Phải hoạt động
              ở cường độ mạnh và lâu ngày, tim sẽ yếu dần đi. Do đó, cần có chế
              độ ăn uống và tập luyện khoa học để cân nặng luôn ở mức cân đối,
              tránh béo phì. Tập luyện thể dục thể thao điều độ Việc tập luyện
              thể dục thể thao điều độ giúp điều hòa huyết áp và tim mạch, giúp
              tim co bóp được tốt hơn. Bạn có thể tham khảo ý kiến bác sĩ để
              chọn lựa những bài tập phù hợp sức khỏe và tình trạng của mình. Có
              giấc ngủ ngon, tránh căng thẳng Tình trạng thiếu ngủ kéo dài có
              thể dẫn đến các bệnh lý tim mạch như tăng huyết áp, suy tim và
              tiểu đường. Hay căng thẳng là nguyên nhân chính của bệnh nhồi máu
              cơ tim và nhiều bệnh lý nguy hiểm khác. Do đó, cần sắp xếp thời
              gian làm việc, các hoạt động trong ngày và nghỉ ngơi một cách hợp
              lý, đủ giấc. Luôn duy trì cơ thể ở trạng thái thoải mái, tránh
              căng thẳng là những biện pháp quan trọng phòng ngừa hiệu quả nhất.
              Kiểm tra sức khỏe định kỳ Kiểm tra sức khỏe định kỳ để có thể kiểm
              soát một cách tốt nhất các chỉ số huyết áp, hàm lượng cholesterol
              trong máu, phát hiện sớm những bất thường nếu có là biện pháp hữu
              hiệu trong phòng ngừa các bệnh lý tim mạch. Trên thực tế, các biểu
              hiện của bệnh tim ban đầu thường không rõ ràng, chỉ một số yếu tố
              rất nhỏ lại chính là tín hiệu cảnh báo triệu chứng tim mạch có
              nguy cơ biến chứng nguy hiểm. Do đó, chuyên gia khuyến cáo người
              bệnh khi nhận thấy những dấu hiệu bất thường hãy đến ngay cơ sở y
              tế để được can thiệp đúng cách và kịp thời.
            </AppText>
          </Box>
        </Column>
      </ScrollView>
    </>
  );
};

export default Article1;

const styles = StyleSheet.create({});
