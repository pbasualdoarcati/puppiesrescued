import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

export default function ModalItem(props) {
    const { modalVisible, itemSelected, onHandlerCancel, onHandlerDelete, onHandlerRescued } =
    props;

  return (
    <View>
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
              <Text style={styles.modalTitle}>Mascota rescatada</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text>¿Que desea hacer con la publicación?</Text>
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
                <TouchableWithoutFeedback onPress={() => onHandlerRescued(itemSelected.id)}>
                <View style={styles.modalTouchable}>
                  <Text style={styles.textButton}>Devuelto</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={onHandlerCancel}>
                <View style={styles.modalTouchable}>
                  <Text style={styles.textButton}>Cancelar</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
  textButton: {
    alignSelf: "center",
    color: "#fff",
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
