import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useAppDispatch, useAppSelector } from "../../store";
import { useFocusEffect } from "@react-navigation/native";
import { removeLoading, setLoading } from "../../store/loading.reducer";

export default function HowToRun() {
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
            uri: "https://firebasestorage.googleapis.com/v0/b/heart-trainer.appspot.com/o/drill%201.mp4?alt=media&token=66843da2-d0a8-4fd5-8597-0d0fa13b3ff8&_gl=1*10aj4yw*_ga*MTM0MzUzNTYwNy4xNjkzMjM1MTYz*_ga_CW55HF8NVT*MTY5ODE1MTY4My42NC4xLjE2OTgxNTIyODEuNTguMC4w",
          }}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/heart-trainer.appspot.com/o/drills%202.mp4?alt=media&token=076731a7-c73b-4d08-bdb9-e900ff35c6a5&_gl=1*1uy79rf*_ga*MTM0MzUzNTYwNy4xNjkzMjM1MTYz*_ga_CW55HF8NVT*MTY5ODE1MTY4My42NC4xLjE2OTgxNTIxOTYuNjAuMC4w",
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
