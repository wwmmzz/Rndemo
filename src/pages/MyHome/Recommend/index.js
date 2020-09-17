import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, List, Icon } from '@uiw/react-native';
// import data from '../../../models/data';

class MyRecommend extends Component {
    constructor(arg){
        super(arg)

        this.state = {
            data:''
        }
    }
    msg = {
        data:'abc'
    }
    async componentDidMount(){
        console.log('123')

        let res = await fetch('http://192.168.56.1:3721/api/recommend', {method: 'GET'});
        console.log('res:', res)
        let data = await res.json()
        console.log('data:', data)
        this.msg.data = JSON.stringify(data.msg)
        // console.log('setdata',this.props.setData(data))
        this.props.getdata(data.msg)
        console.log('state',this.msg.data)
        console.log('props', this.props.rdata)

        this.setState({
            data:data.msg
        })
    }
  render() {
    return (
      <SafeAreaView>
        <View>
        <List
            data={this.props.rdata}
            renderItem={({ item, index }) => {
              return (
                <List.Item
                  key={index}
                  extra={<Icon name="right" fill="#abb0b5" size={14} />}
                  size="large"
                  paddingLeft={15}
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

const mapDispatchToProps = dispatch => ({
  getdata: dispatch.data.getdata,
  add: dispatch.data.add
})

export default connect(
  ({ data}) => ({
    // loading: loading.effects.users,
    // token: global.token,
    // formData: users.formData,
    rdata: data.msg,
  }),({data})=>({
    getdata: data.getdata,
  })
)(MyRecommend);


