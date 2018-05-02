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
  Button, 
  TouchableWithoutFeedback, 
  Art
} from 'react-native';
import Sound from 'react-native-sound';


const sound = new Sound('AudioTest.mp3', 
  null, 
  (error) => {
    if (error) {
        console.log("error");
        return;   
    }
});


type Props = {};




class Photo extends Component {

  state = {
    fadeAnima: new Animated.Value(1),
    color: "brown"
  }

  fade = () => {
    Animated.timing(this.state.fadeAnima, {toValue: 0, duration: 10000}).start();
    sound.play(); 
  }

  componentDidMount = () => {
    console.log("it mounted"); 
  }
  stopFade = () => {

    Animated.timing(this.state.fadeAnima, {toValue: 0, duration: 10000}).stop(
     // this.setState(() => {opacityTracker: this.state.fadeAnima}
        //)
      ); 
    sound.pause()
  }

  stopSound = () => {
    sound.stop(); 
  }



  render(){
    let { fadeAnima, color } = this.state;

   return (
      <View style={[styles.container, {backgroundColor: "green"}]}>
      
          <TouchableWithoutFeedback 
            style={{width: 300, height: 300}} 
            onPressIn={this.fade} 
            onPressOut={this.stopFade}
           >
              <Animated.Image 
                source={require('./assets/chaitrayfixed.jpg')} 
                resizeMode="cover"
                style={{ 
                  flex: 1, 
                  width: '100%', 
                  opacity: fadeAnima,
                  justifyContent: 'center', 
                  alignItems: 'center'}}>
              </Animated.Image>
           </TouchableWithoutFeedback>
       <Button 
         title="Sound Stop" 
         color={color} 
         onPress={this.stopSound} />
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
