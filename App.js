//Modules and packages
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

//Components
import ListContainer from './Components/ListContainer/ListContainer';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <ListContainer />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06836E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
