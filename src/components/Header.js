import React from 'react'
import { Icon, Left, Header, Body, Right, Title } from 'native-base'
import { TouchableOpacity, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'
const AppHeader = ({ back, title }) => {
    return (
        <>
            <Header style={{ backgroundColor: '#0288D1' }}>
                {back && <Left>
                    <TouchableOpacity onPress={() => Actions.pop()} style={{ padding: 5 }}>
                        <Icon name='arrow-back' style={{ color: 'white' }} />
                    </TouchableOpacity>
                </Left>}
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right></Right>

            </Header>
            <StatusBar backgroundColor={'#0288D1'} barStyle="light-content" />
        </>
    )
}

export default AppHeader