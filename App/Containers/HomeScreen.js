import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Content, Header, Title } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Header</Title>
        </Header>
        <Content>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
