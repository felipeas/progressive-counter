import React, { Component } from 'react'
import Counter from './Counter'
import Ribbon from './Ribbon'
import { connect } from 'react-redux'

import {
  increment,
  decrement,
} from '../actions'

export class App extends Component {
  render() {
    const { counters } = this.props

    return (
      <div className="container is-fullheight is-fullwidth">
        <Ribbon/>
        {counters.map( (counter, index) =>(
          <Counter
            key={index}
            name={counter.name}
            life={counter.life}
            color={index === 1 ? 'black' : 'white'}
            position={index === 0 ? 'top' : 'bottom'}
            size="half"
            onIncrement={() => this.props.increment(index)}
            onDecrement={() => this.props.decrement(index)}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({  
  counters: state.list,
})

const mapDispatchToProps = {  
  increment,
  decrement,
}

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer