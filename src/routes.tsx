import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Outputs } from "./Screens/Outputs";
import { Details } from "./Screens/Details";
import { HomeScreen } from "./Screens/Home";

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  Outputs: undefined;
  Detalhes: {
    outputId: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Outputs"
        component={Outputs}
        options={{ title: "Nova Transação", headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
