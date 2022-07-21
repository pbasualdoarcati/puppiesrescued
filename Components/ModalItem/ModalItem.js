///Modules and packages
import React from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

//Components
import {
  ModalContainerView,
  ModalView,
  ModalViewMessage,
  ModalViewButton,
  ModalViewTouchable,
  ModalTitle,
  ModalTextButton,
  ModalTextItem,
} from "./Style";

const ModalItem = (props) => {
  const {
    modalVisible,
    itemSelected,
    onHandlerCancel,
    onHandlerDelete,
    onHandlerRescued,
  } = props;

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
        <ModalContainerView>
          <ModalView>
            <View>
              <ModalTitle>Mascota rescatada</ModalTitle>
            </View>
            <ModalViewMessage>
              <Text>¿Que desea hacer con la publicación?</Text>
            </ModalViewMessage>
            <ModalViewMessage>
              <ModalTextItem>{itemSelected.value}</ModalTextItem>
            </ModalViewMessage>
            <ModalViewButton>
              <TouchableWithoutFeedback onPress={onHandlerDelete}>
                <ModalViewTouchable>
                  <ModalTextButton>Eliminar</ModalTextButton>
                </ModalViewTouchable>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={onHandlerRescued}>
                <ModalViewTouchable>
                  <ModalTextButton>Devuelto</ModalTextButton>
                </ModalViewTouchable>
              </TouchableWithoutFeedback>
            </ModalViewButton>
            <View>
              <TouchableWithoutFeedback onPress={onHandlerCancel}>
                <ModalViewTouchable>
                  <ModalTextButton>Cancelar</ModalTextButton>
                </ModalViewTouchable>
              </TouchableWithoutFeedback>
            </View>
          </ModalView>
        </ModalContainerView>
      </Modal>
    </View>
  );
};

export default ModalItem;
