import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';

class MyScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>新增一</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect()(MyScreen)
