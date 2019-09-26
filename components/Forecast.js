import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";

export default class Forecast extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.property}>{this.props.main}</Text>
                <Text style={styles.property}>{this.props.description}</Text>
                <Text style={styles.property}>{this.props.temp}</Text>
                <Text style={styles.property}>°C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
      flex:1,
      flexDirection: 'column',
      
      alignItems: 'center',
    },
    backdrop:{
        width:'100%',
        height: '100%'
    },
    property:{
        fontSize:30,
    }

  });