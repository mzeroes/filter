import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

import { colors } from "../styles/colors";

const SectionHeader = ({ title }) => <View />;
// return (
//   <View style={styles.sectionHeaderContainer}>
//     <Text style={styles.sectionHeaderText}>{title}</Text>
//   </View>
// );

const SectionContent = props => (
  <View style={styles.sectionContentContainer}>{props.children}</View>
);

export default class ProfileView extends React.Component {
  renderSectionHeader = ({ section }) => <SectionHeader title={section.title} />;

  renderItem = ({ item }) => (
    <SectionContent>
      {
        item.key === "id"
          ? (
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ alignSelf: "flex-start" }}>
                {item.value}
              </Text>
              <Image
                style={styles.profileImage}
                source={{ uri: item.imageValue, height: 50, width: 50 }}
              />
            </View>
          )
          : (
            <Text style={styles.sectionContentText}>
              {item.value}
            </Text>
          )
      }
    </SectionContent>
  )

  // let props contains this.props.profileDetails
  render() {
    const sections = [
      {
        data: [{
          key: "id",
          value: this.props.profileDetails.id,
          imageValue: this.props.profileDetails.image
        }],
        title: "Id"
      },
      { data: [{ key: "name", value: this.props.profileDetails.name }], title: "Name" },
      { data: [{ key: "email", value: this.props.profileDetails.email }], title: "Email" }
    ];

    return (
      <SectionList
        style={styles.container}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={(item, index) => index}
        sections={sections}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.grey,
    margin: 8,
    padding: 8
  },
  sectionHeaderContainer: {
    backgroundColor: colors.grey,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey
  },
  profileImage: {
    alignSelf: "flex-end",
    borderRadius: 50
  },
  sectionHeaderText: {
    fontSize: 14
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: colors.secondary,
    fontSize: 14
  }
});
