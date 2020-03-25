// Components/Test.js

import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import HelloWorld from './HelloWorld'

class Test extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.subview_container}>
            <HelloWorld />
        </View>
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