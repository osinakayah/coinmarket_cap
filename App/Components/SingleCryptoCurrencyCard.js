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
    posIndex: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    percentageChange: PropTypes.number.isRequired
  }

  formatNumberAsCurency  = (num) => {
    if(isNaN(num) === false){
      num = parseFloat(num);
      num = num.toFixed(2);
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  render () {
    const color = this.props.percentageChange > 0 ? 'green':'red'
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
                style={{
                  fontFamily: Fonts.type.base,
                  color: Colors.accentColor,
                  textAlign: 'left'
                }}>{this.props.symbol}</Text></Col>
              <Col size={4}>
                <LineChart
                  style={{ height: 25 }}
                  data={this.props.data}
                  svg={{ stroke: color }}
                  contentInset={{ top: 20, bottom: 20 }}
                >
                  <GraphGrid/>
                </LineChart>
              </Col>
              <Col size={3}><Text
                style={[{
                  fontFamily: Fonts.type.base,
                  textAlign: 'right',
                  color: Colors.accentColor
                }]}>{this.formatNumberAsCurency(this.props.price)}</Text></Col>
            </Row>
            <Row>
              <Col size={6}><Text style={{
                fontSize: 13,
                fontFamily: Fonts.type.base,
                color: Colors.darkgrey,
                textAlign: 'left'
              }}>{this.props.name}</Text></Col>
              <Col size={3}><Text
                style={{
                  fontSize: 13,
                  fontFamily: Fonts.type.base,
                  textAlign: 'right',
                  color: color
                }}>{this.props.percentageChange}</Text></Col>
            </Row>
          </Col>
        </Grid>
      </View>
    )
  }
}
