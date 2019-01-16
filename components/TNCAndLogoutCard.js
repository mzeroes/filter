import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { config } from "../config";
import { colors } from "../styles/colors";
import { handleUrl, onPressLogoutAsync } from "../utils";

const TNCAndLogoutCard = () => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.ppContainer}
      onPress={() => handleUrl(`${config.url}/privacy`)}
    >
      <Text>Privacy policy</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.tncContainer}
      onPress={() => handleUrl(`${config.url}/tnc`)}
    >
      <Text>Licences & Terms of Service</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.logOutButton}
      onPress={onPressLogoutAsync}
    >
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.grey,
    padding: 24,
    margin: 8,
    marginBottom: 40
  },
  ppContainer: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  tncContainer: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  logOutButton: {
    alignItems: "center",
    backgroundColor: colors.red,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  }
});
export default TNCAndLogoutCard;
