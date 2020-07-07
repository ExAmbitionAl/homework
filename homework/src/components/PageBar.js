import React from 'react';
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default PageBar = () => {

    return(
        <View style={styles.container}>
            <Text>Step 2/7</Text>
            <View style = {styles.bar} >
            <View style = {styles.progress} ></View>
            </View>
        </View>
    );
 

}  

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:hp("2%"),
    },
    bar:{
        width:wp("70%"),
        height:hp("1%"),
        backgroundColor:"#D0D0D0",
        borderRadius:10,
        margin:hp("1%"),
    },
    progress:{
        width:wp("21%"),
        height:hp("1%"),
        backgroundColor:"#51A222",
        borderRadius:10,
    }
})