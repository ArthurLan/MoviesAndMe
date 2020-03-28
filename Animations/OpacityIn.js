import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInOpacity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeOpacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeOpacity,
            {
                toValue: 1,
                duration: 500,
            }
        ).start()
    }

    render() {
        return (
            <Animated.View                 // Special animatable View
            style={{
                ...this.props.style,
                opacity: this.state.fadeOpacity,         // Bind opacity to animated value
            }}
            >
            {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeInOpacity