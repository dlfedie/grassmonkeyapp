import React, { Component } from 'react';

import monkeyMap from '../images/monkeyMap.jpg';
import moment from 'moment';

class AboutPage extends Component {
  state = {
    timeToGo: 0
  }

  componentDidMount() {
    this.setTime();
  }

  setTime = () => {
    let clock = moment().add(90, 'seconds').calendar();
    this.setState({
      timeToGo: clock
    })
  }

  render() {



    return (
      <div>
        <h1>
          Monkey Madness!
        </h1>
        <img src={monkeyMap} alt="map" className="monkeyMap" />
        <h2>
          (times are approximate..)
        </h2>
        <p>
          6:30-8:00 - Dinner at Ginger Hop
        </p>
        <p>
          8:00 - Party bus pickup!
        </p>
        <p>
          9:00-10:00 - Cedar Inn for Monkey Awards
        </p>
        <p>
          10:30-12:00 - Uptown 
        </p>
        <p>
          12:30-2:00 - The Front
        </p>
        <h3>
          44 Wildcards have joined the party
        </h3>
        <h3>
          1:30 until Graham does something they'll regret
        </h3>
        {this.state.timeToGo}
        <h3>
          Welcome shot recipe:
        </h3>
        <p>
          Mix 1 part 99 Bananas with 1 Monkey body part. Serve immediately.
        </p>
      </div>
    )
  }
}

export default AboutPage;
