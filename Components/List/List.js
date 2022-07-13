///Modules and packages
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

//Components

function List() {
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalTitle}>Eliminar</Text>
              </View>
              <View style={styles.modalMessage}>
                <Text>¿Esta seguro que desea eliminar la dirección?</Text>
              </View>
              <View style={styles.modalMessage}>
                <Text style={styles.modalItem}>{itemSelected.value}</Text>
              </View>
              <View style={styles.modalButton}>
                <TouchableWithoutFeedback
                  onPress={() => onHandlerDelete(itemSelected.id)}
                >
                  <View style={styles.modalTouchable}>
                    <Text style={styles.textButton}>Eliminar</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onHandlerCancel}>
                  <View style={styles.modalTouchable}>
                    <Text style={styles.textButton}>Cancelar</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <TextInput
            placeholder="Ingrese su dirección"
            value={textItem}
            onChangeText={handleChangeText}
            style={styles.textInput}
            maxLength={20}
          />
        </View>
        <View>
          <TouchableWithoutFeedback onPress={handlePressAddItem}>
            <View style={styles.buttonStyle}>
              <Text style={styles.textButton}>Agregar dirección</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <FlatList
          data={itemList}
          renderItem={(data) => (
            <TouchableOpacity
              style={styles.InputResult}
              key={data.item.id}
              onPress={() => onHandlerModal(data.item.id)}
            >
              <View>
                <Text style={styles.textResult}>
                  Dirección: {data.item.value}{" "}
                </Text>
                <Text style={styles.textResult}>Fecha: {data.item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default List;

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
