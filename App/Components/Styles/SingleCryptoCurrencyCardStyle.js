import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.primaryDark,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,

    paddingLeft: Metrics.smallMargin,
    paddingRight: Metrics.smallMargin
  }
})
