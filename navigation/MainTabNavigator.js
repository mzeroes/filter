import React from "react";
import { View, Text, Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/App/HomeScreen";
import ExploreScreen from "../screens/App/ExploreScreen";
import SettingsScreen from "../screens/App/SettingsScreen";
import { colors } from "../styles/colors";
import ChatsScreen from "../screens/App/ChatsScreen";
import PostsScreen from "../screens/App/PostsScreen";

const HelloScreen = props => (
  <View>
    <Text>
      Hello, Worls!
    </Text>
  </View>
);
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Hello: HelloScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-pin${focused ? "" : "-outline"}`
          : "md-pin"
      }
    />
  )
};

const ExploreStack = createStackNavigator({
  Links: ExploreScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const PostsStack = createStackNavigator({
  Posts: PostsScreen
});

PostsStack.navigationOptions = {
  tabBarLabel: "Post",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-albums" : "ios-albums"}
    />
  )
};


const ChatStack = createStackNavigator({
  Carts: ChatsScreen
});

ChatStack.navigationOptions = {
  tabBarLabel: "Chat",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatbubbles" : "md-chatbubbles"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {

  tabBarLabel: "Account",

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    ExploreStack,
    PostsStack,
    ChatStack,
    SettingsStack
  },
  {
    tabBarOptions: {
      activeTintColor: colors.tintColor,
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: colors.background
      }
    }
  }
);
