import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";

export default class Forecast extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.property}>{this.props.location}</Text>
                <Text style={styles.property}>{this.props.main}</Text>
                <Text style={styles.property}>สถานะ : {this.props.description}</Text>
                <Text style={styles.property}>อุณหภูมิ : {this.props.temp} °C</Text>
                <Text style={styles.property}>ความชื้นสัมพัทธ์ : {this.props.humidity}%</Text>
                <Text style={styles.property}>อุณหภูมิสูงสุด : {this.props.temp_max} °C</Text>
                <Text style={styles.property}>อุณหภูมิต่ำสุด : {this.props.temp_min} °C</Text>
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