import React, { Component } from 'react'
import { Container, Content, Header, Title, Icon } from 'native-base'
import { connect } from 'react-redux'
import { Colors, Fonts } from '../Themes'
import { Col, Row, Grid } from 'react-native-easy-grid'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CryptocurrenciesScreenStyle'
import SearchBar from '../Components/SearchBar'
import CenterItem from '../Components/CenterItem'
import SingleCryptoCurrencyCard from '../Components/SingleCryptoCurrencyCard'

class CryptoCurrenciesScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: Colors.primaryColor }} androidStatusBarColor={Colors.primaryDark} iosBarStyle={'light-content'}>
          <Title style={[Fonts.style.h6, { color: Colors.accentColor }]}>CoinMarketCap</Title>
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col size={3}>
                <SearchBar />
              </Col>
              <Col size={0.5}>
                <CenterItem><Icon style={{color: Colors.fontColor}} name={'md-menu'} /></CenterItem>
              </Col>
              <Col size={0.5}>
                <CenterItem><Icon style={{color: Colors.darkgrey}} name={'md-grid'} /></CenterItem>
              </Col>
            </Row>
          </Grid>

          <SingleCryptoCurrencyCard />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrenciesScreen)
