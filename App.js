/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image, 
  Animated,
  Dimensions, 
  TouchableWithoutFeedback
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};



class Photo extends Component {


  state = {
    fadeAnima: new Animated.Value(1),
    opacityTracker: 1, 
    accumulatedRound: 0
    }


  fade = () => {
    Animated.timing(this.state.fadeAnima, {toValue: 0, duration: 1000}).start();
  }

  stopFade = () => {
    Animated.timing(this.state.fadeAnima, {toValue: 0, duration: 1000}).stop(
      this.setState(() => {opacityTracker: this.state.fadeAnima})
      ); 
  }

  render(){
    let { fadeAnima } = this.state;

   return (
      <View style={styles.container}>
          <TouchableWithoutFeedback 
            style={{width: 300, height: 300}} 
            onPressIn={this.fade} 
            onPressOut={this.stopFade}>
               <Animated.View style={{ 
                  flex: 1, 
                  height: 300,
                  width: 300, 
                  opacity: fadeAnima, 
                  backgroundColor: 'purple',
                  justifyContent: 'center', 
                  alignItems: 'center'}}>
                   <Animated.Text>{fadeAnima}</Animated.Text>
               </Animated.View>
           </TouchableWithoutFeedback>
      </View>
    );
  }
}



export default class App extends Component<Props> {


  render() {
    return (
      <View style={styles.container}>
        <Photo />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  bigImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
