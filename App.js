//Modules and packages
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

//Components
import Colors from "./Constants/Colors";
import ListContainer from "./Components/ListContainer/ListContainer";
import Header from "./Components/Header/Header";
import StartPage from "./Pages/StartPage";

const App = () => {
  const [start, setStart] = useState(true);
  const startPage = () => {
    start ? setStart(false) : setStart(true);
  };
  return (
    <TouchableWithoutFeedback onPress={startPage}>
      <View style={styles.container}>
        {start === true ? (
          <StartPage />
        ) : (
          <>
            <Header />
            <ListContainer />
          </>
        )}
        <StatusBar backgroundColor="#fff" animated={true} hidden={true} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
