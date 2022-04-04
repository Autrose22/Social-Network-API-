const router = require('express').Router()
const {
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    createReaction,

} = require('../../controllers/thoughts-controller');
router
.route('/')
.get(getAllThoughts)
.post(createThought)

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

router
.route('/:thoughtId/reactions')
.post(createReaction)

module.exports = router