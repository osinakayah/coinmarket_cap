import React, { PureComponent } from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import { Container, Content, Header, Title, Icon, Spinner, Body, Right, Button } from 'native-base'
import { connect } from 'react-redux'
import { Col, Row, Grid } from 'react-native-easy-grid'


import styles from './Styles/CryptocurrenciesScreenStyle'
import CoinListActions from '../Redux/CoinListRedux'
import SearchBar from '../Components/SearchBar'
import CenterItem from '../Components/CenterItem'
import { Colors, Fonts, Metrics } from '../Themes'
import SingleCryptoCurrencyCard from '../Components/SingleCryptoCurrencyCard'
import CryptoCurrencyListHeader from '../Components/CryptoCurrencyListHeader'


class CryptoCurrenciesScreen extends PureComponent {
  static propTypes = {
    dispatchFetchCoins: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      page: 1,
    }
  }

  componentDidMount (): void {
    this.props.dispatchFetchCoins({
      page: this.state.page,
      payload: []
    })
  }

  _getSingleRow = (item, index) => {

    const data = [item.quote.USD.percent_change_1h, item.quote.USD.percent_change_24h, item.quote.USD.percent_change_7d]
    return <SingleCryptoCurrencyCard posIndex={index + 1} symbol={item.symbol} name={item.name} data={data}
                                     price={item.quote.USD.price} percentageChange={item.quote.USD.percent_change_24h}/>
  }
  _keyExtractor = (item) => item.id.toString()
  _handleRefresh = () => {
    this.props.dispatchFetchCoins({
      page: 1,
      payload: []
    })
    this.setState({
      page: 1,
    })
  }
  _handleLoadMore = () => {
    const { coinList } = this.props
    const newPage = this.state.page + 1
    this.props.dispatchFetchCoins({
      page: newPage,
      payload: coinList.payload
    })
    this.setState({
      page: newPage
    })
  }

  render () {
    const { coinList } = this.props

    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: Colors.primaryColor }}
                androidStatusBarColor={Colors.primaryDark} iosBarStyle={'light-content'}>
          <Body>
            <Title style={[Fonts.style.h6, { color: Colors.accentColor }]}>CoinMarketCap</Title>
          </Body>
          <Right>
            <Button transparent onPress={this._handleRefresh}>
              <Icon style={{color: Colors.accentColor }} name='md-refresh' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col size={3}>
                <SearchBar />
              </Col>
              <Col size={0.5}>
                <CenterItem><Icon style={{ color: Colors.fontColor }} name={'md-menu'} /></CenterItem>
              </Col>
              <Col size={0.5}>
                <CenterItem><Icon style={{ color: Colors.darkgrey }} name={'md-grid'} /></CenterItem>
              </Col>
            </Row>
          </Grid>

          <View style={{height: Metrics.screenHeight}}>
            <FlatList
              onRefresh={this._handleRefresh}
              refreshing={coinList.fetching && this.state.page === 1}
              ListHeaderComponent={<CryptoCurrencyListHeader />}
              onEndReachedThreshold={0.5}
              onEndReached={this._handleLoadMore}
              keyExtractor={this._keyExtractor}x
              renderItem={({ item, index }) => this._getSingleRow(item, index)}
              ListFooterComponent={this._renderFooter}
              data={coinList.payload} />
          </View>


        </Content>
      </Container>
    )
  }

  _renderFooter = () => {
    const { coinList } = this.props
    return coinList.fetching ? <Spinner color={Colors.fontColor} /> : null
  }
}

const mapStateToProps = (state) => {
  return {
    coinList: state.coinList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchCoins: (data) => dispatch(CoinListActions.coinListRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoCurrenciesScreen)
