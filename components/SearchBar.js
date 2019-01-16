/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { colors } from "../styles/colors";
import TabBarIcon from "./TabBarIcon";

class SearchBar extends React.Component {
  state = {
    searchQuery: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          backgroundColor: colors.lightgrey
        }}
        >
          <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          >
            <TextInput
              style={[styles.textInput, {
                alignContent: "flex-start",
                flex: 1,
              }]}
              placeholder="search"
              autoCapitalize="none"
              onChangeText={(searchQuery) => {
                this.setState({ searchQuery });
              }}
              value={this.state.searchQuery}
              onKeyPress={() => this.props.filterData(this.state.searchQuery)}
            />
            <TouchableOpacity
              onPress={() => this.props.filterData(this.state.searchQuery)}
              style={[styles.touchableButton, { alignContent: "flex-start" }]}
            >
              <TabBarIcon
                name="ios-search"
                focused
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            {/* <TouchableOpacity
              onPress={this.pickImage}
              style={[styles.touchableButton, { alignContent: "flex-end" }]}
            >
              <TabBarIcon
                name="ios-funnel"
                focused
                size={30}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        <View>
          {
            this.props.children
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultsContainer: {
    flex: 1,
    borderWidth: 2,
    margin: 8,
  },
  touchableButton: {
    padding: 12,
  },
  textInput: {
    padding: 4,
    paddingLeft: 12,
    height: 36,
    margin: 10,
    color: colors.text,
    borderWidth: 2,
    borderColor: colors.lightgrey,
    backgroundColor: colors.lightgrey
  },
  text: {
    margin: 12,
    alignSelf: "center",
    fontSize: 18,
    color: colors.primary
  }
});
export default SearchBar;
