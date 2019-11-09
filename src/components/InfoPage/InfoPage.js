import React, { Component } from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {
  render() {
    return (
      <div>
        <h1>Edit Page</h1>
      </div>
    )
  }
}

const mapStateToProps = reduxStore => {
  return {
    monkeys: reduxStore.monkeys.grassMonkeyPlayers,
    chosen: reduxStore.monkeys.chosenPlayer,
  };
};

export default connect(mapStateToProps)(InfoPage);
