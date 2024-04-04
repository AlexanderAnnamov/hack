import React, {FC} from 'react'

import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

import { AirportPreview, Plus, Geolocation, } from '../../../assets/img'

interface IAirportTableItem {
    airport?: any,

}

export const AirportTableItem: FC<IAirportTableItem> = ({airport}) => {
    const {name, country, city} = airport
  return (
   <View/>
  )
}

const styles = StyleSheet.create({
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
