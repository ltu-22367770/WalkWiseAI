import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Redirect } from "expo-router";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] =
    useState(false);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {
          setLoggedIn(!!user);
          setLoading(false);
        }
      );

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#050B2C",
        }}
      >
        <ActivityIndicator
          size="large"
          color="#6C63FF"
        />
      </View>
    );
  }

  if (loggedIn) {
    return (
      <Redirect href="/main/dashboard" />
    );
  }

  return (
    <Redirect href="/onboarding/splash" />
  );
}