const express = require('express');
const router = express.Router();

/* GET review index listing. */
router.get('/', (req, res, next) => {
  res.send('GET review index');
});

/* POST review create listing. */
router.post('/create', (req, res, next) => {
    res.send('POST review create');
});

/* PUT review edit listing. */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('PUT review edit');
});

/* DELETE review destroy listing. */
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE review destroy');
});

module.exports = router;