///Modules and packages
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

//Components
import Colors from "../Constants/Colors";

const StartPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logoPuppies.png")}
        style={styles.imgLogo}
      />
      <Text style={styles.text}>Haz click para continuar</Text>
    </View>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imgLogo: {
    width: 375,
    height: 375,
    maxWidth: "84%",
    maxHeight: "81.7%",
  },
  text: {
    color: Colors.colorText,
    paddingBottom: 10,
    fontFamily: "PoppinsExtraBold",
  },
});
