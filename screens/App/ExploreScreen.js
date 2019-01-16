import React from "react";
import { FlatList, View } from "react-native";
import { baseStyles } from "../../styles";
import ProfileView from "../../components/ProfileCard";
import { usersAsync } from "../../api/user";

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    users: []
  }

  constructor(props) {
    super(props);
    this.bootstrap();
  }

  keyExtractor = (item, index) => item.id;

  bootstrap = async () => {
    const users = await usersAsync();
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <View style={baseStyles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <ProfileView profileDetails={item} />}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
