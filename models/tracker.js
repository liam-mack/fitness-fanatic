const db = require("mongoose");
const { Schema } = db;


const trackerSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        // required: true,
        // default: 0,
        // validate: {
        //   validator: Math.sign(Number) != "-1",
        //   message: "Duration cannot be a negative value",
        // },
      },
      distance: {
        type: Number,
        required: true,
        default: 0,
        // validate: {
        //   validator: Math.sign(Number) != "-1",
        //   message: "Distance cannot be a negative value",
        // },
      },
      weight: {
        type: Number,
        required: true,
        default: 0,
        // validate: {
        //   validator: Math.sign(Number) != "-1",
        //   message: "Weight cannot be a negative value",
        // },
      },
      reps: {
        type: Number,
        required: true,
        default: 0,
        // validate: {
        //   validator: Math.sign(Number) != "-1",
        //   message: "Reps cannot be a negative value",
        // },
      },
      sets: {
        type: Number,
        required: true,
        default: 0,
        // validate: {
        //   validator: Math.sign(Number) != "-1",
        //   message: "Sets cannot be a negative value",
        // },
      },
    },
  ],
},
{
    toJSON: {
        virtuals: true,
    }
});

trackerSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });


const Workout = db.model("Workout", trackerSchema);

module.exports = Workout;
  
