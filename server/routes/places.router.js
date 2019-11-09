const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectNonAdmin } = require('../modules/isAdminAuthentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
//get all list of places
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "places"`
    pool.query(queryText)
        .then((result) => {
            // console.log('in places GET router:', result);
            res.send(result.rows);
        })
        .catch((error) => {
            // console.log('error in places GET router:', error);
            res.sendStatus(500);
        })
});

//get current place
router.get('/current', (req, res) => {
    let queryText = `SELECT * FROM "current_place"`
    pool.query(queryText)
        .then((result) => {
            // console.log('in current_place GET router:', result);
            res.send(result.rows[0]);
        })
        .catch((error) => {
            // console.log('error in current_place GET router:', error);
            res.sendStatus(500);
        })
});


//PUT route for changing place
router.put('/edit', rejectUnauthenticated, rejectNonAdmin, async (req, res) => {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN');
        const placeId = req.body.id;
        // console.log(placeId);
        const queryGetNewPlace = `SELECT * FROM "places" where ID = $1;`;
        const result = await connection.query(queryGetNewPlace, [placeId]);
        const newPlace = result.rows[0];
        console.log('new place:', newPlace);
        const removeOldPlace = `DELETE FROM "current_place";`;
        await connection.query(removeOldPlace);
        const addNewPlace = `INSERT INTO "current_place" ("place_id", "place")
                                VALUES ($1, $2);`;
        await connection.query(addNewPlace, [newPlace.id, newPlace.place])
        // console.log('yay, inserting?');
        
        
        await connection.query('COMMIT');
    } catch {
        await connection.query('ROLLBACK');
        res.sendStatus(500);
    } finally {
        connection.release();
    }
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;