import React from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const image = require("../assets/images/profile-1.png");

const UserProfileCard = (props) => {
  const user = {
    id: props.user.id,
    name: props.user.name,
    image,
    email: "",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio nemo nam non facere possimus et magnam voluptatem ex excepturi! Laudantium officiis nemo consectetur velit magni unde nulla, debitis vel illum!"
  };

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      >
        <Text style={{ alignSelf: "flex-start" }}>
          {user.name}
        </Text>
        <View style={{
          alignSelf: "flex-end",
          borderRadius: 50,
          borderWidth: 1,
          borderColor: colors.grey
        }}
        >
          <Image
            source={user.image}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50
            }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 16 }}>
        {user.id}
      </Text>
      <Text style={{ fontSize: 14, marginTop: 16 }}>
        {user.details}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.grey,
    padding: 26,
    margin: 12,
    marginTop: 20,
  }
});

export default UserProfileCard;
