import Weather from "./Weather";
import React, { Component } from "react";

export default class WeatherScreen extends React.Component{
    static navigationOptions = {
        title: 'Weather',
      };

    render(){
        return(
            <Weather zipCode="40000"/>
        )
    };
}