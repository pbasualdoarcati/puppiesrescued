//Modules and packages
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

//Components
import ButtonAdd from "../ButtonAdd/ButtonAdd";

export default function List() {
  const [textInput, setTextInput] = useState("");
  const [list, setList] = useState([]);

  const handlePressAddToDo = (text) => {
      setList(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingrese su dirección"
        value={textInput}
        onChangeText={setTextInput}
        style={styles.textInput}
      />
      <ButtonAdd
        textInput={textInput}
        handlePressAddToDo={handlePressAddToDo(text)}
      />
      <View>
              <Text style={styles.textResult}>{list}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#06836E",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: "#fff",
  },
  text: {
    color: "#fff",
    paddingBottom: 10,
  },
  textResult: {
    color: "#fff",
    paddingBottom: 10,
  },
});
