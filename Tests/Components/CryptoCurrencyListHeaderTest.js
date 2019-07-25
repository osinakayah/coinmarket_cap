
import 'react-native'
import React from 'react'
import CryptoCurrencyListHeader from '../../App/Components/CryptoCurrencyListHeader'
import renderer from 'react-test-renderer'

test('CenterItem component renders correctly', () => {
  const tree = renderer.create(<CryptoCurrencyListHeader />).toJSON()
  expect(tree).toMatchSnapshot()
})
