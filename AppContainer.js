import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ZipCodeScreen from "./components/ZipCodeScreen";
import WeatherScreen from "./components/WeatherScreen";

const AppContainer = createAppContainer(RootStack);

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen,
}, {
  initialRouteName: 'ZipCode',
})

export default AppContainer;