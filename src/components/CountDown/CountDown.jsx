import React, { Component } from 'react';
import CountDown from 'react-countdown-clock';
import { connect } from 'react-redux';



class CountDownTimer extends Component {
    state = {
        completions: 0,
    }

    componentDidMount() {
        let randomMonkeyNum = Math.floor(Math.random() * 21);
        console.log(randomMonkeyNum);
        let chosenMonkey = this.props.monkeys[randomMonkeyNum];


        this.props.dispatch({
            type: 'SET_MONKEY',
            payload: chosenMonkey
        });
        this.props.dispatch({
            type: 'FETCH_CURRENT_PLACE'
        });
        this.props.dispatch({
            type: 'FETCH_WILDCARDS'
        });
    }

    onComplete = () => {
        this.setState({
            completions: this.state.completions + 1
        },
            () => console.log('completions', this.state.completions)
        )

        let randomMonkeyNum = Math.floor(Math.random() * 26);
        console.log(randomMonkeyNum);
        let chosenMonkey = this.props.monkeys[randomMonkeyNum];


        this.props.dispatch({
            type: 'SET_MONKEY',
            payload: chosenMonkey
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

const mapStateToProps = reduxStore => {
    return {
        monkeys: reduxStore.monkeys.grassMonkeyPlayers,
        chosen: reduxStore.monkeys.chosenPlayer,
    };
};

export default connect(mapStateToProps)(CountDownTimer);