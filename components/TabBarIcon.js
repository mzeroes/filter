import React from "react";
import { Icon } from "expo";

import { colors } from "../styles/colors";

const TabBarIcon = (props) => {
  const size = props.size ? props.size : 28;
  const style = props.style ? props.style : { marginBottom: -4 };
  return (
    <Icon.Ionicons
      name={props.name}
      size={size}
      style={style}
      color={props.focused ? colors.tabIconSelected : colors.tabIconDefault}
    >
      {props.children}
    </Icon.Ionicons>
  );
};

export default TabBarIcon;
