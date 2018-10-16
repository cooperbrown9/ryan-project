import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <View style={styles.container} >


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,200,100)'
  }
});

var mapStateToProps = state => {
  return {
    userID: state.user.id,
    username: state.user.username
  }
}

export default connect(mapStateToProps)(HomeScreen);
