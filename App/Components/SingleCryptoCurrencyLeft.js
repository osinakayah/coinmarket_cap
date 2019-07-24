import React, { Component } from 'react'
import { Col, Grid } from 'react-native-easy-grid'
import { Thumbnail } from 'native-base';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SingleCryptoCurrencyLeftStyle'
import { Fonts, Colors } from '../Themes/'

export default class SingleCryptoCurrencyLeft extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Grid>
          <Col size={1}>
            <Thumbnail square small source={{uri: 'https://cryptoclothing.cc/logos/bitcoin-btc-logo.png'}} />
          </Col>
          <Col size={1.5}>
            <Text style={[Fonts.style.normal, {color: Colors.accentColor}]}>Bitcoin</Text>
            <Text style={[Fonts.style.normal, {fontSize: 10, color: Colors.lightgrey}]}>$12,0002</Text>
          </Col>
        </Grid>
      </View>
    )
  }
}
