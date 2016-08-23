import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/SymbolCardStyle'

export default class SymbolCard extends React.Component {
  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this)
  }
  // Prop type warnings
  static propTypes = {
    info: React.PropTypes.object,
  }

  onPress() {
    console.log('here')
  }

  render () {
    const { info } = this.props
    return (
      <TouchableHighlight
        style={styles.container}
        underlayColor="green"
        activeOpacity={0.5}
        onPress={() => this.onPress()}
      >
        <Text style={styles.text}>{info.Name}</Text>
      </TouchableHighlight>
    )
  }
}
