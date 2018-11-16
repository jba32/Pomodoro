import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class PauseButton extends React.Component {
  render() {
    let title = this.props.paused ? 'Start' : 'Pause'
    return (
      <View style={styles.button}>
        <Button title={title} onPress={this.props.pause} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 20,
  }
});
