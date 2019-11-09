import React, { Component } from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {

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


  render() {

    let placesToGo = this.props.places.map((place) => {
      return <option key={place.id} value={place.id}>{place.place}</option>
    })

    return (
      <div>
        <h1>Edit Page</h1>
        {JSON.stringify(this.props.places)}
        {JSON.stringify(this.props.currentPlace)}
        <h2>Current Place: {this.props.currentPlace.place}</h2>
        <select
          onChange={event =>
            this.props.dispatch({
              type: 'EDIT_CURRENT_LOCATION',
              payload: event.target.value
            })}>
          {placesToGo}
        </select>
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
