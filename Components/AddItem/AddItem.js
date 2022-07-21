///Modules and packages
import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";

//Components
import { StyledView, StyledTextInput, StyledText } from './Style'
import Colors from "../../Constants/Colors";

const AddItem = (props) => {
  const { textItem, handleChangeText, handlePressAddItem } = props;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <StyledView>
        <View>
          <StyledTextInput
            placeholder="¿Encontraste una mascota? ¡Publicalo!"
            value={textItem}
            onChangeText={handleChangeText}
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
                <StyledText>Agregar rescatado</StyledText>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: Colors.colorBackgroundButton,
    borderRadius: 20,
  },
  buttonStyleOpacity: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: Colors.colorBackgroundButton,
    borderRadius: 20,
    opacity: 0.5,
  },
});
