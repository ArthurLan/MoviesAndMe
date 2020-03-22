import React from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native'
import { getImageApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {
    render() {
        const film = this.props.navigation.getParam('film')
        return (
            <View style={styles.main_container}>
                <ImageBackground
                    style={styles.img_container}
                    source={{ uri: getImageApi(film.poster_path) }}
                    imageStyle={{ opacity: 0.3 }}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title} </Text>
                    </View>
                    <ScrollView style={styles.content_container}>
                        <View style={styles.description_container}>
                            <Text style={styles.description_text}>{film.overview}</Text>
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.vote_text}>{film.vote_average}</Text>
                            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                        </View>
                    </ScrollView>
                </ImageBackground>


            </View>


        )

    }
}

const styles = StyleSheet.create({
    main_container: {
        // flexDirection: 'row',
        flex: 1,
        // backgroundColor: "#0FFFFF",

    },
    img_container: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    content_container: {
        flex: 6,
        margin: 5,
    },
    header_container: {
        flex: 0.1,
        alignItems: 'center'
    },
    title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        // paddingRight: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#666666'
    },
    description_container: {
        flex: 7,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,        
        elevation: 12,
        margin: 10,
    },
    description_text: {
        fontSize: 20,
        color: '#000000',
        textAlign: 'justify',
        backgroundColor: 'rgba(256, 256, 256, 0.8)',
        padding: 10
    },
    date: {
        margin: 5,
        flex: 1
    },
    date_text: {
        fontSize: 12,
        textAlign: "right"
    }
})

export default FilmDetail