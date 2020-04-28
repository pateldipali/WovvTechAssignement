import React from 'react'
import { View, TextInput, FlatList, Text } from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'
const WeatherScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Header back title={"Weather Screen"} />
            <FlatList
                data={props.data}
                renderItem={({ item, index }) => <Card item={item} />}
            />
        </View>
    )
}

export default WeatherScreen