import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Body, CardItem, Left } from 'native-base'
import { SvgUri } from 'react-native-svg';
import Button from './Button'
import { Actions } from 'react-native-router-flux';

const CardItems = (props) => {
    let { item } = props
    return (
        <Card style={styles.container}>
            <CardItem >
                <Body>
                    <Text style={styles.title}>{item.name}</Text>
                </Body>
            </CardItem>
            <CardItem style={styles.subContainer}>
                <Left style={styles.flagContainer}>
                    <SvgUri
                        width="120"
                        height="80"
                        uri={item.flag}
                    />
                </Left>
                <Body style={styles.detailsContainer}>
                    <Text style={styles.text}>Capital - {item.capital}</Text>
                    <Text style={styles.text}>Population - {item.population}</Text>
                    <Text style={styles.text}>LatLong - {item.latlng[0] + ',' + item.latlng[1]}</Text>
                </Body>
            </CardItem>
            <CardItem >
                <Body>
                    <Button onPress={() => Actions.CapitalWeatherScreen({ data: item })} title={'Capital Weather Info'} />
                </Body>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 5,
        marginHorizontal: 8,
        borderRadius: 5,
        elevation: 2,
        padding: 5,
        // borderWidth: 0.5
    },
    subContainer: {
        flexDirection: 'row',
        margin: 5,
        marginVertical: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    flagContainer: {
        width: '50%'
    },
    detailsContainer: {
        width: '50%',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default CardItems