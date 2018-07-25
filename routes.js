import React from 'react'
import { createStackNavigator } from 'react-navigation'

// pages or screen
import HomeScreen from './src/screens/Home'
import DeatilScreen from './src/screens/Detail'

const routes = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DeatilScreen
    }
},{
    initialRouteName: 'Home'
})

export default routes