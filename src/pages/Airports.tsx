import React, {useEffect, useState} from 'react'
import { View } from 'react-native'

import { HeaderAirports } from '../components/HeaderAirports'
import { SearchBar } from '../components/SearchBar'
import { AirportTable } from '../components/AirportTable/AirportTable'
import { test } from '../test/testData'

export const Airports = ({navigation}: {navigation: any}) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    const [searchData, setSearchData] = useState([])

    const handleSearch = (value) => {
        const result = test.filter(item => {
            return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        })
        console.log(result)
        setSearchData(result)
    }

    useEffect(() => {
        handleSearch(searchPhrase)
    }, [searchPhrase])
    
  return (
    <View>
        <HeaderAirports/>
        <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
        <AirportTable test={searchData} navigation={navigation}/>
    </View>
  )
}
