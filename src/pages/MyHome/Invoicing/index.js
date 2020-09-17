import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';

class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>企业开票</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect()(MyScreen)

