import { combineReducers } from 'redux';

const grassMonkeyPlayers = (state = [
    { monkey: 'Graham', gender: 'he' },
    { monkey: 'Fedie', gender: 'he' },
    { monkey: 'H', gender: 'he' },
    { monkey: 'Tony', gender: 'he' },
    { monkey: 'Ben', gender: 'he' },
    { monkey: 'Vampire', gender: 'he' },
    { monkey: 'Rafferty', gender: 'he' },
    { monkey: 'Pat', gender: 'he' },
    { monkey: 'Brian', gender: 'he' },
    { monkey: 'DVB', gender: 'he' },
    { monkey: 'Steve', gender: 'he' },
    { monkey: 'Carly', gender: 'she' },
    { monkey: 'Brenda', gender: 'she' },
    { monkey: 'Erin', gender: 'she' },
    { monkey: 'Kristin', gender: 'she' },
    { monkey: 'Corinne', gender: 'she' },
    { monkey: 'Amy', gender: 'she' },
    { monkey: 'Sarah', gender: 'she' },
    { monkey: 'Smuder', gender: 'she' },
    { monkey: 'Kathy', gender: 'she' },
    { monkey: 'Shorts', gender: 'she' },
    

], action) => {
    switch (action.type) {
        case 'GET_MONKEYS':
            return [];
        default:
            return state;
    }
};

const chosenPlayer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MONKEY':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    grassMonkeyPlayers,
    chosenPlayer,
});