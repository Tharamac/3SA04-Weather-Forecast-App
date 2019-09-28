import Weather from "./Weather";
import React, { Component } from "react";
import NavigateBtn from "./NavigateBtn"
//  const navigation = this.props.navigation

export default class WeatherScreen extends React.Component{
    
    static navigationOptions = {
        title: 'Weather',
        headerRight: <NavigateBtn/>,
      };

    render(){
        const zipCode = this.props.navigation.getParam('zipCode')
        console.log(zipCode)
        return (<Weather zipCode={zipCode}/>)
    };
}

