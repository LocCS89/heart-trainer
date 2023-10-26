/**
 TODO: Run Screen - Khang
 * Deadline
 */

import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { HStack, Image, Center, Button, Column } from "native-base";
import AppHeading from "../../components/Typograpy/AppHeading";
import AppText from "../../components/Typograpy/AppText";
import { useAppDispatch, useAppSelector } from "../../store";
import { EGender } from "../../types/user";
import { setRun } from "../../store/run.reducer";
import { IRun } from "../../types/run";

export const data = [
  {
    content: "Chạy bộ 10km",
    date: "15 tháng 07, 2023",
    calories: "2000 kcal",
  },
  {
    content: "Tập luyện 5/33",
    date: "15 tháng 07, 2023",
    calories: "2000 kcal",
  },
  {
    content: "Tập luyện 4/33",
    date: "15 tháng 07, 2023",
    calories: "2000 kcal",
  },
  {
    content: "Tập luyện 3/33",
    date: "15 tháng 07, 2023",
    calories: "2000 kcal",
  },
  {
    content: "Tập luyện 2/33",
    date: "15 tháng 07, 2023",
    calories: "2000 kcal",
  },
  {
    content: "Tập luyện 1/33",
    date: "15 tháng 07, 2023",
    calories: "2000 kcal",
  },
];

function timeFormat(sec_num: number) {
  let hours: number | string = Math.floor(sec_num / 3600);
  let minutes: number | string = Math.floor((sec_num - hours * 3600) / 60);
  let seconds: number | string = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}

const Run = ({ navigation }: any) => {
  const { gender, weight } = useAppSelector((state) => state.user.user!);
  const [status, setStatus] = useState("run");
  const { run } = useAppSelector((state) => state.run);

  const [runHis, setRunHis] = useState(data);

  const dispatch = useAppDispatch();

  const [speed, setSpeed] = useState(6);
  const [time, setTime] = useState(0);
  const kcalFactor = gender === EGender.M ? 11 : 9;
  const kcal = weight * kcalFactor * speed * (time / 3600);
  const formatDist = (x: number) => {
    if (x < 1) {
      return `${(x * 1000).toFixed(1)} m`;
    } else {
      return `${x.toFixed(2)} km`;
    }
  };
  const dist = formatDist(speed * (time / 3600));

  const [intervalTracking, setIntervalTracking] = useState<NodeJS.Timer | null>(
    null
  );

  useEffect(() => {
    if (status === "run") {
      const timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      setIntervalTracking(timer);
      return () => {
        if (intervalTracking) clearInterval(intervalTracking);
      };
    } else {
      clearInterval(intervalTracking!);
    }
  }, [status, time, speed]);

  function IsPaused() {
    setStatus("pause");
  }

  function updateHisory() {
    const history = [
      { content: run?.content, calories: run?.calories, date: run?.date },
      ...data,
    ];
    return history;
  }

  function IsStopped() {
    setStatus("stop");
    const newData = {
      content: "Tập luyện 6/33",
      calories: kcal.toFixed(1),
      date: new Date().toDateString(),
    };
    dispatch(setRun(newData as IRun));
    setRunHis([newData, ...runHis]);
  }

  function IsContinued() {
    setStatus("run");
  }

  return (
    <Column flex="1" bg="white">
      <Image alt="bg" source={require("../../../assets/road.png")} w="full" />
      <Center>
        <AppText textVariant="title" mb="10" mt={-8}>
          Mục tiêu: 10km
        </AppText>
        <AppText
          textVariant="title"
          mb="5"
          display={status === "stop" ? "none" : "flex"}
        >
          KHOẢNG CÁCH
        </AppText>

        <Center mb="5" display={status === "stop" ? "flex" : "none"}>
          <AppHeading textVariant="thin">Tập luyện 1/33</AppHeading>
          <AppText textVariant="subtitle">Bắt đầu chạy</AppText>
        </Center>

        <AppHeading
          textVariant="primary"
          display={status === "stop" ? "flex" : "none"}
          mb="5"
        >
          {dist}
        </AppHeading>

        <AppHeading
          textVariant="primary"
          display={status === "stop" ? "none" : "flex"}
          mb="4"
        >
          {dist}
        </AppHeading>
      </Center>

      <HStack mb="4">
        <Center flex={1}>
          <AppText textVariant="small">Thời gian</AppText>
          <AppText textVariant="title">{timeFormat(time)}</AppText>
        </Center>
        <Center flex={1}>
          <AppText textVariant="small">Tốc độ</AppText>
          <AppText textVariant="title">{speed.toFixed(1)} km/h</AppText>
        </Center>
        <Center flex={1}>
          <AppText textVariant="small">Calories</AppText>
          <AppText textVariant="title">{kcal.toFixed(1)} kcal</AppText>
        </Center>
      </HStack>

      <Button
        p="3"
        rounded="lg"
        mx="4"
        onPress={IsPaused}
        display={status === "run" ? "flex" : "none"}
        _text={{ color: "white", fontWeight: "semibold" }}
      >
        Tạm dừng
      </Button>

      <HStack
        space="4"
        px="4"
        justifyContent="space-between"
        display={status === "pause" ? "flex" : "none"}
      >
        <Button
          rounded="lg"
          p="3"
          onPress={IsStopped}
          flex={1}
          bg="#FF5555"
          _text={{ color: "white", fontWeight: "semibold" }}
        >
          Dừng lại
        </Button>
        <Button
          rounded="lg"
          p="3"
          flex={1}
          onPress={IsContinued}
          _text={{ color: "white", fontWeight: "semibold" }}
        >
          Tiếp tục
        </Button>
      </HStack>
      {status === "stop" && (
        <Button
          rounded="lg"
          mx="4"
          p="3"
          onPress={() => {
            console.log(runHis);
            navigation.navigate("Home");
            navigation.navigate("History");
          }}
          _text={{ color: "white", fontWeight: "semibold" }}
        >
          Về trang chủ
        </Button>
      )}
    </Column>
  );
};

export default Run;

const styles = StyleSheet.create({});
