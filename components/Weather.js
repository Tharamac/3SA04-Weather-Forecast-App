import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated, ImageBackground } from "react-native";
import Forecast from "./Forecast";
export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forecast:{
                main: '-',
                description: '-',
                temp: 0
            }
        }
    }
    
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((respose) => respose.json())
        .then((json) => {
            this.setState(
                {
                    forecast:{
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                }
            );
        })
        .catch((error) => {
            console.warn(error);
        })
    }
    
    componentDidMount = () => this.fetchData()

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../16541.jpg')} style={styles.backdrop}>
                    <Text style={styles.zipcodetext}>Zip code is {this.props.zipCode}</Text>
                    <Forecast {...this.state.forecast}/>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        
        paddingTop:24,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backdrop:{
       
        width:'100%',
        height: '100%',
        // paddingTop:28,
        alignItems: 'center',
    },
    zipcodetext:{
        backgroundColor: '#555555',
        opacity: 0.75,  
        fontSize : 35,
        paddingTop: 28,
    }

  });