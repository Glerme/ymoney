import "react-native-gesture-handler";

import React from "react";

import { NativeBaseProvider, StatusBar } from "native-base";
import { Loading } from "./components/Loading";

import { THEME } from "./styles/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./routes";

const App = () => {
  // const theme = {
  //   ...DefaultTheme,
  //   roundness: 6,
  //   version: 3,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     primary: "#191641",
  //     secondary: "#1f252a",
  //     tertiary: "#f7f7f7",
  //   },
  // };

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
};

export default App;
