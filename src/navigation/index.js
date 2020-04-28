import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import HomeScreen from '../screens/HomeScreen'
import WeatherScreen from '../screens/WeatherScreen'
import CapitalWeatherScreen from '../screens/CapitalWeatherScreen'
import { Root } from 'native-base'

const App = () => (
    <Root>
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="HomeScreen" component={HomeScreen} />
                <Scene key="WeatherScreen" component={WeatherScreen} />
                <Scene key="CapitalWeatherScreen" component={CapitalWeatherScreen} />
            </Scene>
        </Router>
    </Root>
);

export default App;