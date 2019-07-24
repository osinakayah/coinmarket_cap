import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CryptoCurrencyListHeaderStyle'

import {Colors, Fonts} from '../Themes'
import { Col, Grid, Row } from 'react-native-easy-grid'

export default class CryptoCurrencyListHeader extends Component {
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
          <Col size={0.5} />
          <Col size={3}>
            <Row>
              <Col size={3}><Text style={{fontFamily: Fonts.type.bold, color: Colors.accentColor, textAlign: 'left'}}>Symbol</Text></Col>
              <Col size={3} />
              <Col size={3}><Text style={[{fontFamily: Fonts.type.bold, textAlign: 'right', color: Colors.accentColor}]}>Price</Text></Col>
            </Row>
            <Row>
              <Col size={6}><Text style={{fontFamily: Fonts.type.bold, color: Colors.accentColor, textAlign: 'left'}}>Name</Text></Col>
              <Col size={3}><Text style={[{fontFamily: Fonts.type.bold, textAlign: 'right', color: Colors.accentColor}]}>% Change</Text></Col>
            </Row>
          </Col>
        </Grid>
      </View>
    )
  }
}
