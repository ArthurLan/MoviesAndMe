import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'
import Avatar from './Avatar'

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
                <View style={styles.avatar_container}>
                    <Avatar/>
                </View>
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
        // marginTop: 30,
        flex: 1
    },
    avatar_container: {
        alignItems: 'center'
    }
});

// export default Search
const mapStateToProps = (state) => {
    return {
            favoriteFilms: state.toggleFavorite.favoriteFilms

    }
}
export default connect(mapStateToProps)(Favorite)