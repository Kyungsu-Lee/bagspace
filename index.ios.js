/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Navigator } from 'react-native';

 import MyScene from './Activity/New_Loading';

 class Main extends Component {
   render()
   {
     return (
       <MyScene />
     )
   }
 }

AppRegistry.registerComponent('bagspace', () => Main);
