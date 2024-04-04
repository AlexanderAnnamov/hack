import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import {Account} from '../../assets/img/'

export const HeaderAirports = () => {
  return (
    <View style={styles.wrapper}>
        <View></View>
        <Text style={styles.headerText}>Индия</Text>
        <Image style={styles.headerButton} source={Account}/>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 42,
        marginHorizontal: 16,
    },
    headerText: {
        color: '#333333',
        fontSize: 16,
        fontWeight: '600'
    },
    headerButton: {
        width: 15,
        height: 18
    }


})
