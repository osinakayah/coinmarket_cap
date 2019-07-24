import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './Styles/CenterItemStyle'

export default class CenterItem extends Component {
  // Prop type warnings
  static propTypes = {
    children: PropTypes.node.isRequired
  }


  render () {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}
