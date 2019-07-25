import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'
import { Container, Content, Header, Title, Icon, Spinner } from 'native-base'
import { connect } from 'react-redux'
import { Colors, Fonts } from '../Themes'
import { Col, Row, Grid } from 'react-native-easy-grid'
import CoinListActions from '../Redux/CoinListRedux'

// Styles
import styles from './Styles/CryptocurrenciesScreenStyle'
import SearchBar from '../Components/SearchBar'
import CenterItem from '../Components/CenterItem'
import SingleCryptoCurrencyCard from '../Components/SingleCryptoCurrencyCard'
import CryptoCurrencyListHeader from '../Components/CryptoCurrencyListHeader'
import PropTypes from 'prop-types'

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
    // const { coinList } = this.props
    // const newPage = this.state.page + 1
    // this.props.dispatchFetchCoins({
    //   page: newPage,
    //   payload: coinList.payload
    // })
    // this.setState({
    //   page: newPage
    // })
  }

  render () {
    const { coinList } = this.props

    return (
      <Container style={styles.container}>
        <Header hasSubtitle={false} style={{ backgroundColor: Colors.primaryColor }}
                androidStatusBarColor={Colors.primaryDark} iosBarStyle={'light-content'}>
          <Title style={[Fonts.style.h6, { color: Colors.accentColor }]}>CoinMarketCap</Title>
        </Header>
        <Content>
          <Grid>
            <Row>
              <Col size={3}>
                <SearchBar/>
              </Col>
              <Col size={0.5}>
                <CenterItem><Icon style={{ color: Colors.fontColor }} name={'md-menu'}/></CenterItem>
              </Col>
              <Col size={0.5}>
                <CenterItem><Icon style={{ color: Colors.darkgrey }} name={'md-grid'}/></CenterItem>
              </Col>
            </Row>
          </Grid>

          <FlatList
            ListHeaderComponent={<CryptoCurrencyListHeader/>}
            onEndReachedThreshold={0.1}
            onEndReached={this._handleLoadMore}
            keyExtractor={this._keyExtractor}
            renderItem={({ item, index }) => this._getSingleRow(item, index)}
            ListFooterComponent={this._renderFooter}
            data={coinList.payload}/>

        </Content>
      </Container>
    )
  }

  _renderFooter = () => {
    const { coinList } = this.props
    return <Spinner color={Colors.fontColor} />
    // return coinList.fetching ? <Spinner color={Colors.fontColor} /> : null
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
