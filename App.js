/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppNavigation from './src/AppNavigation/AppNavigation'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'




type Props = {};
export default class App extends Component<Props> {
  // componentWillMount() {
  //   console.disableYellowBox = true;
  // }
  render() {
    return (
      <Provider store={Store}>
        <AppNavigation />
      </Provider>
    );
  }
}

