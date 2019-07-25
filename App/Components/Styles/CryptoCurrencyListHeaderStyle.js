import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    backgroundColor: Colors.primaryColor
  },
  headerStyle: {
    fontFamily: Fonts.type.bold,
    color: Colors.accentColor
  },
  leftSide: {
    textAlign: 'left'
  },
  rightSide: {
    textAlign: 'right'
  }
})
