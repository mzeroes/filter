/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { Component } from "react";
import {
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

import { ImagePicker, Permissions } from "expo";
import { colors } from "../../styles/colors";
import TabBarIcon from "../../components/TabBarIcon";
import { deviceInfo } from "../../constants";
import Layout from "../../constants/Layout";

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    image: null,
    uploading: false,
  };

  maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return <View />;
  };

  maybeRenderImage = () => {
    const { image } = this.state;


    return (
      <View style={styles.maybeRenderContainer}>
        <View style={styles.maybeRenderImageContainer}>
          {image === null ? (
            // <Image
            //   source={require("../../assets/images/upload-image.png")}
            //   style={styles.maybeRenderImage}
            // />
            // <TabBarIcon name="ios-images" size={80} />
            <Text />
          )
            : (
              <Image source={{ uri: image }} style={styles.maybeRenderImage} />
            )}
        </View>
        <TouchableOpacity
          onPress={image ? this.copyToClipboard : this.takePhoto}
          onLongPress={image ? this.share : this.pickImage}
          style={styles.maybeRenderImageText}
        >
          <Text>
            { image || <TabBarIcon name="ios-camera" size={Layout.window.width} /> }
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  share = () => {
    Share.share({
      message: this.state.image,
      title: "Check out this photo",
      url: this.state.image,
    });
  };

  copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied image URL to clipboard");
  };

  takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
      const pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      this.handleImagePicked(pickerResult);
    }
  };

  pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === "granted") {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this.handleImagePicked(pickerResult);
    }
  };

  handleImagePicked = async (pickerResult) => {
    let uploadResponse; let
      uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();

        this.setState({
          image: uploadResult.location
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({
        uploading: false
      });
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          >
            {
              this.state.image && (
                <TouchableOpacity
                  onPress={() => (this.setState({ image: null, uploading: false }))}
                  style={styles.touchableButton}
                >
                  <TabBarIcon
                    name="ios-close-circle"
                    focused={this.state.image || this.state.uploading}
                    size={28}
                  />
                </TouchableOpacity>
              )
            }
            <Text style={styles.headText}>
              Upload an image
            </Text>
            {
              this.state.image === null
                ? (
                  <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
                    <TouchableOpacity
                      onPress={this.takePhoto}
                      style={styles.touchableButton}
                      size={40}
                    >
                      <TabBarIcon
                        name="ios-camera"
                        focused={false}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.pickImage}
                      style={styles.touchableButton}
                      size={40}
                    >
                      <TabBarIcon
                        name="ios-images"
                        focused={false}
                      />
                    </TouchableOpacity>

                  </View>

                ) : (
                  <TouchableOpacity
                    onPress={this.pickImage}
                    style={styles.touchableButton}
                  >
                    <TabBarIcon
                      name="ios-cloud-upload"
                      focused
                      size={28}
                    />
                  </TouchableOpacity>
                )
            }
          </View>
        </View>
        {this.maybeRenderImage()}
        {this.maybeRenderUploadingOverlay()}
      </View>
    );
  }
}

async function uploadImageAsync(uri) {
  const apiUrl = "https://file-upload-example-backend-dkhqoilqqn.now.sh/upload";

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // }

  const uriParts = uri.split(".");
  const fileType = uriParts[uriParts.length - 1];

  const formData = new FormData();
  formData.append("photo", {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  return fetch(apiUrl, options);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headingContainer: {
    borderColor: colors.grey,
    backgroundColor: colors.grey
  },
  headText: {
    margin: 20,
    fontSize: 14,
    color: colors.dark
  },
  maybeRenderUploading: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.grey,
  },
  maybeRenderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  touchableButton: {
    backgroundColor: colors.grey,
    padding: 16,
  },
  maybeRenderImageContainer: {
    width: "100%",
  },
  maybeRenderImage: {
    width: Layout.window.width,
    height: Layout.window.width
  },
  maybeRenderImageText: {
    width: "100%",
    alignItems: "center",
    padding: 30,
  }
});
