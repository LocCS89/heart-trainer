import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useAppDispatch, useAppSelector } from "../../store";
import { useFocusEffect } from "@react-navigation/native";
import { removeLoading, setLoading } from "../../store/loading.reducer";

export default function HowToWarmUp() {
  const video = React.useRef(null);
  const dispatch = useAppDispatch();
  const [status, setStatus] = React.useState({});
  const { isLoading } = useAppSelector((state) => state.loading);

  return (
    <>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/heart-trainer.appspot.com/o/bo%20tro.mp4?alt=media&token=b1906862-706a-447c-946a-3808500d4ed5&_gl=1*1ekcqx0*_ga*MTM0MzUzNTYwNy4xNjkzMjM1MTYz*_ga_CW55HF8NVT*MTY5ODE1MTY4My42NC4xLjE2OTgxNTIyMjUuMzEuMC4w",
          }}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/heart-trainer.appspot.com/o/warm%20up.mp4?alt=media&token=110aa42c-b025-4819-b5dc-716db9854b5d&_gl=1*zb7zie*_ga*MTM0MzUzNTYwNy4xNjkzMjM1MTYz*_ga_CW55HF8NVT*MTY5ODE1MTY4My42NC4xLjE2OTgxNTIwNzMuNjAuMC4w",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
