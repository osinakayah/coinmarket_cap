import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles/SearchBarStyle'
import { Input, Item, Icon } from 'native-base'
import { Colors, Metrics } from '../Themes'

export default class SearchBar extends Component {

  render () {
    return (
      <View style={[styles.container ]}>
        <Item style={{borderColor: 'transparent'}}>
          <Icon name='md-search' style={{color: Colors.darkgrey, paddingLeft: Metrics.marginHorizontal}} />
          <Input
            underline={false}
            bordered={false}
            placeholder={'Search'}
            placeholderTextColor = {Colors.placeHolder}
            style={styles.inputStyle} />
        </Item>
      </View>
    )
  }
}
