import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default  SubheaderText = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );

}    

const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        padding:wp("2%"),
        fontSize:hp("3%"),
        fontWeight:"bold",
        color:"#7D7D7D",
    },
})