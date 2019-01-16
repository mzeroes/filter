import React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

import DetailsList from "../../components/DetailsListCard";
import UserProfileCard from "../../components/UserProfileCard";

import { profileDetails, details } from "../../constants/mockDetails";
import { colors } from "../../styles/colors";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <UserProfileCard user={this.props.user} />
        <DetailsList profileDetails={profileDetails} details={details} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SettingsScreen);
