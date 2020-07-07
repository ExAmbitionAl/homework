/**
 * Author: Aleksandar Polic
 * Date: 06.07.2020.
 *
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderText from "./src/components/HeaderText";
import SubheaderText from "./src/components/SubheaderText";
import CustomButton from "./src/components/Button";
import CustomCheckbox from "./src/containers/CustomCheckbox";
import Header from "./src/containers/Header";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const App: () => React$Node = () => {
  return (
    <>
      {/* Header is mockup component used to represent pagination and navigation components */}
      <Header/>
      <View style={styles.main}>
        <HeaderText text = "Lass uns das Coaching auf dich und deine Gesundheit abstimmen."/>
        <SubheaderText text = "Welche Situation trifft auf dich zu?"/>
        <CustomCheckbox text = "Ich leide an Bluthochdruck"/>
        <CustomCheckbox text = "Ich leide an Diabetes Typ 2"/>
        <CustomCheckbox text = "Ich habe Schlafprobleme"/>
        <CustomCheckbox text = "Ich mochte meine personlichen Gesundheisrisiken kennenlernen"/>
        <CustomCheckbox text = "Ich bin gesund und mochte es auch bleiben"/>
        <CustomButton text = "Weiter"/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main:{
    height:hp("90%"),
    alignItems:"center"
  }
})

export default App;
