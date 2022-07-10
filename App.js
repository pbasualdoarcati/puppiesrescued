//Modules and packages
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

//Components

export default function App() {
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const handlePressAddItem = () => {
    setItemList({
      ...itemList,
      id: Math.floor(Math.random() * 10),
      value: textItem,
    });
    setTextItem("");
  };
  const handleChangeText = (text) => {
    setTextItem(text);
  };

  const handlePressShowStatusBar = () => {
    showStatusBar ? setShowStatusBar(false) : setShowStatusBar(true);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require("./assets/logoPuppies.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>¡Bienvenidos a animales encontrados!</Text>
      <StatusBar
        backgroundColor="#fff"
        animated={showStatusBar}
        hidden={!showStatusBar}
      />
      {showStatusBar ? (
        <TouchableWithoutFeedback onPress={handlePressShowStatusBar}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textButton}>Ocultar barra de estado</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={handlePressShowStatusBar}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textButton}>Mostrar barra de estado</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      <View>
        <TextInput
          placeholder="Ingrese su dirección"
          value={textItem}
          onChangeText={handleChangeText}
          style={styles.textInput}
        />
        <TouchableWithoutFeedback onPress={handlePressAddItem}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textButton}>Agregar dirección</Text>
          </View>
        </TouchableWithoutFeedback>
        <View>
          {itemList.map( item => 
            <View key={item.id}>
              <Text>{item.value}</Text>
            </View>
          )}
        </View>
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
  imgLogo: {
    width: "100%",
    height: "35%",
    margin: 10,
  },
  text: {
    color: "#fff",
    paddingBottom: 10,
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    backgroundColor: "#0F1567",
    borderRadius: 20,
  },
  textButton: {
    alignSelf: "center",
    color: "#fff",
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
  textResult: {
    color: "#fff",
    paddingBottom: 10,
  },
});
