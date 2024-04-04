import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { test } from '../test/testData';

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { PlusAir, Chevron, Frame, World, Wifi, Symbols, Maps } from '../../assets/img';

const windowWidth = Dimensions.get('window').width;


export const Airport = ({ route, navigation }: {route: any,navigation: any, }) => {
   
    const { itemId, otherParam } = route.params;
    const air = test.find(function(item) {
        return item.objectID === itemId;
      });
    console.log(air)
  return (
    <View>
         <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Airports')}> 
            <Image style={styles.headerButtonChevron} source={Chevron}/>
            </TouchableOpacity>
         
        <Text style={styles.headerText}>{air.name}</Text>
        <Image style={styles.headerButton} source={PlusAir}/>
    </View>
    <Image style={{width: windowWidth, height: 240}} source={Frame}/>
    <Text style={{padding: 16, fontSize: 16, fontWeight: '600',  textAlign: 'center'}}>{air.name}, {air.country}, {air.city}</Text>
    <View style={{marginBottom: 12,display: 'flex', flexDirection: 'row', alignItems: 'flex-start', columnGap: 8, marginHorizontal: 16}}>
    <Image style={{width: 20, height: 20}} source={Wifi}/>
    <View >
        <Text>WIFI_Guest_AIR</Text>
        <Text style={{fontSize: 10, fontWeight: '400', color: '#999999'}}>Открытая сеть, аутентификация по номеру телефона</Text>
    </View>
    </View>
    <View style={{marginBottom: 12,display: 'flex', flexDirection: 'row', alignItems: 'flex-start', columnGap: 8, marginHorizontal: 16}}>
    <Image style={{width: 20, height: 20}} source={Symbols}/>
    <View >
        <Text>Английский язык</Text>
        <Text style={{fontSize: 10, fontWeight: '400', color: '#999999'}}>В основном персонал говорит на этом языке</Text>
    </View>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', columnGap: 8, marginHorizontal: 16}}>
    <Image style={{width: 20, height: 20}} source={World}/>
    <View>
        <Text>MSK+2:30</Text>
        <Text style={{fontSize: 10, fontWeight: '400', color: '#999999'}}>Разница во времени с Москвой</Text>
    </View>
    </View>
    <Text style={{marginTop: 32,marginHorizontal: 16, fontSize: 14, fontWeight: 600}}>Карта аэропорта</Text>
    <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
    <Image source={Maps} style={{marginTop: 8,width: windowWidth - 32, height: 178}}/>
    </View>
    
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
    },
    headerButtonChevron: {
        width: 12,
        height: 20
    }


})
