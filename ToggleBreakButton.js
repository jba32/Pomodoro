import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class ToggleBreakButton extends React.Component {
  render() {
    let title = this.props.isBreak ? 'Back to Work!' : 'Take a Break!';
    return (
      <View style={styles.button}>
        <Button title={title} onPress={this.props.toggleBreak} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 100,
  }
});
