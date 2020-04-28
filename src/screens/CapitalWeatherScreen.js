import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Header from '../components/Header'
const CapitalWeatherScreen = (props) => {
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState('')

    useEffect(() => {
        fetch(`http://api.weatherstack.com/current?access_key=2adcd71611f448b7e30733de082edd2f&QUERY=${props.data.capital}`)
            .then((res) => res.json())
            .then((result) => {
                setLoading(false)
                console.log('capital result', result)
                setWeather(result)
            })
            .catch(error => {
                setLoading(false),
                    alert(error)
                // console.log('error', error)
            })
    }, [])
    return (


        <View style={{ flex: 1 }}>
            <Header back title={"Capital Weather"} />
            {loading ?
                <View style={styles.container}>
                    <ActivityIndicator color={'#0288D1'} size={'large'} />
                </View> :
                <View>
                    <Text style={styles.capital}>{weather?.location?.name}</Text>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text style={styles.details}>Tempreture - {weather?.current?.temperature}</Text>
                            <Text style={styles.details}>Wind speed - {weather?.current?.wind_speed}</Text>
                            <Text style={styles.details}>Precip - {weather?.current?.precip}</Text>

                        </View>
                        <FastImage source={{ uri: weather?.current?.weather_icons[0] }} style={styles.icon} />
                    </View>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 20
    },
    capital: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 20
    },
    icon: {
        height: 100,
        width: 120
    },
    details: {
        fontSize: 16
    }
})


export default CapitalWeatherScreen