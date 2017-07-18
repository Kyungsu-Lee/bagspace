import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text,
  AppRegistry,
  Dimensions, Image, TouchableHighlight, Alert
} from 'react-native';


export default class MyScene extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      activate_message: false,
      activate_home: true,
    };
  }

  _onPressMessageButton = () => {
      this.setState(
        {
          activate_message: !this.state.activate_message,
          activate_home : false
        }
      );
    }


  render() {

var {height, width} = Dimensions.get('window');

//  var message = this.state.activate_message ? require('../img/message_unactive.png') : require(' ../img/message_unactive.png');
var message = this.state.activate_message ? require('../img/message_activate.png') : require('../img/message_unactive.png');
var home = this.state.activate_home ? require('../img/home_active.png') : require('../img/home_unactivate.png');
var body = this.state.activate_message ? require('../img/body_message.png') : require('../img/body_main.png');

  return (
    <View style={styles.main}>

    <View style={styles.title}>
    <Image
      style={styles.title_box}
    >
    </Image>
    <Image
      style={styles.title_box}
      source={require('../img/title.png')}
    >
    </Image>
    <Image
      style={styles.title_box}
    >
    </Image>
    </View>

      <View style={styles.content}>
        <Image
          style={styles.content_box}
          source={body}
          >
      </Image>
      </View>

      <View style={styles.icons}>
      <View style={styles.bottom_box_main}>

      <TouchableHighlight onPress={this._onPressMessageButton}>

        <Image
          style={styles.bottom_icon}
          source={message}
        />

      </TouchableHighlight>

      <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.bottom_icon}
        source={require('../img/tip_unactive.png')}
      >
      </Image>
      </TouchableHighlight>

      <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.bottom_icon}
        source={home}
      >
      </Image>
      </TouchableHighlight>

      <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.bottom_icon}
        source={require('../img/credit_unactive.png')}
      >
      </Image>
      </TouchableHighlight>

      <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.bottom_icon}
        source={require('../img/mypage_unactive.png')}
      >
      </Image>
      </TouchableHighlight>





      </View>

      </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

    title: {
      flex: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title_box: {
      flex: 1,
      resizeMode: 'contain',
    },
    content: {
        flex: 1093,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    content_box: {
      resizeMode: 'contain',
      flex: 1
    },
    icons: {
      flex: 130,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    bottom_box: {
      flex: 1,
      flexDirection : 'row',
      alignItems: 'stretch'
    },
    bottom_box_main: {
      flex: 10,
      flexDirection : 'row',
      alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    bottom_icon:{
      flex: 1,
      resizeMode: 'center',
    }
});

AppRegistry.registerComponent('MyScene', () => MyScene);
