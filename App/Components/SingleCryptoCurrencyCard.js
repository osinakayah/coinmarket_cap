import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native'
import styles from './Styles/SingleCryptoCurrencyCardStyle'
import { Card, CardItem, Body, Text, Left, Thumbnail } from 'native-base'
import { Fonts } from '../Themes'
import { Col, Row, Grid } from 'react-native-easy-grid'
import SingleCryptoCurrencyLeft from './SingleCryptoCurrencyLeft'
import SingleCryptoCurrencyRight from './SingleCryptoCurrencyRight'

export default class SingleCryptoCurrencyCard extends Component {
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
          <Col>
            <SingleCryptoCurrencyLeft />
          </Col>
          <Col></Col>
          <Col>
            <SingleCryptoCurrencyRight />
          </Col>
        </Grid>
      </View>
    )
  }
}
