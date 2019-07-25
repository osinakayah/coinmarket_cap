import React from 'react'
import { View } from 'react-native'
import styles from './Styles/SearchBarStyle'
import { Input, Item, Icon } from 'native-base'
import { Colors } from '../Themes'

const SearchBar = () => (
  <View style={styles.container}>
    <Item style={styles.itemStyle}>
      <Icon name='md-search' style={styles.searchIconStyle} />
      <Input
        underline={false}
        bordered={false}
        placeholder={'Search'}
        placeholderTextColor={Colors.placeHolder}
        style={styles.inputStyle} />
    </Item>
  </View>
)

export default SearchBar
