import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPlaces(action) {
    yield console.log('in fetch places saga');
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/places`, config)
        yield put({ type: 'SET_PLACES', payload: response.data })
    } catch (error) {
        console.log('error in fetchLocations saga:', error)
    }
};

function* fetchCurrentPlace(action) {
    yield console.log('in fetch current place saga');
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/places/current`, config)
        yield put({ type: 'SET_CURRENT_PLACE', payload: response.data })
    } catch (error) {
        console.log('error in fetchLocations saga:', error)
    }
};

function* editCurrentPlace(action) {
    yield console.log('in edit place, selecting:', action.payload);
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.put(`/`)

    } catch (error) {
        console.log('error in edit current place saga:', error);
    }
};

function* monkeySaga() {
    yield takeLatest('FETCH_PLACES', fetchPlaces);
    yield takeLatest('FETCH_CURRENT_PLACE', fetchCurrentPlace);
    yield takeLatest('EDIT_CURRENT_LOCATION', editCurrentPlace);
}

export default monkeySaga;