import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SearchBarStyle'
import { Input, Item, Icon } from 'native-base'
import { Colors, Metrics } from '../Themes'

export default class SearchBar extends Component {
  // Prop type warnings
  static propTypes = {
    someProperty: PropTypes.object,
    someSetting: PropTypes.bool.isRequired,
  }

  // Defaults for props
  static defaultProps = {
    someSetting: false
  }

  render () {
    return (
      <View style={[styles.container ]}>
        <Item style={{borderColor: 'transparent'}}>
          <Icon name='md-search' style={{color: Colors.darkgrey, paddingLeft: Metrics.marginHorizontal}} />
          <Input
            underline={false}
            bordered={false}
            placeholder={'Search'}
            placeholderTextColor = {'rgba(255, 255, 255, 0.398)'}
            style={styles.inputStyle} />
        </Item>
      </View>
    )
  }
}
