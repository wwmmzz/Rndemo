import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';

class MyScreen extends Component {
  componentDidMount(){
    console.log('data',this.props.data)
    console.log(this.props.route.params)
  }

  render() {
    const mdata = this.props.data.msg.find(item=>item.title == this.props.route.params.params)
    console.log( 'mdata',mdata)
    return (
      <SafeAreaView>
        <View>
    <Text>{mdata.article}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(({data})=>({
  data: data.msg
}),)(MyScreen)
