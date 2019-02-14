import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from './Timer.js';
import PauseButton from './PauseButton.js';
import ResetButton from './ResetButton.js';
import ToggleBreakButton from './ToggleBreakButton.js';
import {vibrate} from './utils'

export default class App extends React.Component {
  state = {
    onBreak: false,
    isPaused: true,
    breakTimer: 300,
    workTimer: 1500,
    count: 1500,
  }
  
  dec = () => {
    if (this.state.count > 0 && !this.state.isPaused) {
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
       count: this.state.onBreak ? this.state.breakTimer : this.state.workTimer,
       isPaused: true,
     })
  }  

  pause = () => this.setState(prevState => ({
    isPaused: !prevState.isPaused,
  }))

  toggleBreak = () => this.setState(prevState => ({
    onBreak: !prevState.onBreak,
    count: !prevState.onBreak ? this.state.breakTimer : this.state.workTimer,
  }))

  render() {
    return (
      <View style={styles.container}>
        <Timer dec={this.dec} toggleBreak={this.toggleBreak} paused={this.state.isPaused} count={this.state.count}/>
        <PauseButton paused={this.state.isPaused} pause={this.pause} />
        <ResetButton reset={this.reset} />
        <ToggleBreakButton isBreak={this.state.onBreak} toggleBreak={this.toggleBreak} />
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
