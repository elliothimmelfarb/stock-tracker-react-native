import React, { PropTypes } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/SymbolInputStyle'

export default class SymbolInput extends React.Component {

  // Prop type warnings
  static propTypes = {
    value: PropTypes.string,
    update: PropTypes.func,
    lookup: PropTypes.func,
  }

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const { value, update, lookup } = this.props
    console.log(value);
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Input a Stock Symbol to Search:
        </Text>
        <TextInput
          value={value}
          onChangeText={val => update(val)}
          autoCapitalize="characters"
          returnKeyType="search"
          style={styles.textInput}
          maxLength={5}
          clearTextOnFocus={true}
          onSubmitEditing={() => lookup(value)}
        />
      </View>
    )
  }
}
