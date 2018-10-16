import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {

  }

  goHome() {
    // this is how you navigate
    // navigation lives on this.props, and it has a function called navigate() that
    // takes the route of the screen u wanna go to. The route name is whatever you
    // call the screen in navigation/app-navigator
    this.props.navigation.navigate('home');
  }

  render() {
    return(
      <View style={styles.container} >
        <TouchableOpacity
          style={{height:200,width:200, backgroundColor: 'red'}}
          onPress={() => this.goHome()}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,100,200)'
  }
});

var mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(LoginScreen);
