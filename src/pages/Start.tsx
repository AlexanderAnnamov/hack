import React, { useEffect } from 'react'
import { View, StyleSheet, Dimensions, Image, Text} from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { StartImg } from '../../assets/img';

export const Start = ({navigation}: {navigation: any}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Airports')
        }, 1000)
        
    })
  return (
    <View style={styles.start}>
        <View>
            <Text style={styles.text}>Hello!</Text>
            <Image source={StartImg} style={styles.icon}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    start: {
        backgroundColor: '#3E5DFF',
        width: windowWidth,
        height: windowHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 220,
        height: 220
    }, 
    text: {
        fontWeight: '500',
        fontSize: 48,
        textAlign: 'center',
        color: 'white'
    }
})


