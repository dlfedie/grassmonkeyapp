import { takeLatest } from 'redux-saga/effects';
// import axios from 'axios';


function* getMonkey(action) {
    yield console.log('monkey');
    
    
    
}

function* monkeySaga() {
    yield takeLatest('GET_NEW_GRASS_MONKEY', getMonkey)
}

export default monkeySaga;