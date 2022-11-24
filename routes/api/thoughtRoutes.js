const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

module.exports = router;
