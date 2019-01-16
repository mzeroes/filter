import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

import AuthLoadingScreen from "../screens/Auth/AuthLoadingScreen";

const AuthStack = createStackNavigator({
  SignIn: LoginScreen,
  SignUp: SignUpScreen
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(AppNavigator);
