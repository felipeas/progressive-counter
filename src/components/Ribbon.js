import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import NoSleep from 'nosleep.js/dist/NoSleep.min.js'

let absolutCenter = css({
    position: 'fixed',
    zIndex: '999',
    width: '100%',
    transform: 'translate(0px, -50%)',
    top: '50%'
})

class Ribbon extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
    set: PropTypes.func.isRequired,
    life: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isBarOpen: false,
      isModalOpen: false,
      life: props.life
    }
  }

  enableNoSleep() {
    const ns = new NoSleep()
    ns.enable()
  }

  handleToggleBar() {
    const { isBarOpen } = this.state

    this.setState({ isBarOpen: !isBarOpen })
    this.enableNoSleep()
  }

  handleToggleEdit() {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  handleChangeLife = e => {
    this.setState({ life: e.target.value })
  }

  handleSetLife = () => {
  debugger
    this.props.set(this.state.life)
    this.handleToggleEdit()
    this.handleToggleBar()
  }

  renderBar() {
    return (
      <div className="container is-primary has-text-centered">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <a className="button is-medium is-primary is-inverted" onClick={this.props.reset()}>
              <span className="icon is-medium">
                <i className={`fa fa-refresh`}></i>
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-medium is-danger is-inverted" onClick={() => this.handleToggleBar()}>
              <span className="icon is-medium">
                <i className={`fa fa-close`}></i>
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-medium is-primary is-inverted" onClick={() => this.handleToggleEdit()}>
              <span className="icon is-medium">
                <i className={`fa fa-tasks`}></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    )
  }

  renderMiddleButton() {
    return (
      <div className="container has-text-centered is-grouped-centered ">
        <a className="button is-medium is-primary" onClick={() => this.handleToggleBar()}>
          <span className="icon is-medium">
            <i className={`fa fa-bars`}></i>
          </span>
        </a>
      </div>
    )
  }
  // TODO: handle submit
  renderLifeInputModal() {
    const life = this.state.life

    return (
      <div className="container is-primary has-text-centered">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <input 
              className="input" 
              type="number" 
              placeholder="42" 
              value={life}
              onChange={this.handleChangeLife}
            />
          </p>
          <p className="control">
            <a className="button is-info" onClick={() => this.handleSetLife()}>
              <span className="icon">
                <i className={`fa fa-rebel`}></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    )
  }

  render() {
    const { isBarOpen, isModalOpen } = this.state

    return (
      <div className={absolutCenter}>
        {isModalOpen ? this.renderLifeInputModal() : isBarOpen ? this.renderBar() : this.renderMiddleButton() }
      </div>
    )
  }
}

export default Ribbon