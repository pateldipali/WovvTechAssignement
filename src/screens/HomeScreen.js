import React, { useState } from 'react'
import { View, TextInput, ActivityIndicator, StyleSheet } from 'react-native'
import Button from '../components/Button'
import { Toast, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import Header from '../components/Header'

const HomeScreen = () => {
    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState('')
    function _submit() {
        setLoading(true)
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((res) => res.json())
            .then((result) => {
                setLoading(false)
                if (result.length > 0) {
                    console.log('result', result)
                    Actions.WeatherScreen({ data: result })

                } else {
                    Toast.show({ text: 'No Data Found' })
                }
            })
            .catch(error => console.log('error', error))
    }
    return (
        <View style={styles.container}>
            <Header title="Home Screen" />
            {loading ?
                <View style={styles.subContainer}>
                    <ActivityIndicator color={'#0288D1'} size={'large'} />
                </View> :
                <View style={styles.subContainer}>
                    <TextInput onChangeText={(text) => setCountry(text)} placeholder="Enter country name" style={styles.textInput} />
                    <Text style={styles.note}>Enter minimum 3 Character </Text>
                    <Button onPress={() => _submit()} disable={country.length > 2 ? false : true} title={"Submit"} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textInput: {
        width: '80%',
        margin: 2,
        borderBottomWidth: 0.5
    },
    note: {
        width: '80%',
        textAlign: 'left',
        margin: 5,
        color: 'grey',
        fontSize: 14
    }
})


export default HomeScreen