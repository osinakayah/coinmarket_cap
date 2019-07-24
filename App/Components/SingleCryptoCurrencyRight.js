import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/SingleCryptoCurrencyRightStyle'
import { Col, Grid } from 'react-native-easy-grid'
import { Icon } from 'native-base'
import { Colors, Fonts } from '../Themes'
import CenterItem from './CenterItem'

export default class SingleCryptoCurrencyRight extends Component {
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
          <Col size={1.5}>
            <Text style={[Fonts.style.normal, {color: Colors.accentColor, textAlign: 'right'}]}>$120,002</Text>
            <View style={{flexDirection: 'row'}}>
              <CenterItem><Icon name={'md-arrow-dropdown'} style={{color: 'red'}} /></CenterItem>
              <CenterItem>
                <Text style={[Fonts.style.normal, {fontSize: 10, color: Colors.lightgrey}]}>$12,0002</Text>
              </CenterItem>
            </View>
          </Col>
        </Grid>
      </View>
    )
  }
}
