import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Thumbnail, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { LineChart } from 'react-native-svg-charts'

import styles from './Styles/SingleCryptoCurrencyCardStyle'
import { Colors } from '../Themes'

export default class SingleCryptoCurrencyCard extends PureComponent {
  // Prop type warnings
  static propTypes = {
    posIndex: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    percentageChange: PropTypes.number.isRequired
  }

  formatNumberAsCurrency = (amount) => {
    if (!isNaN(amount)) {
      amount = amount.toFixed(2)
    }
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render () {
    const color = this.props.percentageChange > 0 ? 'green' : 'red'
    return (
      <View
        style={[styles.container, this.props.posIndex % 2 === 0 ? { backgroundColor: Colors.primaryColor } : { backgroundColor: Colors.primaryDark }]}>
        <Grid>
          <Col size={0.5}>
            <Thumbnail small
                       source={{ uri: `https://cryptoclothing.cc/logos/${this.props.name.toLowerCase()}-${this.props.symbol.toLowerCase()}-logo.png` }}/>
          </Col>
          <Col size={3}>
            <Row>
              <Col size={2}><Text
                style={[styles.headerStyle, styles.leftSide]}>{this.props.symbol}</Text></Col>
              <Col size={4}>
                <LineChart
                  style={{ height: 25 }}
                  data={this.props.data}
                  showGrid={false}
                  svg={{ stroke: color }}
                  contentInset={{ top: 20, bottom: 20 }}
                />
              </Col>
              <Col size={3}><Text
                style={[styles.headerStyle, styles.rightSide]}>${this.formatNumberAsCurrency(this.props.price)}</Text></Col>
            </Row>
            <Row>
              <Col size={6}><Text style={[styles.headerStyle, styles.leftSide, {
                fontSize: 12,
                color: Colors.darkgrey
              }]}>{this.props.name}</Text></Col>
              <Col size={3}><Text style={[styles.headerStyle, styles.rightSide, {
                fontSize: 12,
                color: color
              }]}>%{this.props.percentageChange.toFixed(2)}</Text></Col>
            </Row>
          </Col>
        </Grid>
      </View>
    )
  }
}
