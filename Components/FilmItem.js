import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageApi } from '../API/TMDBApi'

class FilmItem extends React.Component {

    _displayFavoriteImg() {
        if (this.props.isFilmFavorite) {
            var sourceImage = require('../Images/ic_favorite.png')
            return (
                <Image
                source={sourceImage}
                style={styles.favorite_image}
                />
            )
        }
        return(<View></View>)
    }

    render() {
        const { film, displayDetailForFilm, isFilmFavorite } = this.props
        return (
            <TouchableOpacity
            onPress={() => displayDetailForFilm(film)}
            style={styles.main_container}>
                <Image style={styles.img_container} source={{ uri: getImageApi(film.poster_path) }} />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        {this._displayFavoriteImg()}
                        <Text style={styles.title_text}>{film.title} </Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        flex: 1,
        margin: 5,
        backgroundColor: "#0FFFFF"
    },
    img_container: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'grey',
        flex: 1
    },
    content_container: {
        flex: 2,
        margin: 5
    },
    header_container: {
        flexDirection: 'row',
        flex: 4
    },
    title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#666666'
    },
    description_container: {
        margin: 5,
        flex: 7
    },
    description_text: {
        fontSize: 14,
        fontStyle: "italic",
        color: '#666666'
    },
    date: {
        margin: 5,
        flex: 1
    },
    date_text: {
        fontSize: 12,
        textAlign: "right"
    },
    favorite_image: {
        width: 20,
        height: 20,
        marginRight: 5
    }
})

export default FilmItem