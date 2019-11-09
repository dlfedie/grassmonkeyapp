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
    { monkey: 'Treece', gender: 'he' },
    { monkey: 'DVB', gender: 'he' },
    { monkey: 'Wrangham', gender: 'he' },
    { monkey: 'Carly', gender: 'she' },
    { monkey: 'Brenda', gender: 'she' },
    { monkey: 'Boomer', gender: 'she' },
    { monkey: 'Kristin', gender: 'she' },
    { monkey: 'Corinne', gender: 'she' },
    { monkey: 'Amy', gender: 'she' },
    { monkey: 'Sarah', gender: 'she' },
    { monkey: 'Smuder', gender: 'she' },
    { monkey: 'Kathy', gender: 'she' },
    { monkey: 'Shorts', gender: 'she' },
    { monkey: 'Wood', gender: 'he' },
    { monkey: 'Adro', gender: 'he' },
    { monkey: 'Jessica', gender: 'she' },
    { monkey: 'Steve II', gender: 'he' },
    { monkey: 'Benj', gender: 'he' },
    { monkey: 'Amber', gender: 'she' },


], action) => {
    switch (action.type) {
        case 'GET_MONKEYS':
            return [{ monkey: 'Graham', gender: 'he' },
            { monkey: 'Fedie', gender: 'he' },
            { monkey: 'H', gender: 'he' },
            { monkey: 'Tony', gender: 'he' },
            { monkey: 'Ben', gender: 'he' },
            { monkey: 'Vampire', gender: 'he' },
            { monkey: 'Rafferty', gender: 'he' },
            { monkey: 'Pat', gender: 'he' },
            { monkey: 'Treece', gender: 'he' },
            { monkey: 'DVB', gender: 'he' },
            { monkey: 'Wrangham', gender: 'he' },
            { monkey: 'Carly', gender: 'she' },
            { monkey: 'Brenda', gender: 'she' },
            { monkey: 'Boomer', gender: 'she' },
            { monkey: 'Kristin', gender: 'she' },
            { monkey: 'Corinne', gender: 'she' },
            { monkey: 'Amy', gender: 'she' },
            { monkey: 'Sarah', gender: 'she' },
            { monkey: 'Smuder', gender: 'she' },
            { monkey: 'Kathy', gender: 'she' },
            { monkey: 'Shorts', gender: 'she' },
            { monkey: 'Wood', gender: 'he' },
            { monkey: 'Adro', gender: 'he' },
            { monkey: 'Jessica', gender: 'she' },
            { monkey: 'Steve II', gender: 'he' },
            { monkey: 'Benj', gender: 'he' },
            { monkey: 'Amber', gender: 'she' },];
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
};

const allPlaces = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLACES':
            return action.payload;
        default:
            return state;
    }
};

const chosenPlace = (state = '', action) => {
    switch (action.type) {
        case 'SET_CURRENT_PLACE':
            return action.payload;
        default:
            return state;
    }
};

const numberOfWildcards = (state = 0, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_WILDCARDS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    grassMonkeyPlayers,
    chosenPlayer,
    allPlaces,
    chosenPlace,
    numberOfWildcards,
});