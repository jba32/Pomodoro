import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from './Timer.js';
import PauseButton from './PauseButton.js';
import ResetButton from './ResetButton.js';
import ToggleBreakButton from './ToggleBreakButton.js';
import {vibrate} from './utils'

export default class App extends React.Component {
  state = {
    isBreak: false,
    paused: true,
    breakTimer: 300,
    workTimer: 1500,
    count: 1500,
  }
  
  dec = () => {
    if (this.state.count > 0 && !this.state.paused) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    } else if (this.state.count === 0) {
      vibrate();
      this.toggleBreak();
    }
  }

  reset = () => {
     this.setState({
       count: this.state.isBreak ? this.state.breakTimer : this.state.workTimer,
       paused: true,
     })
  }  

  pause = () => this.setState(prevState => ({
    paused: !prevState.paused,
  }))

  toggleBreak = () => this.setState(prevState => ({
    isBreak: !prevState.isBreak,
    count: !prevState.isBreak ? this.state.breakTimer : this.state.workTimer,
  }))

  render() {
    return (
      <View style={styles.container}>
        <Timer dec={this.dec} toggleBreak={this.toggleBreak} paused={this.state.paused} count={this.state.count}/>
        <PauseButton paused={this.state.paused} pause={this.pause} />
        <ResetButton reset={this.reset} />
        <ToggleBreakButton isBreak={this.state.isBreak} toggleBreak={this.toggleBreak} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 180,
  },
});
