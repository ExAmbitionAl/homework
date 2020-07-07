import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default  HeaderText = (props) => {
    return(
        <View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}    

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        textAlign:"center",
        padding:wp("2%"),
        fontSize:hp("4%"),
        fontWeight:"bold",
        color:"#51A222",
    },

})