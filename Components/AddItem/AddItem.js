///Modules and packages
import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export default function AddItem(props) {
  const { textItem, handleChangeText, handlePressAddItem } = props;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="¿Encontraste una mascota? ¡Publicalo!"
            value={textItem}
            onChangeText={handleChangeText}
            style={styles.textInput}
            maxLength={20}
          />
        </View>
        <View>
          {textItem.length > 0 && (
            <TouchableWithoutFeedback
              onPress={handlePressAddItem}
              disabled={textItem.length === 0 ? true : false}
            >
              <View
                style={
                  textItem.length === 0
                    ? styles.buttonStyleOpacity
                    : styles.buttonStyle
                }
              >
                <Text style={styles.textButton}>Agregar rescatado</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#06836E",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    maxWidth: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: "#fff",
  },
  textButton: {
    alignSelf: "center",
    color: "#fff",
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "#0F1567",
    borderRadius: 20,
  },
  buttonStyleOpacity: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "#0F1567",
    borderRadius: 20,
    opacity: 0.5,
  },
});
