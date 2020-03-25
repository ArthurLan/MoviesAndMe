// Components/Test.js

import React from 'react'
import { StyleSheet, View, Platform, Animated } from 'react-native'
import HelloWorld from './HelloWorld'

class Test extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.spring(
      this.state.topPosition,
      {
        toValue: 100,
        speed: 2,
        bounciness:15
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View style={[styles.subview_container, {top: this.state.topPosition}]}>
            <HelloWorld />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    //   Specific development
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    ...Platform.select({
        ios: {
            width:100,
            height:50
        },
        android: {
            width:60,
            height:60
        }
    })
  }
})

export default Test