import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

let absolutCenter = css({
    position: 'fixed',
    zIndex: '999',
    width: '100%',
    transform: 'translate(0px, -50%)',
    top: '50%'
})

class Ribbon extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { 
      isBarOpen: false,
      isModalOpen: false
    }
  }

  toggleBar() {
    const { isBarOpen } = this.state
    this.setState({ isBarOpen: !isBarOpen })
  }

  toggleEdit() {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
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
            <a className="button is-medium is-danger is-inverted" onClick={() => this.toggleBar()}>
              <span className="icon is-medium">
                <i className={`fa fa-close`}></i>
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-medium is-primary is-inverted" onClick={() => this.toggleEdit()}>
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
        <a className="button is-medium is-primary" onClick={() => this.toggleBar()}>
          <span className="icon is-medium">
            <i className={`fa fa-bars`}></i>
          </span>
        </a>
      </div>
    )
  }

  renderLifeInputModal() {
    return (
      <div className="container is-primary has-text-centered">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <input className="input" type="number" placeholder="Starting"/>
          </p>
          <p className="control">
            <a className="button is-info" onClick={() => this.toggleEdit()}>
              Ok
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