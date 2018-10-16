/*
TODO
Yo so here's what to do on this page

Make login form, more of a create account page.
Make it have a username field.

When you enter a username, save it with AsyncStorage, look up how to use it, its pretty simple
Then, when you open the app the next time, it will get the username and bypass
this screen because you have already logged in, hypothetically

this is the only screen im doing this much of the work on btw


*/

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as UserActions from '../action-types/user-action-types';

const USERNAME_KEY = 'key/username';

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      username: ''
    }
  }

  componentDidMount() {
    // I made this function for you. It will check to see if a user is saved,
    // and if there isn't, it will stay on this screen
    // when it works, it will go to HomeScreen
    this.isLoggedIn();
  }

  isLoggedIn() {
    // if you dont understand this syntax, the (username) => {},
    // then do a tutorial on callback functions, those are crucial
    // to javascript as a whole
    AsyncStorage.getItem(USERNAME_KEY, (username) => {
      // if the username comes back as null, then there is no user,
      // otherwise, there is
      if(username == null) {
        this.setState({ isLoggedIn: false });
      } else {
        this.setState({ isLoggedIn: true, username: username }, () => {
          this.props.navigation.navigate('home');
        });
      }
    })
  }

  // make the login button fire this function when its clicked
  // its not totally complete, but look up "AsyncStorage react native" to understand how it works
  login() {
    AsyncStorage.setItem(USERNAME_KEY, this.state.username, () => {
      // so after it is set, do this ---> (navigate to home screen)
      this.props.dispatch({ type: UserActions.SET_USER, username: this.state.username });
    });
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
