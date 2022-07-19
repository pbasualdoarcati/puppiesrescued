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
      style={styles.container}
      renderItem={(data) => (
        <TouchableOpacity
          style={styles.InputResult}
          key={data.item.id}
          onPress={() => onHandlerModal(data.item.id)}
          disabled={data.item.rescued === true ? true : false}
        >
          <View>
            <Text style={styles.textResult}>Dirección: {data.item.value} </Text>
            <Text style={styles.textResult}>Fecha: {data.item.date}</Text>
            {data.item.rescued === true ? (
              <Text style={styles.textRescued}> ¡Devuelto!</Text>
            ) : (
              <Text style={styles.textNotReturned}>
                {" "}
                ¡Todavia sin su dueño!
              </Text>
            )}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
  },
  InputResult: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderColor: "#000000",
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
    backgroundColor: "#981113",
    textAlign: "center",
    color: "#fff",
  },
  textNotReturned: {
    fontSize: 25,
    backgroundColor: "#0F1567",
    textAlign: "center",
    color: "#fff",
  },
});
