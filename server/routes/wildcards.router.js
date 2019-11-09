const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "wildcards" WHERE ID = 1;`;
    pool.query(queryText)
        .then((result) => {
            // console.log('in places GET router:', result);
            res.send(result.rows[0]);
        })
        .catch((error) => {
            // console.log('error in places GET router:', error);
            res.sendStatus(500);
        })
});


router.put('/', (req, res) => {
    let queryText = `UPDATE "wildcards" SET "wildcards" = "wildcards" + 1 WHERE ID = 1;`;
    pool.query(queryText)
        .then((result) => {
            // console.log('in places GET router:', result);
            res.sendStatus(201);
        })
        .catch((error) => {
            // console.log('error in places GET router:', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;