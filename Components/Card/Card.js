///Modules and packages
import React from "react";
import { View, StyleSheet } from "react-native";

//Components
import Colors from "../../Constants/Colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
