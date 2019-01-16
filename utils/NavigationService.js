// NavigationService.js
import { NavigationActions } from "react-navigation";

let logoutnavigator;
function setTopLevelNavigator(navigatorRef) {
  logoutnavigator = navigatorRef;
}

function navigate(routeName, params) {
  console.log("[INFO] In NavigationService.js");
  logoutnavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};
