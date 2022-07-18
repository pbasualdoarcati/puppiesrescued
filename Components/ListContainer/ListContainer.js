///Modules and packages
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";

//Components
import ModalItem from "../ModalItem/ModalItem";
import AddItem from "../AddItem/AddItem";
import ListItem from "../ListItem/ListItem";

function ListContainer() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressAddItem = () => {
    setItemList([
      ...itemList,
      {
        id: itemList.length + 1,
        date: new Date().toLocaleDateString(),
        value: textItem,
        rescued: false,
      },
    ]);
    setTextItem("");
  };

  const handleChangeText = (text) => {
    let inputText = text.replace(/\s/g, "");
    setTextItem(inputText);
  };

  const onHandlerDelete = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };
  const onHandlerCancel = () => {
    setModalVisible(!modalVisible);
  };
  const onHandlerRescued = (id) => {
    setItemList(
      itemList.map((item) => {
        if (item.rescued === false) {
          item.rescued = true;
        }
      })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ModalItem
          modalVisible={modalVisible}
          itemSelected={itemSelected}
          onHandlerCancel={() => onHandlerCancel()}
          onHandlerDelete={() => onHandlerDelete(itemSelected.id)}
          onHandlerRescued={() => onHandlerRescued(itemSelected.id)}
        />
        <AddItem
          handlePressAddItem={handlePressAddItem}
          handleChangeText={handleChangeText}
          textItem={textItem}
        />
        <ListItem
          itemList={itemList}
          onHandlerModal={onHandlerModal}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#06836E",
    alignItems: "center",
    justifyContent: "center",
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
  textButton: {
    alignSelf: "center",
    color: "#fff",
  },
  textInput: {
    maxWidth: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: "#fff",
  },
  InputResult: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderColor: "black",
    borderWidth: 0.2,
    marginTop: 10,
  },
  textResult: {
    width: 300,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10%",
    flexDirection: "column",
  },
  modalTitle: {
    fontSize: 22,
    color: "#000052",
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTouchable: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: "auto",
    backgroundColor: "#0F1567",
    borderRadius: 20,
    width: "50%",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30,
  },
});
