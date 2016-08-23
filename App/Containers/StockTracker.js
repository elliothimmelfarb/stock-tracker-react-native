import React, { PropTypes } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import SymbolInput from '../Components/SymbolInput'
import Results from './Results'

// Styles
import styles from './Styles/StockTrackerStyle'

class StockTracker extends React.Component {

  constructor (props) {
    super(props)

    this.updateInput = this.updateInput.bind(this)
    this.lookup = this.lookup.bind(this)
  }

  static propTypes = {
    updateInput: PropTypes.func,
    lookup: PropTypes.func,
    searchValue: PropTypes.string,
    searchResults: PropTypes.array,
  }

  updateInput(value) {
    // console.log(value)
    this.props.updateInput(value)
  }

  lookup(symbol) {
    this.props.lookup(symbol)
  }

  render () {
    const { searchValue, lookup, searchResults } = this.props;
    const list = searchResults.length ? <Results /> : <View />
    return (
      <ScrollView style={styles.container}>
        <SymbolInput update={this.updateInput} value={searchValue} lookup={this.lookup}/>
        { list }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.input.value,
    searchResults: state.lookup.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInput: (value) => dispatch(Actions.updateInput(value)),
    lookup: (symbol) => dispatch(Actions.requestStockLookup(symbol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockTracker)
