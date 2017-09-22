import React, { Component } from 'react';
import Counter from './Counter';
import Ribbon from './Ribbon';
import { connect } from 'react-redux';

import { increment, decrement, reset, set } from '../actions';

export class App extends Component {
  render() {
    const { counters, increment, decrement, reset, set, life } = this.props;
    // TODO: criar um web-service que sincroniza contadores, atraves do server.
    // sleep de 30 minutos sem ninguem mexer nos totais. dropa o jogo
    return (
      <div>
        <Ribbon reset={() => reset} set={set} life={life} />
        <div className="container is-fullheight is-fullwidth">
          {counters.map((counter, index) => (
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
    );
  }
}

const mapStateToProps = state => ({
  counters: state.app.items,
  life: state.app.life
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  set
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
