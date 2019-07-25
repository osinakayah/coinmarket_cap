
import 'react-native'
import {Text} from 'react-native'
import React from 'react'
import CenterItem from '../../App/Components/CenterItem'
import renderer from 'react-test-renderer'

test('CenterItem component renders correctly', () => {
  const tree = renderer.create(<CenterItem><Text>Hi</Text></CenterItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
