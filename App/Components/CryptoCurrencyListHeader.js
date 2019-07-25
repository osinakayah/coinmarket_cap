import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CryptoCurrencyListHeaderStyle'

import { Col, Grid, Row } from 'react-native-easy-grid'

const CryptoCurrencyListHeader = () => (
  <View style={styles.container}>
    <Grid>
      <Col size={0.5} />
      <Col size={3}>
        <Row>
          <Col size={3}><Text style={[styles.headerStyle, styles.leftSide]}>Symbol</Text></Col>
          <Col size={3} />
          <Col size={3}><Text style={[styles.headerStyle, styles.rightSide]}>Price</Text></Col>
        </Row>
        <Row>
          <Col size={6}><Text style={[styles.headerStyle, styles.leftSide]}>Name</Text></Col>
          <Col size={3}><Text style={[styles.headerStyle, styles.rightSide]}>% Change</Text></Col>
        </Row>
      </Col>
    </Grid>
  </View>
)

export default CryptoCurrencyListHeader
