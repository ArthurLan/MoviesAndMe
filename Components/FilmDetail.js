import React from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView, ActivityIndicator, Share, TouchableOpacity, Image, Platform } from 'react-native'
import { getImageApi, getFilmDetailApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'
import styles from './Styles/FilmDetailsStyles'
import FadeInOpacity from '../Animations/OpacityIn'
import EnlargeShrink from '../Animations/EnlargeShrink'

class FilmDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        if (params.film != undefined && Platform.OS === 'ios') {
            return {
                headerRight: () => <TouchableOpacity
                    style={styles.share_touchable_headerrightbutton}
                    onPress={() => params.shareFilm()}>
                    <Image
                        style={styles.share_image}
                        source={require('../Images/ic_share.png')} />
                </TouchableOpacity>
            }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            _isLoading: true
        }
        this._shareFilm = this._shareFilm.bind(this)
    }

    _updateNavigationParams() {
        this.props.navigation.setParams({
            shareFilm: this._shareFilm,
            film: this.state.film
        })
    }

    componentDidMount() {
        const favoriteFilmIndex = this.props.favoriteFilms.findIndex(item => item.id === this.props.navigation.getParam('film').id)
        if (favoriteFilmIndex !== -1) {
            this.setState({
                film: this.props.favoriteFilms[favoriteFilmIndex],
                _isLoading: false
            }, () => { this._updateNavigationParams() })
            return
        }

        this.setState({ isLoading: true })
        getFilmDetailApi(this.props.navigation.getParam('film').id).then(data => {
            this.setState({
                film: data,
                _isLoading: false
            }, () => { this._updateNavigationParams() })
        })
    }

    _shareFilm() {
        const { film } = this.state
        Share.share({ title: film.title, message: film.overview })
    }

    _displayFloatingActionButton() {
        const { film } = this.state
        if (film != undefined && Platform.OS === 'android') {
            return (
                <TouchableOpacity
                    style={styles.share_button}
                    onPress={() => this._shareFilm()}>
                    <Image
                        style={styles.share_image}
                        source={require('../Images/ic_share.png')} />
                </TouchableOpacity>
            )
        }
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
            return (
                <ScrollView> 
                    {/* style={styles.content_container} */}
                    <FadeInOpacity>
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
                    </FadeInOpacity>
                </ScrollView>
            )
        }
    }

    _toggleFavorite() {
        console.log('TOGGLE')
        const action = { type: 'TOGGLE_FAVORITE', value: this.state.film }
        this.props.dispatch(action)
    }

    _displayFavoriteImg(film) {
        var sourceImage = require('../Images/ic_non_favorite.png')
        var shouldEnlarge = false
        if (this.props.favoriteFilms.findIndex(item => item.id === film.id) !== -1) {
            sourceImage = require('../Images/ic_favorite.png')
            shouldEnlarge = true
        }
        return (
            <EnlargeShrink
                shouldEnlarge={shouldEnlarge}>
                <Image
                    source={sourceImage}
                    style={styles.favorite_image}
                />
            </EnlargeShrink>
        )
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
                        <TouchableOpacity style={styles.favorite_container} onPress={() => this._toggleFavorite()}>
                            {/* <Image source={ {uri: '../Images/ic_favorite.png'} }/> */}
                            {this._displayFavoriteImg(film)}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content_container}>
                        {this._displayDetail()}
                    </View>
                    {this._displayLoading()}
                    {this._displayFloatingActionButton()}
                </ImageBackground>
            </View>


        )

    }
}

const mapStateToProps = (state) => {
    return {
            favoriteFilms: state.toggleFavorite.favoriteFilms

    }
}
export default connect(mapStateToProps)(FilmDetail)