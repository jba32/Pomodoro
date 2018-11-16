import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Timer extends React.Component {
   componentDidMount() {
     this.interval = setInterval(this.props.dec, 1000)
   }

   componentWillUnmount() {
     clearInterval(this.interval)
   }

  render() {
    let seconds = this.props.count % 60,
        minutes = Math.floor(this.props.count / 60)
        seconds = seconds <= 9 ? '0' + seconds : seconds
        minutes = minutes <= 9 ? '0' + minutes : minutes

    return (
      <View style={styles.container}>
        <Text style={styles.timer}> {minutes + ':' + seconds} </Text>
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
  },
  timer: {
    fontSize: 72,
  }
});
