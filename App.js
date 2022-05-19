import React from "react";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/utils/contexts/auth.context";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor={"transparent"} />
      <Routes />
    </AuthProvider>
  );
}
