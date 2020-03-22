import React from 'react'
import { View, Text, Button, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsApiText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            _films: [],
            _isLoading: false
        }
        this.searchedText = "",
            this.page = 0,
            this.totalPages = 0
    }
    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({ _isLoading: true })
            getFilmsApiText(this.searchedText, this.page + 1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    _films: [...this.state._films, ...data.results],
                    _isLoading: false
                })
            })
            // console.log(JSON.stringify(this.state._films))
        }

    }

    _displayLoading() {
        if (this.state._isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    <Text style={{ backgroundColor: 'white'}}>On regarde dans nos DVD !</Text>
                </View>
            )
        }
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            _films: []
        }, () => {
            this._loadFilms()
        })
    }

    _displayDetailForFilm = (film) => {
        // console.log('Display film with id ' + idFilm)
        this.props.navigation.navigate('FilmDetail', { film: film})
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} placeholder="Titre du film" style={styles.textinput} />
                <Button title="Rechercher" onPress={() => this._searchFilms()} style={styles.button} />
                <FlatList
                    data={this.state._films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms()
                        }
                    }}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 30,
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
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