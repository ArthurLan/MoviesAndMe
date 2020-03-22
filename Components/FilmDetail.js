import React from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView, ActivityIndicator } from 'react-native'
import { getImageApi } from '../API/TMDBApi'
import { getFilmDetailApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            _isLoading: true
        }
    }

    componentDidMount() {
        getFilmDetailApi(this.props.navigation.getParam('film').id).then(data => {
            this.setState({
                film: data,
                _isLoading: false
            })
        })
    }

    _displayLoading() {
        if (this.state._isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    <Text style={{ backgroundColor: 'white' }}>On regarde dans nos DVD !</Text>
                </View>
            )
        }
    }

    _displayGenre(film) {
        var i = 0;
        var genres = ''
        if (film.genres.length) {
            genres = film.genres[0].name
            while (++i < film.genres.length) {
                genres = genres + ' / ' + film.genres[i].name
            }
        }
        return (genres)
    }

    _displayCompany(film) {
        var i = 0;
        var companies = ''
        if (film.production_companies.length) {
            companies = film.production_companies[0].name
            while (++i < film.production_companies.length) {
                companies = companies + ' / ' + film.production_companies[i].name
            }
        }
        return (companies)
    }

    _displayDetail() {
        if (this.state.film != undefined) {
            const film = this.state.film;
            console.log('done')
            return (
                <ScrollView style={styles.content_container}>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{film.overview}</Text>
                        <Text style={styles.info_text}>Sorti le : {moment(film.release_date).format('DD/MM/YY')}</Text>
                        <Text style={styles.info_text}>Note : {film.vote_average}/10</Text>
                        <Text style={styles.info_text}>Nombre de votes : {film.vote_count}</Text>
                        <Text style={styles.info_text}>Budget : {numeral(film.budget).format('0,0$')}</Text>
                        <Text style={styles.info_text}>Genre : {this._displayGenre(film)}</Text>
                        {/* fonction map beaucoup plus propre :
                        film.genres.map(function(genre){
                        return genre.name;
                        }).join(" / ")} */}
                        <Text style={styles.info_text}>Companie(s) : {this._displayCompany(film)}</Text>
                    </View>
                </ScrollView>
            )
        }
    }

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
                    {this._displayDetail()}
                    {this._displayLoading()}
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
        marginTop: 0
    },
    header_container: {
        flex: 0.1,
        alignItems: 'center'
    },
    title_text: {
        fontSize: 30,
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
        // marginTop: 50,
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
    info_text: {
        fontSize: 15,
        color: '#000000',
        backgroundColor: 'rgba(256, 256, 256, 0.8)',
    },
    date: {
        margin: 5,
        flex: 1
    },
    date_text: {
        fontSize: 12,
        textAlign: "right"
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FilmDetail