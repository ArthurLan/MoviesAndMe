import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
            <TextInput placeholder="Titre du film" style={styles.textinput}/>
            <Button title="Rechercher" onPress={() => {}} style={styles.button}/>
            </View>
            // <View style={{ flex: 1, backgroundColor: 'yellow'}}>
            //     <View style={{ height: 50, width: 50, backgroundColor: 'green'}}></View>
            //     <View style={{ flex: 1, backgroundColor: 'blue'}}>
            //     <View>
            //         <Text style={{ fontSize: 40, color: 'white' }}>Mélodie c'est la plus jolie</Text>
            //     </View>
            //     </View>
            //     <View style={{ flex: 1, backgroundColor: 'red'}}></View>
            // </View>
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