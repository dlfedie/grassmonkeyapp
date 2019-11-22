import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import monkeyMap from '../images/monkeyMap.jpg';
// import moment from 'moment';

// import Clock from '../Clock/Clock';
import CountDownTimer from '../CountDown/CountDown';


class AboutPage extends Component {
  

  componentDidMount() {
    this.fetchCurrentPlace();

  }


  fetchCurrentPlace = () => {
    this.props.dispatch({
      type: 'FETCH_CURRENT_PLACE'
    })
  };

  handleAddWildcard = () => {
    console.log('clicked button');
    
    this.props.dispatch({
      type: 'ADD_WILDCARD'
    })
  };

  

  render() {




    return (
      <div>
        <h1>Monkey Madness!</h1>
        <h2>Monkeys are currently at:</h2>
        <h2>{this.props.currentPlace.place}</h2>
        <img src={monkeyMap} alt="map" className="monkeyMap" />
        <h2>(times are approximate..)</h2>
        <p>6:30-8:00 - Dinner at Ginger Hop</p>
        <p>8:00 - Party bus pickup!</p>
        <p>9:00-10:00 - Cedar Inn for Monkey Awards</p>
        <p>10:30-12:00 - Uptown</p>
        <p>12:30-2:00 - The Front</p>
        <h3>{this.props.wildcards} <span className="wildcards">Wildcards</span> have joined the party</h3>
        <div className="wildcardButton">
          <Button variant="contained" color="primary" onClick={this.handleAddWildcard} style={{ margin: '5px' }} className="wildcardButton">
            Add a Wildcard!!
          </Button>
        </div>
        <h2>Timer of Regrets</h2>
        <div className="countdownTimer">
          <CountDownTimer />
        </div>
        <h3>until {this.props.chosen.monkey} does something {this.props.chosen.gender}'ll regret</h3>
        {/* {JSON.stringify(this.props.monkeys)} */}
        <h3>Welcome shot recipe:</h3>
        <p>1 part 99 Bananas, 1 hug from any Monkey</p>
      </div>
    )
  }
}

const mapStateToProps = reduxStore => {
  return {
    monkeys: reduxStore.monkeys.grassMonkeyPlayers,
    chosen: reduxStore.monkeys.chosenPlayer,
    currentPlace: reduxStore.monkeys.chosenPlace,
    wildcards: reduxStore.monkeys.numberOfWildcards,
  };
};

export default connect(mapStateToProps)(AboutPage);
