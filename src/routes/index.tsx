import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "../components/Loading";

import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
