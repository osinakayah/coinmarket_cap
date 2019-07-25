import React from 'react'
import { View } from 'react-native'
import styles from './Styles/CenterItemStyle'

const CenterItem = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
)

export default CenterItem;
