import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require("../../assets/logoPuppies.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>¡Bienvenidos a animales encontrados!</Text>
      <StatusBar backgroundColor="#fff" animated={true} hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    alignItems: "center",
    justifyContent: "center",
  },
  imgLogo: {
    width: 150,
    height: 150,
  },
  text: {
    color: "#fff",
    paddingBottom: 10,
  },
});
