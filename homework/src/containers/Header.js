import React from 'react';
import {Image, View,TouchableOpacity, StyleSheet} from 'react-native';
import PageBar from "../components/PageBar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Header extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image style = {styles.image} 
                           source = {require('../assets/arrow.png')}/>
                </TouchableOpacity>
                <PageBar/>
            </View>
        );
    };


}  

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    image:{
        width:wp("5%"),
        height:wp("5%"),
    },
    button:{
        width:wp("5%"),
        height:wp("5%"),
        marginTop:hp("3%"),
        marginRight:wp("8%"),
        marginLeft:wp("3%"),
    }
})