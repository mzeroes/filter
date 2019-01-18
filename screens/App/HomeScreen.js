import React from "react";
import { View, FlatList, Platform, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Constants, Location, Permissions, MapView } from "expo";
import getPermission from "../../utils/getPermission";
import { colors } from "../../styles/colors";
import TabBarIcon from "../../components/TabBarIcon";

const MainMapView = props => (
  <View style={{
    flex: 1,
    backgroundColor: colors.background
  }}
  >
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      position: "absolute",
      zIndex: 10,
      flex: 1,
      alignItems: "center",
      alignContent: "center",
      paddingLeft: 30,
      marginTop: 24,
      width: "90%",
      marginLeft: "5%",
      borderRadius: 8,
      // borderWidth: 1,
      // borderColor: colors.tintColor,
      backgroundColor: "#F2F2F2ef"
    }}
    >
      <TouchableOpacity onPress={() => { }}>
        <TabBarIcon
          name="ios-menu"
          size={28}
        />
      </TouchableOpacity>
      <Text style={{
        margin: 20,
        fontSize: 14,
        color: colors.dark
      }}
      >
        Testing OTA
      </Text>
    </View>
    <MapView
      style={{
        flex: 1, zIndex: -1
      }}
      region={props.region}
    >
      <MapView.Marker
        coordinate={props.marker.latlng}
        title={props.marker.title}
        description={props.marker.description}
      />
    </MapView>
  </View>
);

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    errorMessage: null,
    region: {
      latitude: 28.7041,
      longitude: 77.1025,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage: "Oops, this will not work on Sketch in an Android emulator. Try it on your device!",
      });
    } else {
      this.getLocationAsync();
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  getLocationAsync = async () => {
    const status = getPermission(Permissions.LOCATION);
    if (status === false) {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    } else {
      const location = await Location.getCurrentPositionAsync({});
      const metro = (await Location.geocodeAsync("Rithala metro"))[0];
      console.log(`[INFO] Location: ${JSON.stringify(location, null, 4)}\n metro: ${JSON.stringify(metro, null, 4)}`);
      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922 / 3,
          longitudeDelta: 0.0421 / 2.5,
        }
      });
    }
  };


  render() {
    const marker = {
      latlng: {
        latitude: this.state.region.latitude,
        longitude: this.state.region.longitude
      },
      title: "Shubham' Home!",
      description: "This is house of a future nobel price winner..."
    };

    return (
      this.state.errorMessage ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>
            {this.state.errorMessage}
          </Text>
        </View>
      ) : (
        <MainMapView
          navigaion={this.props.navigaion}
          region={this.state.region}
          marker={marker}
        />
      )
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HomeScreen);
