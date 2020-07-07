import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements'

export default class CustomCheckbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
        };
    }
    
    _onPress(){
        if(this.state.pressStatus == false){

            this.setState({pressStatus:true});
        }
        else 
            this.setState({pressStatus:false});
    }
    render(){
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={()=>this._onPress()}>

            <View style={ this.state.pressStatus ? styles.pressed : styles.section }>
                <View style={this.state.pressStatus ? styles.checkboxChecked : styles.checkbox}>
                <Icon name='check'type='font-awesome' color="#fff" size={wp("3.5%")} />
                </View>
                <Text style={this.state.pressStatus ? styles.textBolded : styles.text} >{this.props.text}</Text>
            </View>

            </TouchableOpacity>
        );
    };


}   
const styles = StyleSheet.create({
    section:{
        flexDirection:"row",
        width:wp("90%"),
        height:hp("7%"),
        justifyContent:"flex-start",
        alignItems:"center",
        borderColor:"black",
        borderRadius:2,
        elevation:1,
        shadowOpacity: 0.3,
        shadowRadius: 20,
        shadowOffset: {
        height: 0,
        width: 0
        },
    },
    checkbox:{
        width:wp("4%"),
        height:wp("4%"),
        marginRight:5,
        marginLeft:10,
        borderColor:"grey",
        borderWidth:1,
        borderRadius:10,
    },
    checkboxChecked:{
        width:wp("4%"),
        height:wp("4%"),
        marginRight:5,
        marginLeft:10,
        borderColor:"#51A222",
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"#51A222",
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        padding:hp("1%"),
    },
    pressed:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        width:wp("90%"),
        height:hp("7%"),
        paddingTop:hp("2.5%"),
        paddingBottom:hp("2.5%"),
        borderColor:"black",
        borderRadius:1.8,
        backgroundColor:"#efefef",
        elevation:1,
        fontWeight:"bold",
    },
    text:{
        width:"90%",
        fontWeight:"normal",
    },
    textBolded:{
        width:"90%",
        fontWeight:"bold",
    }
})