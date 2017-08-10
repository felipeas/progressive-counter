import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

let top = css({
  transform: 'rotate(180deg)'
})

let bottom = css({
  transform: 'rotate(360deg)' /*couldnt keep the joke out */
})

class Counter extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    life: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }
 
  // TODO: A lot refactor to fit 4 counters
  // parse colors to not us
  render() {
    const { name, life, color, size, position } = this.props

    const getPosition = () => {
      return position === 'top' ? top : bottom
    }

    const getBulmaHeroColor = () => {
      switch (color) {
        case 'green':
          return 'success'
        case 'black':
          return 'dark'
        case 'white':
          return 'light'
        case 'yellow':
          return 'warning'
        case 'blue':
          return 'info'
        case 'red':
          return 'danger'
        default:
          return 'primary'
      }
    }
    
    return(
      <div className={`hero is-${getBulmaHeroColor(color)} is-${size}height ${getPosition(position)}`}>
        <div className="hero-body is-unselectable">
          <div className="container has-text-centered"> 
            <div className="column">
              <h3 className="title is-1">
                <span className="icon is-large" onClick={this.props.onDecrement}>
                  <i className="fa fa-minus"></i>
                </span>
                <strong>{life}</strong>
                <span className="icon is-large" onClick={this.props.onIncrement}>
                  <i className="fa fa-plus"></i>
                </span>
              </h3>
              <h4 className="subtitle is-5">info</h4>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li><span>{name}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter