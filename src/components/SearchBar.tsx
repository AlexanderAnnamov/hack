import React, {FC} from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

interface ISearchBar {
    clicked: boolean,
    searchPhrase: string,
    setSearchPhrase: (str: string) => void,
    setClicked: (click: boolean) => void
}

export const SearchBar: FC<ISearchBar> = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          styles.searchBar__clicked
        
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="#999999"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Введите название аэропорта"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
      
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      
    </View>
  );
};


// styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",

  },

  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    // backgroundColor: "#d9dbda",

    width: '100%',
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 12,
    marginLeft: 10,
    width: "90%",
    color: '#999999'
  },
});