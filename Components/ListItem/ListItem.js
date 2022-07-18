///Modules and packages
import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ListItem(props) {
  const { itemList, onHandlerModal } = props;

  return (
    <FlatList
      data={itemList}
      renderItem={(data) => (
        <TouchableOpacity
          style={styles.InputResult}
          key={data.item.id}
          onPress={() => onHandlerModal(data.item.id)}
        >
          <View style={data.item.rescued === true && styles.viewRescued}>
            <Text style={styles.textResult}>Dirección: {data.item.value} </Text>
                  <Text style={styles.textResult}>Fecha: {data.item.date}</Text>
                  {data.item.rescued === true && (
                    <Text style={styles.textRescued}> Devuelto!!!</Text>
                  )}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  InputResult: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderColor: "black",
    borderWidth: 0.2,
    marginTop: 10,
    },
    viewRescued: {
        backgroundColor: "#0F1567",  
        
    },
  textResult: {
    width: 300,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#fff",
    },
    textRescued: {
        fontSize: 25,
        backgroundColor: "#000000",
        textAlign: "center",
        position: "absolute",
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
        color: "#fff",
        transform: [{ rotate: "-15deg" }],
  }
});
