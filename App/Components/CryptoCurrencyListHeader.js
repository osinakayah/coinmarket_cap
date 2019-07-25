import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CryptoCurrencyListHeaderStyle'

import {Colors, Fonts} from '../Themes'
import { Col, Grid, Row } from 'react-native-easy-grid'


const CryptoCurrencyListHeader = () => (
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

export default CryptoCurrencyListHeader
