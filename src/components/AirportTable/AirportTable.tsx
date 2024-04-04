import React, {useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'

import { AirportTableItem } from './AirportTableItem'
import { Image, Text, TouchableOpacity} from 'react-native'
import { AirportPreview, Plus, Geolocation, } from '../../../assets/img'

import { test } from '../../test/testData'

export const AirportTable = ({navigation, test}: {navigation: any, test: any}) => {
    const [airs, setAirs] = useState();
    const getApiData = async () => {
       
        const response = await fetch(
          "http://158.160.8.115/airport_info",
          {method: "GET",
            headers: { "Accept": "application/json" }
          }
        ).then((response) => response.json());
      
        setAirs(response);
      };
    useEffect(() => {
        getApiData();
    }, [])

console.log(airs)
  return (
  <View style={styles.wrapperR}>
    {test?.map((airport) => {
        return   (<TouchableOpacity onPress={() =>  navigation.navigate('Airport', {
            itemId: airport.objectID,
            otherParam: 'anything you want here',
          })}  style={styles.wrapper}>
        <Image source={AirportPreview} style={styles.img}/>
        <View style={styles.rowAirport}>
            <Text style={styles.text}>{airport.name}</Text>
            <Image source={Plus} style={styles.plus}/>
        </View>
        <View style={styles.rowLocation}>
        <Image source={Geolocation} style={styles.location}/>
            <Text style={styles.textLocation}>{airport.country}, {airport.city}</Text>
           
        </View>
    </TouchableOpacity>)
    })}
   
  </View>
  )
}

const styles = StyleSheet.create({
    wrapperR: {
        marginVertical: 8,
        marginHorizontal: 16,
        rowGap: 12
    },
    wrapper: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        borderEndEndRadius: 12,
        borderEndStartRadius: 12
    },
   img: {
    width: '100%',
    height: 78,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8

   },
   rowAirport: {
    paddingHorizontal: 12,
    marginTop: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row'
   },
   plus: {
    width: 12,
    height: 12
   }, 
   text: {
    width: 290,
    fontSize: 14,
    fontWeight: '500'
   },
   location: {
    width: 8,
    height: 10
   },
   textLocation: {
    color: '#3E5DFF'
   },
   rowLocation: {
    paddingHorizontal: 12,
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    columnGap: 6,
    
    flexDirection: 'row',
    marginBottom: 10
   }
})
