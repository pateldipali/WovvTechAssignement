import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const Button = ({ title, disable, onPress }) => {
    return (
        <View style={{ opacity: disable ? 0.5 : 1, width: '100%', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPress} disabled={disable} style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0288D1',
        width: '80%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    title: {
        fontSize: 18,
        color: 'white'
    }
})

export default Button