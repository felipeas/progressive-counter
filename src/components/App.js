import React, { Component } from 'react'
import Counter from './Counter'
import Ribbon from './Ribbon'
import { connect } from 'react-redux'

import {
  increment,
  decrement,
  reset
} from '../actions'

export class App extends Component {
  render() {
    const { counters, increment, decrement, reset } = this.props

    return (
      <div>
        <Ribbon
          reset={() => reset}
        />
        <div className="container is-fullheight is-fullwidth">
          {counters.map( (counter, index) =>(
            <Counter
              key={index}
              name={counter.name}
              life={counter.life}
              color={index === 1 ? 'black' : 'white'}
              position={index === 0 ? 'top' : 'bottom'}
              size="half"
              onIncrement={() => increment(index)}
              onDecrement={() => decrement(index)}
            />
          ))}
        </div>
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
  reset
}

const AppContainer = connect(  
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer