// NavigationService.js
// this provides navigator to authScreen directly
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

export default {
  navigate,
  setTopLevelNavigator,
};
