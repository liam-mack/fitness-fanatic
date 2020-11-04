const router = require("express").Router();
const tracker = require("../models/tracker.js");

// Import database model and perform GET, POST, & PUT requests with the data

router.get("/api/workouts", (req, res) => {
    tracker.find().then(results => res.json(results))
    .catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    tracker.find()
    .then(results => res.json(results))
    .catch(err => res.json(err));
});

router.post("/api/workouts", (req, res) => {
    tracker.create({}).then(results => res.json(results))
    .catch(err => res.json(err));
});

router.put("/api/workouts/:id", (req, res) => {
    tracker.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(results => res.json(results))
    .catch(err => res.json(err));
});



module.exports = router;
