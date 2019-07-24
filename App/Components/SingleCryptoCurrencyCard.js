import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './Styles/SingleCryptoCurrencyCardStyle'
import { Thumbnail, Text } from 'native-base'
import { Fonts, Colors } from '../Themes'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { LineChart, Grid as GraphGrid } from 'react-native-svg-charts'

export default class SingleCryptoCurrencyCard extends Component {
  // Prop type warnings
  static propTypes = {
    posIndex: PropTypes.number.isRequired
  }

  // Defaults for props
  static defaultProps = {
    posIndex: 0
  }

  render () {
    const data = [-0.112024, -3.56181, -0.320139]
    return (
      <View style={styles.container}>
        <Grid>
          <Col size={0.5}>
            <Thumbnail small source={{uri: 'https://cryptoclothing.cc/logos/bitcoin-btc-logo.png'}} />
          </Col>
          <Col size={3}>
            <Row>
              <Col size={2}><Text style={{fontFamily: Fonts.type.base, color: Colors.accentColor, textAlign: 'left'}}>BTC</Text></Col>
              <Col size={4}>
                <LineChart
                  style={{ height: 25 }}
                  data={data}
                  svg={{ stroke: 'rgb(217, 65, 65)' }}
                  contentInset={{ top: 20, bottom: 20 }}
                >
                  <GraphGrid />
                </LineChart>
              </Col>
              <Col size={3}><Text style={[{fontFamily: Fonts.type.base, textAlign: 'right', color: Colors.accentColor}]}>$9,1234</Text></Col>
            </Row>
            <Row>
              <Col size={6}><Text style={{fontSize: 13, fontFamily: Fonts.type.base, color: Colors.darkgrey, textAlign: 'left'}}>Bitcoin</Text></Col>
              <Col size={3}><Text style={{fontSize: 13, fontFamily: Fonts.type.base, textAlign: 'right', color: 'red'}}>% -3.56181</Text></Col>
            </Row>
          </Col>
        </Grid>
      </View>
    )
  }
}
