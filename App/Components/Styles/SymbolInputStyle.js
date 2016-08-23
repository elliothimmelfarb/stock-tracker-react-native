import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
    alignItems: 'center',
  },
  textInput: {
    width: 200,
    height: 50,
    fontSize: 20,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 5,
    textAlign: 'center',
  },
  label: {
    color: 'white',
    marginBottom: -15,
    marginTop: 5,
  }
})
