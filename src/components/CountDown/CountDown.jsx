import React, { Component } from 'react';
import CountDown from 'react-countdown-clock';
import { connect } from 'react-redux';



class CountDownTimer extends Component {
    state = {
        completions: 0,
    }

    onComplete = () => {
        this.setState({
            completions: this.state.completions + 1
        },
            () => console.log('completions', this.state.completions)
        )
        this.props.dispatch({
            type: 'GET_NEW_GRASS_MONKEY'
        })
    }

    render() {
        return (
                <CountDown
                    key={this.state.completions}
                    seconds={15}
                    color="#000"
                    alpha={0.9}
                    size={150}
                    onComplete={this.onComplete}
                />
        )
    }
}

export default connect()(CountDownTimer);