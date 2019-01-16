// common utils
import { WebBrowser } from "expo";
import NavigationService from "./NavigationService";
import { resetTokenInStore } from "../api/user";

export const handleUrl = (url) => {
  WebBrowser.openBrowserAsync(url);
};

export const onPressLogoutAsync = async () => {
  await resetTokenInStore();
  // add some latency
  setTimeout(() => { }, 4000); // add some function to confirm
  console.log("[INFO] logging out ");
  NavigationService.navigate("AuthLoading");
};
