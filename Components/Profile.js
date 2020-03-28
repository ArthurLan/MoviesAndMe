import React from 'react'
import { StyleSheet, Animated, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0)
    }
  }

  componentDidMount() {
    console.log('TEST')
    Animated.spring(
      this.state.topPosition,
      {
        toValue: -80,
        speed: 2,
        bounciness:15
      }
    ).start()
  }

  componentDidUpdate() {
    Animated.spring(
      this.state.topPosition,
      {
        toValue: -20,
        speed: 2,
        bounciness:15
      }
    ).start() 
  }

  _bounce = () => {
    const newpos = new Animated.Value(0)
    this.setState({
      topPosition: newpos
    })
  }

  render() {
    return (
      <Animated.View style={[styles.main_container, { top: this.state.topPosition }]}>
        <TouchableOpacity
        onPress={this._bounce}>
        <Image style={styles.avatar} source={this.props.avatar} />
      </TouchableOpacity>
        <Text>Getting Avatar pic from Redux</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 80,
    borderColor: '#9B9B9B',
    borderWidth: 2
  }
})

// export default Profile
const mapStateToProps = (state) => {
  return {
      avatar: state.setAvatar.avatar

  }
}
export default connect(mapStateToProps)(Profile);