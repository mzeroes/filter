import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text
} from "react-native";

import { colors } from "../../styles/colors";
import { validateTokenAsync } from "../../api/user";
import { getStoredToken, userUpdate } from "../../api/stored";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  state = { validatedUserToken: false };

  bootstrapAsync = async () => {
    const storedData = await getStoredToken();
    console.log(storedData);
    if (storedData) {
      const response = await validateTokenAsync(storedData);
      if (response) {
        this.setState({ validatedUserToken: true });
        userUpdate();
      }
    }
    this.props.navigation
      .navigate(this.state.validatedUserToken ? "App" : "Auth");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: colors.background
        }}
      >
        <StatusBar backgroundColor={colors.statusbar} barStyle="dark-content" />
        <Text style={{ alignSelf: "center", margin: 20 }}>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
