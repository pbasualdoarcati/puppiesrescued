///Modules and packages
import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";

//Components
import Colors from "../../Constants/Colors";
import ModalItem from "../ModalItem/ModalItem";
import AddItem from "../AddItem/AddItem";
import ListItem from "../ListItem/ListItem";
import Card from "../Card/Card";

const ListContainer = () => {
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
        image: "Aca va la imagen",
        rescued: false,
      },
    ]);
    setTextItem("");
  };

  const handleChangeText = (text) => {
    setTextItem(text);
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
    const newArr = itemList.map((item) => {
      if (item.id === id) {
        return { ...item, rescued: true };
      }
      return item;
    });
    setItemList(newArr);
    onHandlerCancel();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Card style={styles.container}>
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
        <ListItem itemList={itemList} onHandlerModal={onHandlerModal} />
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default ListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
