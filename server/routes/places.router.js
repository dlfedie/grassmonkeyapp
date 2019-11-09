const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectNonAdmin } = require('../modules/isAdminAuthentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
//get all list of places
router.get('/', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    let queryText = `SELECT * FROM "places"`
    pool.query(queryText)
        .then((result) => {
            console.log('in places GET router:', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in places GET router:', error);
            res.sendStatus(500);
        })
});

//get current place
router.get('/current', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    let queryText = `SELECT * FROM "current_place"`
    pool.query(queryText)
        .then((result) => {
            console.log('in current_place GET router:', result);
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log('error in current_place GET router:', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;