import React from 'react'
import { View, Text } from 'react-native'
import HomeContainer from './homeContainer.js'

const Home = (props) => {
    return (
        <View>
         <HomeContainer  {...props} />
        </View>
    )
}

export default Home
