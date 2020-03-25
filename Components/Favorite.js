import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorite extends React.Component {

    _displayDetailForFilm = (film) => {
        this.props.navigation.navigate('FilmDetail', { film: film })
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.favoriteFilms}
                    navigation={this.props.navigation}
                    favoriteList={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 30,
        flex: 1
    }
});

// export default Search
const mapStateToProps = (state) => {
    return {
        favoriteFilms: state.favoriteFilms
    }
}
export default connect(mapStateToProps)(Favorite)