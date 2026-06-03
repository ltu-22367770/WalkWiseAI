import { Stack, router } from "expo-router";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { requestPermissions }
from "../src/utils/permissions";

export default function RootLayout() {

  useEffect(() => {

    requestPermissions();


    const subscription =
      Notifications.addNotificationResponseReceivedListener(
        () => {
          router.push(
            "/main/notifications"
          );
        }
      );

    return () => {
      subscription.remove();
    };

  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}