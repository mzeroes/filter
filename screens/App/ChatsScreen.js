import React from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";

import { baseStyles } from "../../styles";
import UserProfileCard from "../../components/UserProfileCard";

class ChatsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView>
          <UserProfileCard user={this.props.user} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ChatsScreen);
