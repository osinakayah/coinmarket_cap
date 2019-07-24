import { createAppContainer, createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import React from 'react'
import { Icon } from 'native-base'

import CryptoCurrenciesScreen from '../Containers/CryptocurrenciesScreen'
import WatchListScreen from '../Containers/WatchListScreen'
import ExchangesScreen from '../Containers/ExchangesScreen'
import {Colors} from '../Themes'


const TabBarComponent = (props) => (<BottomTabBar {...props} />)

const PrimaryNav = createBottomTabNavigator({
  Exchanges: ExchangesScreen,
  CryptoCurrencies: CryptoCurrenciesScreen,
  WatchList: WatchListScreen
}, {
  initialRouteName: 'CryptoCurrencies',
  tabBarComponent: (props) => <TabBarComponent
    {...props}
    style={{ backgroundColor: Colors.primaryColor }}
  />,
  defaultNavigationOptions: ({navigation}) => ({

    tabBarIcon: ({ focused }) => {

      const { routeName } = navigation.state
      let iconName, color
      if (routeName === 'CryptoCurrencies') {
        iconName = 'md-pie'
        color = focused ? Colors.fontColor : Colors.grey
      }
      else if (routeName === 'WatchList') {
        iconName = 'md-stopwatch'
        color = focused ? Colors.fontColor : Colors.grey
      }
      else if (routeName === 'Exchanges') {
        iconName = 'md-swap'
        color = focused ? Colors.fontColor : Colors.grey
      }

      return <Icon name={iconName} style={{color: color}} />
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.fontColor,
  },
});

export default createAppContainer(PrimaryNav)
