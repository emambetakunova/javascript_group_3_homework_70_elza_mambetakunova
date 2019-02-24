import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = value => {
    this.setState({placeName: value})
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            value={this.state.placeName}
            style={{width: 300, borderColor: 'black', borderWidth: 1}}
            onClick={this.placeNameChangeHandler}
        />
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
});
