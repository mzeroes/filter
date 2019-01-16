import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import { MonoText } from "../../components/StyledText";
import { baseStyles } from "../../styles";
import { colors } from "../../styles/colors";
import {
  storeTokenInStore,
  userUpdate
} from "../../api/stored";

import {
  webSessionLoginFBAsync,
  webSessionLoginGoogleAsync,
} from "../../api";

export default class LoginScreen extends React.Component {
  static navigationOptions = { header: null };

  state = {
    errorMessage: null,
    validatedUser: false,
    result: null
  };

  LoginAsync = async (tokenData) => {
    if (this.state.validatedUser) {
      await storeTokenInStore(tokenData);
      console.log(`[INFO] LoginAsync validatedUser: ${tokenData}`);
      userUpdate();
      this.props.navigation.navigate("App");
    }
    if (this.state.errorMessage) {
      console.warn(`[ERRORS] LoginAsync : ${this.state.errorMessage}`);
    }
  };

  LoginAuthSessionFBAsync = async () => {
    const result = await webSessionLoginFBAsync();
    if (result.type === "success") {
      const resultTokenData = {
        token: result.params.access_token,
        type: "Facebook"
      };
      this.setState({ validatedUser: true, result });
      console.log(this.state);
      await this.LoginAsync(resultTokenData);
    }
  };

  LoginAuthSessionGoogleAsync = async () => {
    const result = await webSessionLoginGoogleAsync();
    if (result.type === "success") {
      const resultTokenData = {
        token: result.params.access_token,
        type: "Google"
      };
      this.setState({ validatedUser: true, result });

      await this.LoginAsync(resultTokenData);
    }
  };

  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView
          style={baseStyles.container}
          contentContainerStyle={baseStyles.contentContainer}
        >
          <View style={baseStyles.imageContainer}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={baseStyles.welcomeImage}
            />
          </View>

          <View style={baseStyles.baseContainer}>
            <Text style={baseStyles.headingText}>Welcome</Text>
            <MonoText style={baseStyles.highlightText}>
              Sign in to continue
            </MonoText>
            {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )}
            <TextInput
              style={baseStyles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={baseStyles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 20
              }}
            >
              or
            </Text>
            <TouchableOpacity
              onPress={this.LoginAuthSessionFBAsync}
              style={{
                color: colors.white,
                alignItems: "center",
                backgroundColor: "#3C485B",
                borderRadius: 10,
                padding: 10,
                width: "100%",
              }}
            >
              <Text style={{ color: "#fff" }}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.LoginAuthSessionGoogleAsync}
              style={{
                marginTop: 10,
                color: colors.white,
                alignItems: "center",
                backgroundColor: "#ff0000",
                borderRadius: 10,
                padding: 10,
                width: "100%",
              }}
            >
              <Text style={{ color: "#fff" }}>Login with Google</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {this.state.result ? (
          <Text style={baseStyles.linkText}>
            {JSON.stringify(this.state.result)}
          </Text>
        ) : null}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={baseStyles.linkLoginSignup}
        >
          <Text style={baseStyles.linkText}>New user? Signup instead</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
