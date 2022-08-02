import "react-native-gesture-handler";

import React from "react";

import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import { Loading } from "./components/Loading";

import { THEME } from "./styles/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./routes";

const App = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" translucent backgroundColor="#191641" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
};

export default App;
