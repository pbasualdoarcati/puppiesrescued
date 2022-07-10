//Modules and packages
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";

//Components
export default function ButtonAdd({ handlePressAddToDo, textInput }) {
  return (
    <TouchableWithoutFeedback onPress={() => handlePressAddToDo(textInput)}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textButton}>Agregar dirección</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "#0F1567",
    borderRadius: 20,
  },
});
