import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Button, List, Icon } from '@uiw/react-native';

 class MyScreen extends Component {
  componentDidMount(){
    this.props.order()
    console.log('data',this.props.data)
  }
  render() {
    return (
      <SafeAreaView>
        <View>
        <List
            data={this.props.data.msg}
            renderItem={({ item, index }) => {
              return (
                <List.Item
                  key={index}
                  extra={<Icon name="right" fill="#abb0b5" size={14} />}
                  size="large"
                  paddingLeft={15}
                  onPress={()=>this.props.navigation.navigate('MyNew1',{params:item.title})|| null}
                  // onPress={()=>{console.log('点击')}}
                >
                  <View>
                    <Text>{item.title}</Text>
                    
                  </View>
                </List.Item>
              )
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default connect(({data})=>({
  data: data.msg
}),({data})=>({
 order:data.recommend 
}))(MyScreen)