import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default CustomButton =(props) =>{
    
        return(
            <View style = {styles.section}>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text} >{props.text}</Text>
            </TouchableOpacity>

            </View>
        );
}    

const styles = StyleSheet.create({
    section:{
        padding:wp("2%"),
        position:"absolute",
        bottom:0,
    },
    container:{
        width:wp("90%"),
        backgroundColor: "#51A222",
        borderRadius: 30,
        paddingVertical:10,
    },
    text:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
})