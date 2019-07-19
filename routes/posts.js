const express = require('express');
const router = express.Router();

/* GET post index listing. */
router.get('/', (req, res, next) => {
  res.send('GET post index');
});

/* GET post new listing. */
router.get('/new', (req, res, next) => {
    res.send('GET post new');
});

/* POST post create listing. */
router.get('/create', (req, res, next) => {
    res.send('POST post create');
});

/* GET post show listing. */
router.get('/:id', (req, res, next) => {
    res.send('GET post show');
});

/* GET post edit listing. */
router.get('/:id/edit', (req, res, next) => {
    res.send('GET post edit');
});

/* PUT post edit listing. */
router.put('/:id', (req, res, next) => {
    res.send('PUT post edit');
});

/* DELETE post destroy listing. */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE post destroy');
});

module.exports = router;