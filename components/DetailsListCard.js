import React from "react";
import {
  SectionList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import DetailsCard from "./DetailsCard";
import TNCAndLogoutCard from "./TNCAndLogoutCard";

import { colors } from "../styles/colors";

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeaderContainer}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

const SectionContent = props => (
  <View style={styles.sectionContentContainer}>{props.children}</View>
);

export default class DetailsList extends React.Component {
  renderSectionHeader = ({ section }) => <SectionHeader title={section.title} />;

  renderItem = ({ item }) => (
    <SectionContent>
      <Text style={styles.sectionContentText}>{item.value}</Text>
    </SectionContent>
  )

  // let props contains this.props.profileDetails
  render() {
    const sections = [
      // { data: [{ value: this.props.profileDetails.name }], title: "Name" },
      { data: [{ value: this.props.profileDetails.email }], title: "Contact email" },
    ];
    return (
      <View style={styles.container}>
        <SectionList
          style={styles.container}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          stickySectionHeadersEnabled
          keyExtractor={(item, index) => index}
          ListHeaderComponent={DetailsCard(this.props.details)}
          sections={sections}
        />
        <TNCAndLogoutCard />
      </View>
    );
  }
}

// TODO: Refactor this to baseStyles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignContent: "center",
    padding: 6
  },
  sectionHeaderContainer: {
    backgroundColor: colors.grey,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey
  },

  sectionHeaderText: {
    fontSize: 14
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  sectionContentText: {
    color: colors.secondary,
    fontSize: 14
  }
});
