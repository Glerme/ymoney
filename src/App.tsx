import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { Routes } from "./routes";

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 6,
    version: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: "#191641",
      secondary: "#1f252a",
      tertiary: "#f7f7f7",
    },
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
