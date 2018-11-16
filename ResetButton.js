import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class ResetButton extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Button title="Reset" onPress={this.props.reset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 20,
  }
});
