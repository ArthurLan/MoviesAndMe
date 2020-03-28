import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorite from '../Components/Favorite'
import Profile from '../Components/Profile'

import Test from '../Components/Test'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: 'Détail'
        }
    },
})

const FavoriteStackNavigator = createStackNavigator({
    Search: {
        screen: Favorite,
        navigationOptions: {
            title: 'Favoris'
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions: {
            title: 'Détail'
        }
    },
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search:{
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_search.png')}
                    style={styles.icon}/>
                )
            }
        }
    },
    Favorite: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_favorite.png')}
                    style={styles.icon}/>
                )
            }
        } 
    },
    Profile: {
        screen: Profile,
        navigationOptions:  {
            tabBarIcon: () => {
                return (
                    <Image
                    source={require('../Images/ic_profile.png')}
                    style={styles.icon}/>
                )
            }
        }  
    }}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'

    }
})

const styles = StyleSheet.create({
    icon: {
        width:30,
        height: 30
    }

})

export default createAppContainer(MoviesTabNavigator)