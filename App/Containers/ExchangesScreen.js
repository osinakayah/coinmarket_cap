import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Content, Header, Title } from 'native-base'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/ExchangesScreenStyle'
import { Colors, Fonts } from '../Themes'

class ExchangesScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header hasSubtitle={false} style={{ backgroundColor: Colors.primaryColor }} androidStatusBarColor={Colors.primaryDark} iosBarStyle={'light-content'}>
          <Title style={[Fonts.style.h6, { color: Colors.accentColor }]}>Exchanges</Title>
        </Header>
        <Content>
          <Text>ExchangesScreen</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesScreen)
