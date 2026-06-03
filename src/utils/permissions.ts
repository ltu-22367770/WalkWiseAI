import * as Location from "expo-location";
import * as Notifications from "expo-notifications";

export async function requestPermissions() {

  const location =
    await Location.requestForegroundPermissionsAsync();

  console.log(
    "Location Status:",
    location.status
  );

  const notification =
    await Notifications.requestPermissionsAsync();

  console.log(
    "Notification Status:",
    notification.status
  );
}