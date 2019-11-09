import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';


class InfoPage extends Component {

  state = {
    bloo: 0,
  }

  componentDidMount() {
    this.fetchPlaces();
    this.fetchCurrentPlace();

  };

  fetchPlaces = () => {
    this.props.dispatch({
      type: 'FETCH_PLACES'
    })
  };

  fetchWildcards = () => {
    this.props.dispatch({
      type: 'FETCH_WILDCARDS'
    })
  };

  fetchCurrentPlace = () => {
    this.props.dispatch({
      type: 'FETCH_CURRENT_PLACE'
    })
  };

  handleResetWildcards = () => {
    console.log('clicked button');

    this.props.dispatch({
      type: 'RESET_WILDCARDS'
    })
  };
  


  render() {

    let placesToGo = this.props.places.map((place) => {
      return <option key={place.id} value={place.id}>{place.place}</option>
    })

    return (
      <div>
        <h1>Edit Page</h1>
        {/* {JSON.stringify(this.props.places)} */}
        {/* {JSON.stringify(this.props.currentPlace)} */}
        <h2>Current Place: {this.props.currentPlace.place}</h2>
        <select
          onChange={event =>
            this.props.dispatch({
              type: 'EDIT_CURRENT_LOCATION',
              payload: event.target.value
            })}
          className="selector"
          >
          {placesToGo}
        </select>
        <div className="wildcardButton">
          <Button variant="contained" color="primary" onClick={this.handleResetWildcards} style={{ margin: '5px' }} className="wildcardButton">
            Reset Wildcards
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxStore => {
  return {
    monkeys: reduxStore.monkeys.grassMonkeyPlayers,
    chosen: reduxStore.monkeys.chosenPlayer,
    places: reduxStore.monkeys.allPlaces,
    currentPlace: reduxStore.monkeys.chosenPlace,
    wildcards: reduxStore.monkeys.numberOfWildcards,
  };
};

export default connect(mapStateToProps)(InfoPage);
