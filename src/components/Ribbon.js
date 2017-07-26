import React, { Component } from 'react'
import { css } from 'glamor'

let absolutCenter = css({
    position: 'fixed',
    zIndex: '999',
    width: '100%',
    transform: 'translate(0px, -50%)',
    top: '50%'
})

class Ribbon extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  toggleEdit() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  renderBar() {
    return (
      <div className="container is-primary has-text-centered">
      <div className="field is-grouped is-grouped-centered ">
        <p className="control">
            <a className="button is-medium is-primary is-inverted" onClick={() => this.toggleEdit()}>
              <span className="icon is-medium">
                <i className={`fa fa-refresh`}></i>
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-medium is-danger is-inverted" onClick={() => this.toggleEdit()}>
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
      <div className="container has-text-centered">
        <a className="button is-medium is-primary" onClick={() => this.toggleEdit()}>
          <span className="icon is-medium">
            <i className={`fa fa-bars`}></i>
          </span>
        </a>
      </div>
    )
  }

  render() {
    const { open } = this.state

    return (
      <div className={absolutCenter}>
        {open ? this.renderBar() : this.renderMiddleButton()}
      </div>
    )
  }
}

export default Ribbon