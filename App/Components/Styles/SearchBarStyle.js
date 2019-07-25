import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(142, 142, 147, 0.12)',
    borderRadius: 12,
    fontFamily: Fonts.type.base,
    margin: Metrics.smallMargin
  },
  inputStyle: {
    color: Colors.accentColor
  },
  itemStyle: {
    borderColor: 'transparent'
  },
  searchIconStyle: {
    color: Colors.darkgrey,
    paddingLeft: Metrics.marginHorizontal
  }
})
