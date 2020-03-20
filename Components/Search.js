import React from 'react'
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="Titre du film" style={styles.textinput} />
                <Button title="Rechercher" onPress={() => { }} style={styles.button} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 30,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        borderColor: '#000000',
        borderWidth: 0.5,
        paddingLeft: 5
    },
    button: {
        height: 50
    }
});

export default Search